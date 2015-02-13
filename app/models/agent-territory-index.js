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
    agent_id: {
        type: Schema.ObjectId,
        ref: 'Agent'
    },
    territory_id: {
        type: Schema.ObjectId,
        ref: 'Territory'
    },
    checked_out: {
        type: Date
    },
    checked_in: {
        type: Date
    }
});

mongoose.model('PersonTerritoryIndex', PersonTerritoryIndexSchema);
