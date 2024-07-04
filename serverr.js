const express=require("express")
const app=express()
const cron=require("node-cron");
const { transporter, option } = require("./Servies/mail");
const port=40000;

cron.schedule('* * * * *', () => {
    transporter.sendMail(option,(err, info) => {
        if (info) console.log("mail sent: ", info);
        if (err) console.error(err);
})});

app.listen(port,()=>{
    console.log("server is running at : ",port)
})