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

router.post('/tradespeople',cors(), function (req,res, callback){
    var post = req.body;
    resoponse ={};
    var required_params=['name' , 'email']
    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0;   
    if (valid) {
        console.log('valid')
        req.getConnection(function(err , connection){
            var sql = `select * from tradesperson where email ="${post.email}" or mobile="${post.mobile}"`;           
            connection.query(sql,function (err,result){
                console.log(result);
                if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
                }
               
                else if (result.length == 0 ) { 
                    var sql = `select * from user where email="${post.email}"`
                    connection.query(sql,function (err , userData){
                        if (err) {
                            console.log(err);
                            response = general.response_format(false, messages.ERROR_PROCESSING, {});
                            res.send(response);
                        }else{
                            var data ={
                                trade_id : 5 ,
                                created : null,
                                updated : null,
                                name : post.name,
                                email : post.email,
                                telephone : post.phone,
                                mobile : post.mobile,
                                address_line_1 : post.address_line_1,
                                address_line_2 : post.address_line_2,
                                address_town : post.address_town,
                                address_county : post.address_county,
                                address_postcode : post.address_postcode,                             
                                established : post.established,                                
                                company_number : post.company_number,
                                website : "droptechnolab.com",
                                vat_registered : null,
                                insured : null,
                                verify_date : null,
                                verify_code : null,
                                verified : 1,
                                image : null,
                                latitude : null,
                                longitude : null,                             
                                slug : post.name.toLowerCase().replace(' ', '-'),
                                notification_received_sms:1,
                                notification_received_email:1,
                                confirm_date : null,
                                confirm_code : null,
                                owner_name : post.owner_name,
                                notification_marketing_email:1,    
                                                                         
                            };
                            var insertsql = `insert into tradesperson set user_Id="${userData[0].id}", ?`
                            connection.query(insertsql ,data, function(err,insert){
                                if (err) {
                                    console.log(err);
                                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                    res.send(response);
                                }
                                // console.log(insert.insertId)
                                if(insert.length != 0 ){                                                         
                                    var insertfedration=``;
                                    post.federation_id.forEach(element => {
                                        insertfedration += `insert into tradespeople_federations set tradesperson_id = "${insert.insertId}" , federation_id = "${element}";`
                                    });
                                    console.log(insertfedration)
                                    connection.query(insertfedration, function(err,finalresult){
                                        console.log(insertfedration)
                                        if (err) {
                                            console.log(err);
                                            response = general.response_format(false, messages.ERROR_PROCESSING, {});
                                            res.send(response);
                                        }
                                        else{
                                            response = general.response_format(true, "tradesperson register Successfully" , finalresult);
                                            res.send(response);
                                        }
                                    });
                                }
                            });

                        }
                    });                 
                                 
                }else{
                    response = general.response_format(false, "email is already registered", {});
                    res.send(response);

                }
            })

        });
    }
    else {
        console.log("in blank data")     
        response = general.response_format(false, "blank value", {});
        res.send(response);
    }

});

module.exports = router