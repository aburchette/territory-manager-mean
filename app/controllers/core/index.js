'use strict';

var _ = require('lodash');

module.exports = _.extend(
    require('./core'),
    require('./errors')
);
