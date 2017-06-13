var restful = require('node-restful');
var mongoose = restful.mongoose;
var uniqueValidator = require('mongoose-unique-validator');

// User = role pode ser 

var userSchema = new mongoose.Schema({
    name: String,
    username:{type: String, unique: true},
    password:String
},{
    timestamps: true
});

userSchema.plugin(uniqueValidator);

// Return model
module.exports = restful.model('User', userSchema);