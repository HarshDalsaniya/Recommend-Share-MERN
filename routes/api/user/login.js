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
                console.log("this.sql======================>", this.sql);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }

                if (result.length > 0) {
                    // console.log(result)
                    var sql2 = `select * from user_token where userId="${result[0].id}"`
                    connection.query(sql2, function (err, result_2) {
                        if (err) {
                            console.log(err);
                            response = general.response_format(false, messages.ERROR_PROCESSING, {});
                            res.send(response);
                        }
                        
                        if (result_2.length == 0) {

                            let ID = machineIdSync()
                            const Device_Ip_Address = address.ip()
                            const token = general.generateAccessToken({ id: result[0].id });
                            var sql3 = `insert into user_token set userId=${result[0].id} , token="${token}" , user_device_Id="${ID}" , user_device_Ip="${Device_Ip_Address}"`

                            connection.query(sql3, function (err, JSON_web_token) {
                                console.log("this.sql======================>", this.sql3);
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
                                response = general.response_format(true, "Login Successfully", result);

                                res.send(response);
                            });

                        } else {

                            let ID = machineIdSync()
                            const Device_Ip_Address = address.ip()

                            const token = general.generateAccessToken({ id: result[0].id });
                            var sql4 = `update user_token set token="${token}" , user_device_Id="${ID}" , user_device_Ip="${Device_Ip_Address}" where userId="${result[0].id}"`

                            connection.query(sql4, function (err, result_3) {
                                console.log("this.sql======================>", this.sql4);
                                if (err) {
                                    console.log(err);
                                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                    res.send(response);
                                }
                                var newData = {
                                    token: token
                                }
                                result.push(newData);
                                response = general.response_format(true, "Login Successfully", result);
                                res.send(response);
                            })
                        }
                    })
                } else {
                    response = general.response_format(false, "Invalid username or password");
                    res.send(response);
                }
            });
        });
    } else {
        var str = functions.loadErrorTemplate(elem);
        response = general.response_format(false, messages.WRONG_MISSING_PARAM + str, {});
        res.send(response);
    }
});

router.post('/register', cors(), function (req, res, next) {
    var post = req.body;
    response = {};
    console.log("testestest", post)

    var required_params = ['password', 'confirm_password', 'email', 'name', 'mobile', 'address_postcode', 'address_line_1', 'address_town', 'address_country', 'terms_agreed_date', 'gdpr_agreed_date'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
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
                    if (result.length == 0) {
                        if (post.password == post.confirm_password) {
                            var data = {
                                password: md5(post.password),
                                email: post.email,
                                telephone: post.telephone,
                                name: post.name,
                                mobile: post.mobile,
                                address_line_1: post.address_line_1,
                                address_line_2: post.address_line_2,
                                address_town: post.address_town,
                                address_country: post.address_country,
                                address_postcode: post.address_postcode,
                                enabled: 1,
                                system: 1,
                                password_changed: 1,
                                registration_complete: 1,
                                verified: 1,
                                notification_received_sms: 1,
                                notification_received_email: 1,
                                notification_marketing_email : 1
                            }
                            var insertSql = `insert into user set terms_agreed_date=NOW(), gdpr_agreed_date=NOW(), ?`;
                            connection.query(insertSql, data, function (err, insertResult) {
                                // console.log("this.sql======================>",this.sql);
                                if (err) {
                                    console.log(err);
                                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                    res.send(response);
                                } else {
                                    if (typeof insertResult.insertId !='undefined') {
                                        let ID = machineIdSync()
                                        const Device_Ip_Address = address.ip()
                                        const token = general.generateAccessToken({ id: insertResult.insertId });
                                        var insertToken = `insert into user_token set userId=${insertResult.insertId} , token="${token}" , user_device_Id="${ID}" , user_device_Ip="${Device_Ip_Address}"`
                                        connection.query(insertToken, function (err, tokenResult) {
                                            if (err) {
                                                var insertSql = `delete from user where id=${result.insertId}`;
                                                connection.query(insertSql, data, function (err, insertResult) {
                                                    if(err){
                                                        console.log(err);
                                                        response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                        res.send(response);
                                                    }else
                                                    {
                                                        response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                        res.send(response);
                                                    }
                                                })
                                            } else {
                                                console.log("adfdasfasfd");
                                                if (typeof tokenResult.insertId != 'undefined') {
                                                    response = general.response_format(true, "Registration Successfully");
                                                    res.send(response);
                                                } else {
                                                    response = general.response_format(false, tokenResult, {});
                                                    res.send(response);
                                                }
                                            }
                                        })
                                    } else {
                                        response = general.response_format(false, result, {});
                                        res.send(response);
                                    }
                                }
                            })
                        }else{
                            response = general.response_format(false, 'password not match', {});
                            res.send(response);
                        }
                    }else{
                        response = general.response_format(false, 'User Allready Exist', {});
                        res.send(response);
                    }
                }
            });
            
        });

}
    else {
        console.log("in blank data")
        var str = functions.loadErrorTemplate(elem);
        response = general.response_format(false, messages.WRONG_MISSING_PARAM + str, {});
        res.send(response);
    }
});


router.post('/logout/:token' , cors() , function (req,res,next){
    response ={};
    req.getConnection(function (err, connection) {
        var sql=`delete from user_token where token="${req.params.token}"`
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }else{
                response = general.response_format(true, "Logout Successfully");
                res.send(response);
            }

        });
    });
});

module.exports = router;
