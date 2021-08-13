var moment = require('moment');
var msg = require('../config/messages');
var messages = msg.messages;
var nodemailer = require('nodemailer');
var constants = require('../config/constants');
var {emailhtml} = require('./emailDesign/forgotEmail')
var {contacthtml} = require('./emailDesign/contactUsEmail')


function funcEmail(to, subject, html, from , path) { 

    var htmlblock =""
        path == 'contactUs' ? htmlblock += contacthtml(html[0].name,html[1].telephone,html[2].comapany_bussiness,html[3].message):null
        path == "forgotPassword" ? htmlblock += emailhtml(html[0].name,html[1].url,"http://localhost:4000/images/logo-on-light.jpg"):null
        
    let mailOptions = {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: htmlblock                  

    };


    var transporter = nodemailer.createTransport({
      
        service: 'gmail',
        auth: {
            user: constants.SMTP.SMTP_EMAIL,
            pass: constants.SMTP.SMTP_PASSWORD,
        }
    });

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return (error);
        }
        else {
            console.log('Message sent:', info);
            console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
            // cb();
        }
    });

}

module.exports = {
    funcEmail

};