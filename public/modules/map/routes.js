'use strict';

// Routing for all territory-related urls
angular.module('map').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('map', {
                url: '/map',
                controller: 'MapCtrl',
                templateUrl: 'modules/map/views/map.html'
            });

    }
]);
