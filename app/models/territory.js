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
        type: String,
        default: '',
        trim: true
    },
    polygon: {
        type: [{
            type: [{
                type: Number
            }]
        }],
        default: [[0, 0]]
    },
    locale: {
        type: String,
        default: '',
        trim: true
    },
    notes: {
        type: String,
        default: '',
        trim: true
    },
    updated: {
        type: Date
    }
});

mongoose.model('Territory', TerritorySchema);
