const { response } = require("express");
const express = require("express");
const app = express();
app.listen(3000, ()=>{console.log('Server started on 3000');});
app.get('/', function(request, response){
    response.send('Hello');
});

app.get('/contact', function(request, response){
    response.send('Call - 9108913822');
});

app.get('/about', function(request, response){
    response.send('Launda Lapati Hai Hum');
})

app.get('/hobbies', (request, response)=>{
response.send('I love swimming');
});