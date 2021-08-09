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

router.get("/trade_options",cors(),(req,res)=>{
    req.getConnection((err,connection)=>{
        if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
        }
        sql="select * from trade"
        connection.query(sql,(err,result)=>{
            if (err) {
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }
            response = general.response_format(true, "Trade Options", result);
            res.send(response);
        })
    })
})

router.get('/federation',cors(),(req,res) => {
    req.getConnection((err,connection)=>{
        if(err){
            console.log(err);
            response = general.response_format(false, messages.ERROR_PROCESSING, {});
            res.send(response);
        }
        var sql = `select * from federation`
        connection.query(sql,(err,result)=>{
            if(err){
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }
            response = general.response_format(true, "Federation Options", result);
            res.send(response);
        })
    })
})

module.exports = router