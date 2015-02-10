'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConfigSchema = new Schema({
    group_id: {
        type: Number,
        required: 'Group ID required'
    },
    name: {
        type: String
    },
    value: {
        type: String
    }
});

mongoose.model('Config', ConfigSchema);
