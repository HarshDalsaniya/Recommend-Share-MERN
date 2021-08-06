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
                                funcEmail(result[0].email, "forget password", emailBody);
                                res.send(response);
                            });
                        } else {
                            var uniqueKey = md5(timestamp);
                            var sql = `update user_forgotpassword set uniqueKey="${uniqueKey}" where email="${result[0].email}"`
                            connection.query(sql, function (err, update) {
                                if (err) throw err;
                                response = general.response_format(true, "User Data", result);


                                emailBody = [{ name: result[0].name }, { url: "http://localhost:3000/reset-password?uniqueKey=" + uniqueKey }]
                                funcEmail(result[0].email, "forget password", emailBody);
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