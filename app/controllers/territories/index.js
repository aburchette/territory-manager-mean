'use strict';

var mongoose = require('mongoose'),
    passport = require('passport'),
    Territory = mongoose.model('Territory');

exports.list = function(req, res) {
    var obj = {};

    Territory.find().exec(function(err, territories){
        if(err) { console.log(err); }
        if(!territories) { console.log('No territory'); }

        res.json(territories);
    });
};

exports.findOne = function(req, res) {
    var id = req.params.id;

    Territory.findOne({ '_id': id}, 'name locale created', function(err, territory){
        if(err) { console.log(err); }
        if(!territory) { console.log('No territory'); }

        res.json(territory);
    });
};

exports.update = function(req, res) {
    var id = req.params.id;

    Territory.findByIdAndUpdate(id, req.body, function(err, territory){
        if(err) { console.log(err); }
        if(!territory) { console.log('No territory'); }

        res.send(territory);
    });
};
