var restful=require('node-restful');
var mongoose=restful.mongoose;

var userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone: Number,
    password: String

})

module.exports=restful.model('tablestatus',userSchema);