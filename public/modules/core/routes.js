'use strict';

// Routing for all territory-related urls
angular.module('main').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/' + user.group);

        $stateProvider.
            state('main', {
                url: '/' + user.group,
                controller: 'MainCtrl',
                templateUrl: 'modules/core/views/main.html'
            });
    }
]);
