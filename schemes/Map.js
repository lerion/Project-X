var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var MapSchema = new Schema({
	terrainId: ObjectId,
	coords: {
		x: Number,
		y: Number
	}
});

mongoose.model('Map', MapSchema);
exports.MapSchema = MapSchema;
