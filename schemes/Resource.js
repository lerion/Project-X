var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var ResourceSchema = new Schema({
	name: String
});

mongoose.model('Resource', ResourceSchema);
exports.ResourceSchema = ResourceSchema;
