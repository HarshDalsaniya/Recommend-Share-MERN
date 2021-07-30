var moment = require('moment');
var msg = require('../config/messages');
var messages = msg.messages;
var nodemailer = require('nodemailer');
var constants = require('../config/constants');

  function funcEmail ( to, subject, html, attachment=[], from = 'harshrdtl@gmail.com' ) {
          // console.log("helooo");      

        let mailOptions = {
            from: from , // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: `<p><img style="display: block; margin-left: auto; margin-right: auto;" src="${constants.API_URL}/setting_favicon_image/logo-mini.png" alt="My Application" width="112" height="112" /></p>
                <p>&nbsp;</p>
                ${html}
                <p>Thank you,</p>
                <p>My Application</p>`, // html body
            
        };

        var transporter = nodemailer.createTransport({
            service:'gmail',
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
module.exports={
    funcEmail
    
};