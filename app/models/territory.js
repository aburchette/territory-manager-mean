'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TerritorySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: Number,
        required: 'Group ID required'
    },
    name: {
        type: String
    },
    polygon: {
        type: String
    },
    locale: {
        type: String
    },
    notes: {
        type: String
    },
    updated: {
        type: Date
    }
});

mongoose.model('Territory', TerritorySchema);
