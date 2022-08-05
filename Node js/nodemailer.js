var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
service: "gmail",
auth: {
   user: "rithick2812@gmail.com",
   pass: "Rithickg567"
}
});

var mailOptions ={
  from: "rithick2812@gmail.com", 
  to: "rithickg567@gmail.com",
  subject: "I am sending this mail using Nodemailer",
  text: "That was an easy job to send mail using nodemailer"
};

transporter.sendMail(mailOptions, function(error,info){
 if(error){
    console.log(error);
  } else {
    console.log("Email Sent: " +info.response);
}
});