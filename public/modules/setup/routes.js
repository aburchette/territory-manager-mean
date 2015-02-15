'use strict';

// Routing for all territory-related urls
angular.module('setup').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('setup', {
                url: '/' + user.group + '/setup',
                controller: 'SetupCtrl',
                templateUrl: 'modules/setup/views/setup.html'
            }).

            state('setup.agents', {
                url: '/agents',
                controller: 'AgentsCtrl',
                templateUrl: 'modules/setup/views/agents.html'
            }).
            state('setup.agents.detail', {
                url: '/{agentId}',
                templateUrl: 'modules/setup/views/agents.detail.html'
            }).
            state('setup.agents.detail.edit', {
                url: '/edit',
                templateUrl: 'modules/setup/views/agents.detail.edit.html'
            }).

            state('setup.users', {
                url: '/users',
                controller: 'UsersCtrl',
                templateUrl: 'modules/setup/views/users.html'
            }).
            state('setup.users.detail', {
                url: '/{userId}',
                templateUrl: 'modules/setup/views/users.detail.html'
            }).
            state('setup.users.detail.edit', {
                url: '/edit',
                templateUrl: 'modules/setup/views/users.detail.edit.html'
            }).

            state('setup.streets', {
                url: '/streets',
                controller: 'StreetsCtrl',
                templateUrl: 'modules/setup/views/streets.html'
            }).
            state('setup.import', {
                url: '/import',
                controller: 'ImportCtrl',
                templateUrl: 'modules/setup/views/import.html'
            }).
            state('setup.map', {
                url: '/map',
                controller: 'MapCtrl',
                templateUrl: 'modules/setup/views/map.html'
            });
    }
]);
