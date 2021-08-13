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

router.get('/list', (req, res) => {
    response = {};
    req.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            response = general.response_format(false, messages.DATABASE_CONNECTION_ERROR, {});
            res.send(response);
        } else {
            var sql= `SELECT (select name,image,(select name from trade where id=trade_id) as trade_name, slug) from tradesperson), tradesperson_id FROM feedback`;
            var start = 0;
            var defaultOrderType = "asc";
            var keyword="";

            if(req.query.id){
                sql ="SELECT image, name,(select name from trade WHERE id=trade_id),slug FROM `tradesperson`"; 
            }
            if(req.query.start){
                start = req.query.start;
            }
            if(req.query.ordertype){
                defaultOrderType=req.query.ordertype;
            }
            if(req.query.orderby){
                sql= sql + " ORDER BY "+req.query.orderby+" "+defaultOrderType;
            }
            if(req.query.limit){
                limit=req.query.limit;
            }

            if(req.query.keyword){
                keyword = ' where CONCAT(firstName,lastName,email) LIKE "%'+req.query.keyword+'%"'
            }

            sql +=keyword+" limit "+start+", "+20; 
            connection.query(sql, function (err, data) {
                console.log("this.sql======================>",this.sql);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
                else {
                    response = general.response_format(true, "User List", data);
                    res.send(response);
                }
            });
        }
    })
});

module.exports = router