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
        sql=`select name, email, telephone, mobile, address_postcode, address_line_1, address_line_2, address_town, address_country, notification_received_email, notification_received_sms, notification_marketing_email from user where email='${req.body.email}'`
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

module.exports = router