'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonTerritoryIndexSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: Number,
        required: 'Group ID is required'
    },
    person_id: {
        type: ObjectId
    },
    territory_id: {
        type: ObjectId
    },
    checked_out: {
        type: Date
    },
    checked_in: {
        type: Date
    }
});

mongoose.model('PersonTerritoryIndex', PersonTerritoryIndexSchema);
