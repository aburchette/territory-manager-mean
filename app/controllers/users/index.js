'use strict';

var _ = require('lodash');

module.exports = _.extend(
    require('./authentication'),
    require('./authorization'),
    require('./password'),
    require('./profile')
);
