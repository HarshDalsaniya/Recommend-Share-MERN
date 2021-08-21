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
            var post = req.body.searchFilter
            var searchFields=[]
            var sql= `SELECT 
                        image,
                        name,
                        (SELECT name FROM trade WHERE id=trade_id) as trade_name, 
                        slug, 
                        (SELECT recommendation FROM feedback WHERE tradesperson_id=id) as recomendation 
                        FROM 
                        tradesperson`;

            req.query.name || req.query.email || req.query.telephone || req.query.trade || req.query.postcode ? sql=sql+" where ":null

            req.query.name ? req.query.email || req.query.telephone || req.query.trade || req.query.postcode ? sql = sql + " (name LIKE '%" + req.query.name + "%')" : sql = sql + "(name LIKE '%" + req.query.name + "%')" : null

            req.query.email ? req.query.name || req.query.telephone || req.query.trade || req.query.postcode ? sql = sql + " AND (email LIKE '%" + req.query.email + "%')" : sql = sql + "(email LIKE '%" + req.query.email +"%')" : null

            req.query.telephone ? req.query.name || req.query.trade || req.query.postcode || req.query.email ? sql = sql + " AND (telephone LIKE '%" + req.query.telephone +"%')" : sql = sql + "(telephone LIKE '%" + req.query.telephone +"%')": null

            req.query.trade ? req.query.name || req.query.email || req.query.telephone || req.query.postcode ? sql = sql + " AND (trade_id LIKE '%" + req.query.trade +"%')" : sql = sql + "(trade_id LIKE '%" + req.query.trade +"%')": null

            req.query.postcode ? req.query.name || req.query.email || req.query.telephone || req.query.trade ? sql = sql + " AND (address_postcode LIKE '%" + req.query.postcode +"%')" : sql = sql + "(address_postcode LIKE '%'" + req.query.postcode + "'" +"%')": null

            req.query.orderby ? sql = sql + " ORDER BY "+req.query.orderby+" "+OrderType : sql = sql + ` ORDER BY name ASC`
                
            req.query.start ? sql = sql+ ` LIMIT ${req.query.start},20`:null

            // sql +=keyword+" limit "+start+", "+20; 
            console.log(sql)
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