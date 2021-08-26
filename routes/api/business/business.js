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
var address = require('address');
var { machineId, machineIdSync } = require('node-machine-id');
const { json } = require('body-parser');

var general = gnl.func();

router.get("/trade_options",(req,res)=>{
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
        });
    });
});

router.get('/faq_question', (req,res)=> {
    req.getConnection((err,connection)=>{
        if (err) {
                    console.log(err);
                    response = general.response_format(false, messages.ERROR_PROCESSING, {});
                    res.send(response);
        }
        sql="select id, question , answer from faq_question"
        connection.query(sql,(err,result)=>{
            if (err) {
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }
            response = general.response_format(true, "faq questions", result);
            res.send(response);
        });
    });    
})

router.get('/federation', (req,res) => {
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
        });
    });
});

router.post('/getuserbussiness', (req,res)=>{
    req.getConnection((err,connection)=>{
        if(err){
            console.log(err);
            response = general.response_format(false, message.ERROR_PROCESSING, {});
            res.send(response);
        }
        console.log(req.body)
        var sql = `select id , name from tradesperson where user_id="${req.body.id}"`
        console.log(sql)
        connection.query(sql,(err,result)=>{
            console.log(sql)
            if(err){
                console.log(err);
                response = general.response_format(false, messages.ERROR_PROCESSING, {});
                res.send(response);
            }
            response = general.response_format(true, "user's registered bussinesses", result);
            res.send(response);        
        });
    });
});

router.post('/tradespeople', function (req,res, callback){
    var post = req.body;
    resoponse ={};
    // console.log(req.body)
    var errors = new Array();
    errors = {blankValue:{},invalidValue:{},verifyError:{}};
    var required_params=['name', 'email', 'trade_id', 'federation_id', 'mobile', 'address_line_1', 'address_town', 'address_county', 'address_postcode', 'owner_name']
    var elem = functions.validateReqParam(post, required_params);
    var valid = elem.missing.length == 0 && elem.blank.length == 0; 
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(post.email)){
        valid=false
        errors.invalidValue.email="This value is not a valid email address."
    }
    // if(post.vat_registered!=true){
    //     valid=false
    //     errors.invalidValue.vat_registered=""
    // }
    console.log(post.mobile.length)
    if(post.mobile.length>10 || post.mobile.length<10){
        valid=false
        errors.invalidValue.mobile="Mobile No. should be 10 digit"
    }
    if(post.established!=null && post.established!="" && !post.established.match(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/)){
        valid=false
        errors.invalidValue.established="Established Date is not Valid"
    }
    if(!/^[a-zA-Z\s]*$/.test(post.name)){
        valid=false
        errors.invalidValue.name="Full Name is not Valid"
    }  
    if (valid) {
        console.log('valid')
        req.getConnection(function(err , connection){
            var sql = `select * from tradesperson where email ="${post.email}" or mobile="${post.mobile}"`;           
            connection.query(sql,function (err,result){
                // console.log(result);
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
                                console.log(insert)
                                if(insert.length != 0 ){                                                         
                                    var insertfedration=``;
                                    post.federation_id.forEach(element => {
                                        insertfedration += `insert into tradespeople_federations set tradesperson_id = "${insert.insertId}" , federation_id = "${element}";`
                                    });
                                    // console.log(insertfedration)
                                    connection.query(insertfedration, function(err,finalresult){
                                        // console.log(insertfedration)
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
                    errors.invalidValue.email="Email is already registered"
                        response = general.response_format(false, errors, {});
                        res.send(response);

                }
            })

        });
    }
    else {
        console.log("in blank data")
        
        var str = functions.loadErrorTemplate(elem);
        console.log(elem)
        async.forEachOf(str.split("\n ")[1].replace(" should not be blank",'').split(","),(value,key,callback)=>{
            errors.invalidValue[value]?delete errors.invalidValue[value]:null
            value!=""?errors.blankValue[value]="Please Enter your "+value:null
        })
        response = general.response_format(false, errors, {});
        res.send(response);
    }

});


module.exports = router