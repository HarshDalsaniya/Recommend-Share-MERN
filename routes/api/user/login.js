var express = require('express');
var router = express.Router();
// var hash = require('../../pass').hash;
var path = require('path');
var multer = require('multer');
var bcrypt = require('bcryptjs');
var msg = require('../../../config/messages');
var func = require('../../../config/functions');
var functions = func.func();
var messages = msg.messages;
var connection = require('express-myconnection');
var async = require('async');
var thumb = require('node-thumbnail').thumb;
// var auth_service = require('../../services/auth');
// var eml = require('../../services/email');
// var emailservice = eml.func();
const constants = require('../../../config/constants');
// var locale = require('../../config/configi18n');
var jwt = require('jsonwebtoken');
const io = require('socket.io')();
const fs = require('fs');
const csvtojson = require('csvtojson');
var lodash = require('lodash');
var moment = require('moment');
var gnl = require('../../../services/general');
var md5 = require('md5');
var session = require('express-session');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody, matchedData } = require('express-validator/filter');
var cors = require("cors");
var address = require('address');
var { machineId, machineIdSync } = require('node-machine-id');

router.use(cors())

var general = gnl.func();

router.get("/harsh", (req, res) => {
    res.send("hello world");
});

router.post('/login', cors(), function (req, res) {
    var post = req.body;
    response = {};
    console.log("testestest", post)

    var required_params = ['email', 'password'];

    // console.log(required_params); 

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if (valid) {

        req.getConnection(function (err, connection) {
            var data = {
                email: post.email,
                password: md5(post.password)
            };

            // c62ac98937679cd7fa090c411b5bba9c             
            var sql = `select * from user where email="${data.email}" and password="${data.password}"`;
            // const token = general.generateAccessToken({ email: req.body.email });


            connection.query(sql, function (err, result) {
                // console.log(result);
                // console.log(md5("ravi@123"));
                console.log("this.sql======================>", this.sql);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                var sql2 = `select * from user_token where user_device_id`
                if (result.length > 0) {



                    // async function getMachineId() {
                    //     var Device_Id = await machineId();

                    //     return Device_Id, address
                    // }
                    const Device_Ip_Address = address.ip()
                    let ID = async () => {
                        var Device_Id = await machineId();

                        return Device_Id
                    }
                    console.log(machineIdSync())


                    const token = general.generateAccessToken({ id: result[0].id });
                    var sql2 = `insert into user_token set userId=${result[0].id} , token="${token}" , user_device_Id="HP_Dalsaniya" , user_device_Ip="1"`
                    connection.query(sql2, function (err, JSON_web_token) {
                        if (err) {
                            console.log(err);
                            response = general.response_format(false, messages.ERROR_PROCESSING, {});
                            res.send(response);
                        }
                        // pushing token into response 
                        var newData = {
                            token: token
                        }
                        result.push(newData);
                        response = general.response_format(true, "Login Successfully", result, JSON_web_token);

                        res.send(response);
                    });
                } else {
                    response = general.response_format(false, "Invalid username or password");
                    res.send(response);
                }
            });
        });
    } else {
        res.send('Please enter email and password!');
        res.end();
    }
});


module.exports = router;
