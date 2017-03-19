var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://hackathon:hello123@ds135690.mlab.com:35690/hackathon');

var api= require('./routes/api');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.listen(process.env.PORT || 5000);
console.log("Server running on port 5000");