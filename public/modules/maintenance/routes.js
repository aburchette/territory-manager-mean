'use strict';

// Routing for all territory-related urls
angular.module('maintenance').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('maintenance', {
                url: '/' + group + '/maintenance',
                controller: 'MaintenanceCtrl',
                templateUrl: 'modules/maintenance/views/maintenance.html'
            }).

            state('maintenance.geocode', {
                url: '/geocode',
                controller: 'GeocodeCtrl',
                templateUrl: 'modules/maintenance/views/geocode.html'
            });
    }
]);
