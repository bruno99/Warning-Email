const https = require('https');
const mailer = require('../services/mailer.js');
const WEB = process.env.WEB

//comprobar si la web está dispnible 
module.exports = {
    
    monitor : () => {
    
        https.get(WEB, (res) => {
        }).on('error', (e) => {
            //console.log(e);
            mailer.notify();
        })
    
    }

}
