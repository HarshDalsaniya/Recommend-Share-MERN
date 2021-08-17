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

router.post('/login', cors(), function (req, res, callBack) {
    var post = req.body;
    response = {};
    // console.log("testestest", post)
    var errors = new Array();
    errors = {blankValue:{},invalidValue:{},verifyError:{}};
    var required_params = ['email', 'password'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(post.email)){
        valid=false
        errors.invalidValue.email="Email is not Valid"

    }
    // console.log(typeof errors.invalidValue)
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
                            console.log(process.env.JWT_KEY);
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
                    errors.verifyError.userNotFound="Invalid Username and Password"
                    response = general.response_format(false, errors);
                    res.send(response);
                }
            });
        });
    } else {
        var str = functions.loadErrorTemplate(elem);
        async.forEachOf(str.split("\n ")[1].replace(" should not be blank",'').split(","),(value,key,callback)=>{
            errors.invalidValue[value]?delete errors.invalidValue[value]:null
            value!=""?errors.blankValue[value]="Please Enter your "+value:null
        })
        response = general.response_format(false, errors, {});
        res.send(response);
    }
});

router.post('/register', cors(), function (req, res, next) {
    var post = req.body;
    response = {};
    // console.log("testestest", post)
    var errors = new Array();
    errors = {blankValue:{},invalidValue:{},verifyError:{}};
    var required_params = ['password', 'confirm_password', 'email', 'name', 'mobile', 'address_postcode', 'address_line_1', 'address_town', 'address_county', 'terms_agreed_date', 'gdpr_agreed_date'];
    if(req.query.type && req.query.type == "tradesperson"){
        required_params.push("tradespeopleTrade")
    }

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
    if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(post.password)){
        valid=false
        errors.invalidValue.password="Password Must be 6 to 16 letters"
    }
    if(post.password!==post.confirm_password){
        valid=false
        errors.invalidValue.confirm_password="Password not match"
    }
    if(req.query.type && req.query.type == "tradesperson" && typeof post.tradespeopleTrade!="undefined" && !post.tradespeopleTrade && post.tradespeopleTrade==""){
        valid=false
        errors.blankValue.tradespeopleTrade=""
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
                    if (result.length == 0) {
                        var data = {
                            password: md5(post.password),
                            email: post.email,
                            telephone: post.telephone,
                            name: post.name,
                            mobile: post.mobile,
                            address_line_1: post.address_line_1,
                            address_line_2: post.address_line_2,
                            address_town: post.address_town,
                            address_county: post.address_county,
                            address_postcode: post.address_postcode,
                            enabled: 1,
                            system: 1,
                            password_changed: 1,
                            registration_complete: 1,
                            verified: 1,
                            notification_received_sms: 1,
                            notification_received_email: 1,
                            notification_marketing_email: 1
                        }
                        var insertSql = `insert into user set terms_agreed_date=NOW(), gdpr_agreed_date=NOW(), ?`;
                        connection.query(insertSql, data, function (err, insertResult) {
                            // console.log("this.sql======================>",this.sql);
                            if (err) {
                                console.log(err);
                                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                res.send(response);
                            } else {
                                if (typeof insertResult.insertId != 'undefined') {
                                    let ID = machineIdSync()
                                    const Device_Ip_Address = address.ip()
                                    const token = general.generateAccessToken({ id: insertResult.insertId });
                                    var insertToken = `insert into user_token set userId=${insertResult.insertId} , token="${token}" , user_device_Id="${ID}" , user_device_Ip="${Device_Ip_Address}"`
                                    connection.query(insertToken, function (err, tokenResult) {
                                        if (err) {
                                            var deleteSql = `delete from user where id=${result.insertId}`;
                                            connection.query(deleteSql, data, function (err, insertResult) {
                                                if (err) {
                                                    console.log(err);
                                                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                    res.send(response);
                                                } else {
                                                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                    res.send(response);
                                                }
                                            })
                                        } else {
                                            if (typeof tokenResult.insertId != 'undefined' && typeof insertResult.insertId != 'undefined') {
                                                data.user_id = insertResult.insertId;
                                                data.trade_id = post.tradespeopleTrade;
                                                data.slug = post.name.toLowerCase().replace(' ', '-');
                                                delete data["enabled"];
                                                delete data["system"];
                                                delete data["password"];
                                                delete data["password_changed"];
                                                delete data["registration_complete"];
                                                // console.log(data);
                                                var tradePersonInsert = `insert into tradesperson set ?`;
                                                connection.query(tradePersonInsert, data, function (err, tradePersonResult) {
                                                    if (err) {
                                                        console.log(err);
                                                        var deleteUserSql = `delete from user where id=${insertResult.insertId};delete from user_token where token="${token}"`;
                                                        connection.query(deleteUserSql, data, function (err, deleteUserResult) {
                                                            if (err) {
                                                                console.log(err);
                                                                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                                res.send(response);
                                                            } else {
                                                                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                                                res.send(response);
                                                            }
                                                        })
                                                    } else {
                                                        if (typeof tokenResult.insertId != 'undefined' && typeof tradePersonResult != 'undefined') {
                                                            response = general.response_format(true, "Registration Successfully");
                                                            res.send(response);
                                                        } else {
                                                            response = general.response_format(false, tokenResult, {});
                                                            res.send(response);
                                                        }
                                                    }
                                                });
                                            } else {
                                                if (typeof tokenResult.insertId != 'undefined') {
                                                    response = general.response_format(true, "Registration Successfully");
                                                    res.send(response);
                                                } else {
                                                    response = general.response_format(false, tokenResult, {});
                                                    res.send(response);
                                                }
                                            }
                                        }
                                    })
                                } else {
                                    response = general.response_format(false, result, {});
                                    res.send(response);
                                }
                            }
                        })
                    } else {
                        errors.verifyError.registerError="User Allready Exist"
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
        response = general.response_format(false, errors, {});
        res.send(response);
    }
});

router.post('/logout/:token', cors(), function (req, res, next) {
    response = {};
    req.getConnection(function (err, connection) {
        var sql = `delete from user_token where token="${req.params.token}"`
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            } else {
                response = general.response_format(true, "Logout Successfully");
                res.send(response);
            }

        });
    });
});

// Forgotpasword Api
router.post('/forgotpassword', cors(), function (req, res) {
    var post = req.body;
    response = {};
    console.log("testestest", post)

    var required_params = ['email'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if (valid && post.email) {

        req.getConnection(function (err, connection) {
            var data = {
                email: post.email,
            };

            var sql = `select * from user where email='${data.email}'`;
            if (err) throw err;
            let d = new Date();
            let timestamp = d.getTime();

            connection.query(sql, function (err, result) {
                console.log("this.sql======================>", this.sql);
                if (err) {
                    // console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                if (result.length > 0) {

                    var sql = `select * from user_forgotpassword where email="${result[0].email}"`
                    connection.query(sql, function (err, find) {

                        if (err) throw err;
                        if (find.length == 0) {
                            var uniqueKey = md5(timestamp);
                            var sql = `insert into user_forgotpassword set userId="${(result[0].id)}" , email="${(result[0].email)}", uniqueKey="${uniqueKey}"`;
                            connection.query(sql, function (err, data) {
                                response = general.response_format(true, "User Data", result);
                                //  console.log(funcEmail());
                                emailBody = [{ name: result[0].name }, { url: "http://localhost:3000/reset-password?uniqueKey=" + uniqueKey }];
                                funcEmail(result[0].email, "forget password", emailBody , 'harshrdtl@gmail.com', 'forgotPassword');
                                res.send(response);
                            });
                        } else {
                            var uniqueKey = md5(timestamp);
                            var sql = `update user_forgotpassword set uniqueKey="${uniqueKey}" where email="${result[0].email}"`
                            connection.query(sql, function (err, update) {
                                if (err) throw err;
                                response = general.response_format(true, "User Data", result);


                                emailBody = [{ name: result[0].name }, { url: "http://localhost:3000/reset-password?uniqueKey=" + uniqueKey }]
                                funcEmail(result[0].email, "forget password", emailBody , 'harshrdtl@gmail.com' , 'forgotPassword');
                                // console.log(funcEmail());
                                res.send(response);
                            });
                        }
                    });
                }
                else {

                    response = general.response_format(false, "Invalid email", result);
                    res.send(response);
                }
            });
        });
    } else {
        response = general.response_format(false, "Please enter email !");
        res.send(response);

    }
});

// Reset-password API

router.post('/reset-password', cors(), function (req, res) {
    var post = req.body;
    // var id = req.query.id;
    // var uniqueKey = req.query.uniqueKey;
    response = {};
    console.log(req.query.uniqueKey)
    var required_params = ['New_password', 'confirm_New_password'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if (valid && post.New_password && post.confirm_New_password) {
        req.getConnection(function (err, connection) {
            if (err) throw err;
            // console.log(req.params.uniqueKey);

            var sql = `select uniqueKey from user_forgotpassword where uniqueKey="${req.query.uniqueKey}"`;
            connection.query(sql, function (err, uniqueKeyschema) {
                if (err) throw err;
                // console.log(uniqueKeyschema.length);
                if (uniqueKeyschema.length == 0) {
                    response = general.response_format(true, "invalid User", uniqueKeyschema);
                    res.send(response);
                } else {
                    var data = {
                        New_password: post.New_password,
                        confirm_New_password: post.confirm_New_password,
                    };

                    if (data.New_password == data.confirm_New_password) {
                        var sql = `update user,user_forgotpassword set password="${md5(data.New_password)}" where user.email=user_forgotpassword.email and user_forgotpassword.uniqueKey="${uniqueKeyschema[0].uniqueKey}"`;
                        connection.query(sql, function (err, result) {
                            if (err) throw err;
                            var sql = ` delete from user_forgotpassword where uniqueKey="${uniqueKeyschema[0].uniqueKey}"`;
                            connection.query(sql, function (err, finalResult) {
                                if (err) throw err;
                                response = general.response_format(true, "resset-Password successFully", result);
                                res.send(response);
                            });
                        });
                    } else {
                        response = general.response_format(false, "password did not match");
                        res.send(response);
                    }
                }
            });

        });
    } else {
        response = general.response_format(false, "Please enter Password and Confirm Password");
        res.send(response);

    }
});

// check uniqueKey API 
router.get('/uniqueKeyVerify/:uniqueKey', cors(), function (req, res) {
    response = {};
    req.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            response = general.response_format(false, messages.DATABASE_CONNECTION_ERROR, {});
            res.send(response);
        } else {
            var sql = `select * from user_forgotpassword where uniqueKey="${req.params.uniqueKey}"`;
            connection.query(sql, function (err, data) {
                console.log("this.sql======================>", this.sql);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                else if (!data.length > 0) {
                    response = general.response_format(false, "Invalid Link", data);
                    res.send(response);
                }
                else {
                    response = general.response_format(true, "User Data", data);
                    res.send(response);
                }
            });
        }
    })
})

//change password API
router.post('/changepassword', cors(), function (req, res) {
    response = {}
    var post = req.body;
    response = {};
    console.log("test-test", req.body)

    var required_params = ['currentPassword', 'newPassword', 'repeatNewPassword'];

    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;
    if (valid) {
        req.getConnection(function (err, connection) {
            var data = {
                currentPassword: post.currentPassword,
                newPassword: post.newPassword,
                repeatNewPassword: post.repeatNewPassword
            };
            var sql = `select * from user where password="${md5(data.currentPassword)}"`;
            connection.query(sql, function (err, result) {
                if (err) {                    
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                else if (result.length > 0) {
                    if (data.newPassword == data.repeatNewPassword) {
                        var sql = `update user set password="${md5(post.newPassword)}" where password="${md5(post.currentPassword)}"`
                        connection.query(sql, function (err, updatedpassword) {
                            if (err) { 
                                console.log("errror")                               
                                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                res.send(response);
                            } else {
                                console.log("succes")
                                console.log(updatedpassword)
                                response = general.response_format(true, "password changed successFully..!!", {});
                                res.send(response);
                            }
                        });
                    } else { 
                        console.log("not changed")                       
                        response = general.response_format(false, "password did not match", {});
                        res.send(response);
                    }
                } else {   
                    console.log("password not match")                
                    response = general.response_format(false, "current password is not valid", {});
                    res.send(response);
                }
            });
        });
    } else {
        console.log("in blank data")
        var str = functions.loadErrorTemplate(elem);
        response = general.response_format(false, messages.UNIQUE_ERROR + str, {});
        res.send(response);
    }

});

module.exports = router;
