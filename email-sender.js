import nodemailer from "nodemailer"
import "dotenv/config"


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: process.env.USER_NAME,
  to: 'ahmed.wahab.imokha@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
