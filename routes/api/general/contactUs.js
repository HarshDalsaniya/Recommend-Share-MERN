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
// const constants = require('../../../config/constants');
// var locale = require('../../../config/configi18n');
// var jwt = require('jsonwebtoken');
const io = require('socket.io')();
const csvtojson = require('csvtojson');
var lodash = require('lodash');
var moment = require('moment');
var gnl = require('../../../services/general');
var md5 = require('md5');
// const { response } = require('express');
// const { post } = require('./login');
// const console = require('console');
// const upload = require('../../../config/file-upload');
var gnl = require('../../../services/general');
var Promise = require('promise');
// var User = require('../../../models/userDocument');
var fs = require('fs');

var general = gnl.func();


router.post('/contactUs', function (req, res) {
    var post = req.body;
    response = {};
    console.log("testestest", post)
    var errors = new Array();
    errors = {blankValue:{},invalidValue:{},verifyError:{}};

    var required_params = ['name', 'email','telephone', 'message'];
    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(post.email)){
        valid=false
        errors.invalidValue.email="Email is not Valid"
    }
    if(!/^[a-zA-Z\s]*$/.test(post.name)){
        valid=false
        errors.invalidValue.name="Name is not valid"
    }
    if(!/^[0-9]+$/.test(post.telephone)){
        valid=false
        errors.invalidValue.telephone="telephone number is not valid"
    }
    if (valid) {
        var data = {
            name: post.name,
            email:post.email,
            telephone:post.telephone,
            comapany_bussiness:post.comapany_bussiness,
            message:post.message            
      
        }        
        // console.log(data)
        emailBody = [{name:data.name},{telephone:data.telephone}, {comapany_bussiness:data.comapany_bussiness},{message:data.message}]
        funcEmail(data.email , 'conatact Us' , emailBody , 'harshrdtl@gmail.com' ,'contactUs')        
        response = general.response_format(true, "Email sent success Fully..!!");
        res.send(response)
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

})

module.exports = router;