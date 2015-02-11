'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: Number,
        required: 'Group ID is required'
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
});

mongoose.model('Person', PersonSchema);
