var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
	},
	password: {
		type: String,
		required: true
	}
});

mongoose.model('User', UserSchema);
exports.UserSchema = UserSchema;
