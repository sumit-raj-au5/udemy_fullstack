const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}));
app.listen(3000, ()=>{
    console.log('server started on 3000');
});

app.get('/', (resq, resp)=>{
    resp.sendFile(__dirname+'/index.html');
});

app.post('/', (req, resp)=>{
    let num1 = +req.body.firstNum;
    let num2 = +req.body.secondNum;
    let result = num1+num2;
    resp.send(`Result is ${result}.`);
    console.log(req.body);
})

app.get('/bmiCalculator.html', (req, resp)=>{
    resp.sendFile(__dirname+ '/bmiCalculator.html');
});

app.post('/bmiCalculator.html', (req, resp) =>
{
    let height = +req.body.height;
    let weight = +req.body.weight;
    let bmi = weight/(height*height);
    resp.send(`Your BMI is ${bmi}`);
})