var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var PlayerSchema = new Schema({
	userId: ObjectId,
	gameId: ObjectId,
	leader: {
		type: String,
		trim: true,
		required: true
	},
	country: {
		type: String,
		trim: true,
		required: true
	}
});

mongoose.model('Player', PlayerSchema);
exports.PlayerSchema = PlayerSchema;
