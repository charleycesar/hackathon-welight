var restful = require('node-restful');
var mongoose = restful.mongoose;


var hackathonloginSchema = new mongoose.Schema({
	email: String,
	senha:	String,
	status: String
},{
    timestamps: true
});

// Return model
module.exports = restful.model('HackathonLogin', hackathonloginSchema);