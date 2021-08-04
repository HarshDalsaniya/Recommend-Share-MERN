var express = require('express');
var router = express.Router();
var path = require('path');
// var multer = require('multer');
// var bcrypt = require('bcrypt');
var msg = require('../../../config/messages');
var func = require('../../../config/functions');
var functions = func.func();
var messages = msg.messages;
var async = require('async');
var thumb = require('node-thumbnail').thumb;
// var auth_service = require('../../../services/auth');
// var eml = require('../../../services/email');
// var emailservice = eml.func();
// const {transporter , mailOptions} = require('../../../services/email')
const { funcEmail } = require('../../../services/email');
const constants = require('../../../config/constants');
// var locale = require('../../../config/configi18n');
// var jwt = require('jsonwebtoken');
const io = require('socket.io')();
const csvtojson = require('csvtojson');
var lodash = require('lodash');
var moment = require('moment');
var gnl = require('../../../services/general');
var md5 = require('md5');
var cors = require("cors");
// const { response } = require('express');
// const { post } = require('./login');
// const console = require('console');
// const upload = require('../../../config/file-upload');
var gnl = require('../../../services/general');
var Promise = require('promise');
// var User = require('../../../models/userDocument');


var fs = require('fs');
// const { response } = require('../../../app');

router.use(cors())
// router.use(multer())
var general = gnl.func();

router.post('/harsh', (req, res) => {
    res.send("hello world");
});



// Forgotpasword Api
router.post('/forgotpassword', cors(), function (req, res) {
    var post = req.body;
    response = {};
    console.log("testestest", post)

    var required_params = ['email'];
    // post.email?required_params.push('email'):null;
    // post.phone?required_params.push('phone'):null;
    console.log(required_params);

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if (valid && post.email ) {    

        req.getConnection(function (err, connection) {
            var data = {
                email: post.email,         
             
            };
            // c62ac98937679cd7fa090c411b5bba9c 
            console.log("heloo");

            var sql = `select _id, firstName, lastName, email, phone  from register where email='${data.email}'`;

            if (err) throw err;
            let d = new Date();
            let timestamp = d.getTime();
            console.log(timestamp);
            // var sql = `select * from register where phone="${data.phone}" and password="${md5(post.password)}"`;

            connection.query(sql, function (err, result) {
                // console.log(result[0].phone);
                // console.log(md5("ravi@123"));
                console.log("this.sql======================>", this.sql);
                if (err) {
                    console.log("con 3");
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                if (result.length > 0) {
                    console.log("con 1");
                    var uniqueKey = md5(timestamp);
                    var sql = `update register set uniqueKey="${uniqueKey}" where email = "${(result[0].email)}" OR phone = "${(result[0].phone)}"`;
                    connection.query(sql, function (err, data) {
                        console.log(uniqueKey);
                        response = general.response_format(true, "User Data", result);
                        //  console.log(funcEmail());
                        emailBody = `<h3>Dear User, ${result[0].firstName} ${result[0].lastName}</h3>, <br> your request for forget your password , <br>
                                forget Url: <a href="http://localhost:3000/user/reset-password?uniqueKey=${uniqueKey}">http://localhost:3000/user/reset-password?uniqueKey${uniqueKey}</a>`;
                        funcEmail(result[0].email, "forget password", emailBody);
                        res.send(response);
                    });
                } else {
                    console.log("con 2");
                    response = general.response_format(false, "Invalid email or phone", result);
                    res.send(response);
                }
            });
        });
    } else {
        res.send('Please enter email OR phone!');
        res.end();
    }
});


module.exports = router;