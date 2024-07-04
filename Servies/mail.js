const nodemailer=require("nodemailer")

const {userName,LoginPassword, sender}=require("../config/sendmailinblueLoginDetails")

const transporter=nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
    secure: false,
    auth:{
        user: userName,
        pass: LoginPassword
    },
})

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages",success);
    }
  });
  const htmlBody = `<h1>Lord Krishna</h1><img src="cid:krishna" alt="Lord Krishna" width="250" height="250"></img>`;
  const option={
    from:sender,
    to:"deepanshuguptacode@outlook.com",
    subject:"JAI SHREE KRISHNA",
    htlm:htmlBody,
    attachments:[
      {
        filename:"krishna.jpg",
        path:"./krishna.jpg",
        cid:"krishna",
      }
    ]
  }
  
    module.exports={transporter,option}