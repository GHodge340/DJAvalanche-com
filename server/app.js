const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

const sendEmail = ({message}) => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let day = date.toLocaleDateString();
    const greeting = "Hello Avalanche Team!\n\nYou got a new message from djavalanche.com:\n"
    var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: 'marketwatchers@zohomail.com',//'avalawnch@hotmail.com',
            pass: 'July1979!' // 'unusualtrail816'
        }
    });

    var mailOptions = {
        from: '"Market Watchers 💰" <marketwatchers@zohomail.com>',
        to: 'GHodge.vi@gmail.com',
        bcc: 'thedjavalanche@gmail.com',
        cc: '',
        subject: 'Message From DJAvalanche.com',
        text: greeting + `\n\n${message}\nMessage Sent: ` + time + " " + day
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`\nEmail Report`);
            console.log(`==================================`)
            console.log('Successful Email sent: \n');
            console.log(`==================================`)
        }
    });

}

app.get("/", (req, res) => {
    sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`Nodemailer is listening on at http://localhost:${port}`)
})
