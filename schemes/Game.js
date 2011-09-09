var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var GameSchema = new Schema({
	title: String,
	description: String,
	
	// Spielgeschwindigkeit
	speed: {
		type: Number,
		min: 1,
		max: 100,
		required: true
	},
	
	// Karteneinstellungen
	map: {
		width: Number,
		height: Number
	}
});

mongoose.model('Game', GameSchema);
exports.GameSchema = GameSchema;
