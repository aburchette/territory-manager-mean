'use strict';

var _ = require('lodash');

module.exports = _.extend(
    require('./core/core'),
    require('./core/errors'),
    require('./users/authentication'),
    require('./users/authorization'),
    require('./users/password'),
    require('./users/profile')
);
