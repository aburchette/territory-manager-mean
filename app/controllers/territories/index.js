'use strict';

var mongoose = require('mongoose'),
    passport = require('passport'),
    Territory = mongoose.model('Territory');

exports.list = function(req, res) {
    var obj = {};

    // set up
    //Record.find()

    res.json(obj);
};

exports.findOne = function(req, res) {
    var territoryId = req.params.territoryId;

    Territory.find(territoryId, function(err, territory){
        if(err) { console.log(err); }
        if(!territory) { console.log('No territory'); }

        res.json(territory);
    });
};
