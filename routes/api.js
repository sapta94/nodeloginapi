var express=require('express');
var router=express.Router();

var user = require('../models/user');

user.methods(['get','post']);
user.register(router,'/user');

module.exports = router;