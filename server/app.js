const cors = require("cors");
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

//Nodemailer
const sendEmail = ({ message }) => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let day = date.toLocaleDateString();
    const greeting = "Hello Avalanche Team!\n\nYou got a new message from djavalanche.com:\n"
    return new Promise((resolve, reject) => {
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
            from: '"DJ Avalanche Website" <marketwatchers@zohomail.com>',
            to: 'GHodge.vi@gmail.com',
            bcc: 'thedjavalanche@gmail.com',
            cc: '',
            subject: 'Message From DJAvalanche.com',
            text: greeting + `\n\n${message}\nMessage Sent: ` + time + " " + day
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject ({message: `An error occured`})
            } else {
                console.log(`\nEmail Report`);
                console.log(`==================================`)
                console.log('Successful Email sent: \n');
                console.log(`==================================`)
                return resolve({ message: "Email sent successfully" });
            }
        })
    })

}

app.get("/", (req, res) => {
    sendEmail(req.query)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});