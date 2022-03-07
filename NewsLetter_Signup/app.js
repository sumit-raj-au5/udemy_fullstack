const express = require("express") //for creating server
const bodyParser = require("body-parser");
const request = require('request');
const https = require('https') //for making api request
const app = express()

app.use(express.static("Public")); //for serving all static files
app.use(bodyParser.urlencoded({extended:true})) //using body parser

app.get("/", (req, res)=>{
    // const url = "https://jsonplaceholder.typicode.com/todos"
    // //making get request
    // https.get(url, (response)=>{
    //     console.log(response.statusCode);
    //     //on getting response parsing it into JSON data
    //     response.on("data", async (data)=>{
    //         const todoData = data.toString()
    //         // console.log(todoData);
    //         //  res.write(todoData);
    
             res.sendFile(__dirname+'/signup.html')
           
        // })
    // })
})

app.post("/", (req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    console.log(fname);
    console.log(lname);
    console.log(email);
    const data = {
        members:[
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    
    const url = "https://us14.api.mailchimp.com/3.0/lists/7661a559ca";

    const options = {
        method:"POST",
        auth:"sumit2048:4413f57b91837084e8fa96d96f239355-us14"
    }

    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>console.log(JSON.parse(data)));
        if(response.statusCode===200){
            res.sendFile(__dirname+'/success.html')
        }
        else{
            res.sendFile(__dirname+'/failure.html')
        }
    })

    request.write(jsonData);
    request.end();

})

app.post("/failure",(req, res)=>res.redirect('/')) //upon failure this will take user to home page upon clicking 'Try again' button

//process.env.PORT will dynamically give a port on Hiroku
app.listen(process.env.PORT || 3000, ()=>console.log("Server is running on port 3000"));

//api key
// 4413f57b91837084e8fa96d96f239355-us14

// audience ID 7661a559ca