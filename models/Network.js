const mongoose = require('mongoose');

const networkSchema = new mongoose.Schema({
	_id: {
		type: String,
		trim: true,
	},
	file_name: {
		type: String,
		trim: true,
	},
	type: {
		type: String,
		trim: true,
	},
	owner: {
		type: String,
		trim: true,
	},
	path_file_name: {
		type: String,
		trim: true,
	},
	number_of_nodes: {
		type: Number,
		trim: true,
	},
	number_of_links: {
		type: Number,
		trim: true,
	},
	number_of_services: {
		type: Number,
		trim: true,
	},
	
}, { collection: 'active' });

module.exports = mongoose.model('Network', networkSchema);