var moment = require('moment');
var msg = require('../config/messages');
var messages = msg.messages;
var nodemailer = require('nodemailer');
var constants = require('../config/constants');
var {emailhtml} = require('./email Design/forgotEmail')

function funcEmail(to, subject, html, attachment = [], from = 'harshrdtl@gmail.com') {
    //    console.log({constants.APP_URL}/images/logo-on-dark.svg);      
// console.log(html)
    let mailOptions = {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: `${emailhtml(html[0].name,html[1].url,"https://www.droptechnolab.com/wp-content/themes/dtl/images/logo.png")} `                                     

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