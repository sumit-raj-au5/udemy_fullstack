const express= require('express');
const bodyParser= require('body-parser');
const request = require('request');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true})); //for post

app.listen(3000, ()=>{
    console.log('Server listening on 3000');
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/signup.html');
})

app.post('/', (req,res)=>{
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    console.log(firstName, lastName, email);
})



mailchimp.setConfig({
  apiKey: "fb94b33f5f31eeed33bc670d6721533d-us5",
  server: "us5",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();