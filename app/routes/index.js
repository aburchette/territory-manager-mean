'use strict';

var passport = require('passport');


module.exports = function(app) {
	var core = require('../controllers/core'),
        users = require('../controllers/users'),
        agents = require('../controllers/agents'),
        records = require('../controllers/records'),
        territories = require('../controllers/territories'),
        setup = require('../controllers/setup');

    //var router = require('../controllers/routers');

    app.route('/api/signup').
        post(users.signup);
    app.route('/api/signin').
        post(users.signin);
    app.route('/api/signout').
        get(users.signout);


    //app.route('/api/records').
    //    get(records.list);
    //app.route('/api/records/:recordId').
    //    get(records.findOne);
    //app.route('/api/records/:record                                                                                                                                                                                                                                                                                                 Id/edit').
    //    get(records.edit);
    //app.route('/api/records/sort/:sortId').
    //    get(records.sort);
    //app.route('/api/records/filter/:filterId').
    //    get(records.sort);
    //app.route('/api/records/sort/:sortId/filter/:filterId').
    //    get(records.sortFilter);
    //app.route('/api/records/filter/:filterId/sort/:sortId').
    //    get(records.sortFilter);

    // territories are created on the 'map' page, so there is no post to create them here
    app.route('/api/territories').
        get(territories.list);
    app.route('/api/territories/:id').
        get(territories.findOne).
        put(territories.update);

    //app.route('/api/territories/:territoryId/edit').
    //    get(territories.edit);
    //
    //app.route('/api/agents').
    //    get(agents.list);

    // try this instead
    // determine the route by the first
    //app.route('/api/:routeId').
    //    get(router.list).
    //    push(router.add).
    //    put(router.update).
    //    delete(router.delete);


    // catch-all
    app.all('/*', core.index);
    //app.all('/', core.index);
};
