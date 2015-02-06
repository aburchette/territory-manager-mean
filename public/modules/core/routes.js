'use strict';

// Routing for all territory-related urls
angular.module('main').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.
            state('main', {
                url: '/',
                controller: 'MainCtrl',
                templateUrl: 'modules/core/views/main.html'
            });
    }
]);
