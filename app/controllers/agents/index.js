'use strict';

var mongoose = require('mongoose'),
    passport = require('passport'),
    Agent = mongoose.model('Agent');

exports.list = function(req, res) {
    var obj = {};

    // set up
    //Agent.find()

    res.json(obj);
};

exports.findOne = function(req, res) {
    var agentId = req.params.agentId;

    Agent.find(agentId, function(err, agent){
        if(err) { console.log(err); }
        if(!agent) { console.log('No record'); }

        res.json(agent);
    });
};
