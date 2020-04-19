'use strict';

require('dotenv').config();
const nodemailer = require('nodemailer');
const fs = require('fs');

async function main() {
    var transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.SMTP_IP,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var htmlTemplate = fs.readFileSync(__dirname + '/EmailTemplate.html', 'utf-8');

    var message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Test',
        // text: 'The email text sent at: ' + new Date(),
        html: htmlTemplate
    };

    var info = transporter.sendMail(message);
}

main().catch(err => {
    console.error(err.message);
    process.exit(1);
});