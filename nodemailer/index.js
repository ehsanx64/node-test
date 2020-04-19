'use strict';

require('dotenv').config();
console.log(process.env.SMTP_IP);
const nodemailer = require('nodemailer');

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

    var message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Test',
        // text: 'The email text sent at: ' + new Date(),
        html: `
            <div class="email-template-wrapper" style="direction: rtl; text-align: right; font-family: Tahoma, Homa;">
                <h1>قالب ایمیل</h1>
            </div>
        `
    };

    var info = transporter.sendMail(message);
}

main().catch(err => {
    console.error(err.message);
    process.exit(1);
});