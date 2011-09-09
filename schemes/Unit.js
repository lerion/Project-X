var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var ImprovementSchema = require('./Improvement');
var UnitResourcesSchema = new Schema({
	resourceId: ObjectId,
	amount: Number
});

var UnitTypeSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	improvement: [ImprovementSchema],
	resources: [UnitResourcesSchema]
});

var TerrainSchema = require('./Terrain');
var UnitImprovementSchema = new Schema({
	improvementId: ObjectId,
	bonus: {
		attack: Number,
		defense: Number,
		moral: Number,
		move: Number
	}
});

var UnitSchema = new Schema({
	unitTypeId: ObjectId,
	playerId: ObjectId,
	coords: {
		x: Number,
		y: Number
	},
	boni: {
		terrains: [Terrain],
		improvements: [UnitImprovementSchema]
	}
});

var UnitActionsSchema = new Schema({
	name: String,
	coords: {
		x: Number,
		y: Number
	}
});

var UnitWaypointSchema = new Schema({
	unitId: ObjectId,
	startTime: {
		type: Date,
		default: Date.now
	},
	actions: [UnitActionsSchema]
});

mongoose.model('UnitType', UnitTypeSchema);
mongoose.model('Unit', UnitSchema);
mongoose.model('UnitWaypoint', UnitWaypointSchema);

exports.UnitTypeSchema = UnitTypeSchema;
exports.UnitSchema = UnitSchema;
exports.UnitWaypointSchema = UnitWaypointSchema;
