'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * The group name from the user is matched to the number of the group
 * which will be used to search the database to prevent having to use ObjectId
 */
var GroupSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    number: {
        type: Number
    },
    name: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
});

mongoose.model('Group', GroupSchema);
