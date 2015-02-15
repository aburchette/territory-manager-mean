'use strict';

var passport = require('passport');

module.exports = function(app) {
	var core = require('../controllers'),
        records = require('../controllers/records');

    app.route('/api/signup').
        post(core.signup);
    app.route('/api/signin').
        post(core.signin);

    app.route('/api/records').
        get(records.list);
    app.route('/api/records/:recordId').
        get(records.findOne);
    app.route('/api/sort/:sortId').
        get(records.sort);
    app.route('/api/filter/:filterId').
        get(records.sort);
    app.route('/api/sort/:sortId/filter/:filterId').
        get(records.sortFilter);
    app.route('/api/filter/:filterId/sort/:sortId').
        get(records.sortFilter);

    // catch-all
    app.all('/*', core.index);
    //app.all('/', core.index);
};
