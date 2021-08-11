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
const { json } = require('body-parser');



router.use(cors())

var general = gnl.func();

router.get("/harsh", (req, res) => {
    res.send("hello world");
});

router.post("/",cors(),(req,res)=>{
    response = {};
    req.getConnection((err,connection)=>{
        console.log(req.body)
        sql=`select name, email, telephone, mobile, address_postcode, address_line_1, address_line_2, address_town, address_county, notification_received_email, notification_received_sms, notification_marketing_email from user where email='${req.body.email}'`
        connection.query(sql,(err,result)=>{
            if(err){
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }else{
                response = general.response_format(true, "User Data", result[0]);
                res.send(response);
            }
        })
    })
})

router.post('/userUpdate', cors(), function (req, res, next) {
    var post = req.body;
    response = {};
    // console.log("testestest", post)
    var errors = new Array();
    errors = {blankValue:{},invalidValue:{},verifyError:{}};
    var required_params = ['email', 'name', 'mobile', 'address_postcode', 'address_line_1', 'address_town', 'address_county'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;

    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(post.email)){
        valid=false
        errors.invalidValue.email="Email is not Valid"
    }
    if(post.mobile.length>10 || post.mobile.length<10){
        valid=false
        errors.invalidValue.mobile="Mobile No. should be 10 digit"
    }
    if(!/^[a-zA-Z\s]*$/.test(post.name)){
        valid=false
        errors.invalidValue.name="Full Name is not Valid"
    }
    if (valid) {
        console.log("in valid")
        req.getConnection(function (err, connection) {
            // console.log(post);
            var sql = `SELECT * FROM user where email='${post.email}' and mobile='${post.mobile}';`;
            connection.query(sql, function (err, result) {
                // console.log("this.sql======================>", this.sql);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                else {
                    if (result.length > 0) {
                        var data = {
                            telephone: post.telephone,
                            name: post.name,
                            mobile: post.mobile,
                            address_line_1: post.address_line_1,
                            address_line_2: post.address_line_2,
                            address_town: post.address_town,
                            address_county: post.address_county,
                            address_postcode: post.address_postcode,
                            notification_received_sms: 1,
                            notification_received_email: 1,
                            notification_marketing_email: 1
                        }
                        var updateSql = `update user set ? where email=${post.email}`;
                        connection.query(updateSql, data, function (err, updateUser) {
                            // console.log("this.sql======================>",this.sql);
                            if (err) {
                                console.log(err);
                                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                res.send(response);
                            } else {
                                response = general.response_format(true, "User Update SuccessFull");
                                res.send(response);
                            }
                        })
                    } else {
                        errors.verifyError.registerError="User not Found"
                        response = general.response_format(false, errors, {});
                        res.send(response);
                    }
                }
            });

        });
    }
    else {
        console.log("in blank data")
        var str = functions.loadErrorTemplate(elem);
        async.forEachOf(str.split("\n ")[1].replace(" should not be blank",'').split(","),(value,key,callback)=>{
            errors.invalidValue[value]?delete errors.invalidValue[value]:null
            value!=""?errors.blankValue[value]="Please Enter your "+value:null
        })
        console.log(errors)
        response = general.response_format(false, errors, {});
        res.send(response);
    }
});

module.exports = router