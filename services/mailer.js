const MY_EMAIL = process.env.MY_EMAIL 
const MY_PW= process.env.MY_PW 

const nodemailer = require('nodemailer');
module.exports = {

    notify : () => {

        let transporter = nodemailer.createTransport({
            service: 'lge',
            auth: {
                user: MY_EMAIL,
                pass: MY_PW 
            }
        });
        
        var mailOptions = {
            from: 'Warning bot',
            to: MY_EMAIL,
            subject: 'Warning!',
            html: "<h2><b>WARNING</b></h2> <br> <h3><b>Tienda de accesorios LG caida</b></h3>"
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}
