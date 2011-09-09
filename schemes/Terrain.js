var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var TerrainSchema = new Schema({
	name: String
});

mongoose.model('Terrain', TerrainSchema);
exports.TerrainSchema = TerrainSchema;
