var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var usreencodedParser = bodyParser.urlencoded({extended : false}); //to read form data
app.use(usreencodedParser);

app.listen(8081);

app.get('/',(req,res)=>{
    res.send('Hello gauri!!');
})


app.get('/index',(req,res)=>{
    res.sendFile(__dirname + "/" + "index.html"); // read this file
})

app.get('/getUser',(req,res)=>{
    let data ={
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }
    res.send(JSON.stringify(data));
});

app.post('/postUser',(req,res)=>{
    res.send(JSON.stringify(req.body));
})
    


//console.log('server is listining in 5000');