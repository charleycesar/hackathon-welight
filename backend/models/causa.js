var restful = require('node-restful');
var mongoose = restful.mongoose;


var causaSchema = new mongoose.Schema({
	titulo: String,
	descricao:	String,
	usuario_id: String,
	local: String,
	data: String,
	status: String
},{
    timestamps: true
});

// Return model
module.exports = restful.model('Causa', causaSchema);