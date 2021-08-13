var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var bcrypt = require('bcryptjs');
var msg = require('../../../config/messages');
var func = require('../../../config/functions');
var functions = func.func();
var messages = msg.messages;
var async = require('async');
var thumb = require('node-thumbnail').thumb;
var auth_service = require('../../../services/auth');
var eml = require('../../../services/email');
var emailservice = eml.func();
const constants = require('../../../config/constants');
var locale = require('../../../config/configi18n');
var jwt = require('jsonwebtoken');
const io = require('socket.io')();
const csvtojson = require('csvtojson');
var lodash = require('lodash');
var moment = require('moment');
var gnl = require('../../../services/general');
var md5 = require('md5');
var cors =require("cors");

router.use(cors())


var general = gnl.func();
var response = {};

router.get('/list', (req, res) => {
    response = {};
    req.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            response = general.response_format(false, messages.DATABASE_CONNECTION_ERROR, {});
            res.send(response);
        } else {
            var sql= `select * from users`;
            var start = 0;
            var defaultOrderType = "asc";
            var keyword="";

            if(req.query.id){
                sql ="select firstName , lastName from users where id='"+req.query.id+"' "; 
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