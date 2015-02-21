'use strict';

// Routing for all territory-related urls
// all are GET requests and can only be read
angular.module('territories').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('territories', {
                url: '/' + user.group + '/territories',
                controller: 'TerritoriesCtrl',
                templateUrl: 'modules/territories/views/territories.html'
            }).
            state('territories.filter', {
                url: '/filter/{filterId}',
                templateUrl: 'modules/territories/views/territories.html'
            }).

            state('territory', {
                url: '/' + user.group + '/territories/{territoryId}',
                controller: 'TerritoryCtrl',
                templateUrl: 'modules/territories/views/territory.html'
            }).
            state('territory.edit', {
                url: '/edit',
                controller: 'TerritoryCtrl',
                templateUrl: 'modules/territories/views/territory-edit.html'
            }).
            state('territory.map', {
                url: '/map',
                templateUrl: 'modules/territories/views/territory-map.html'
            }).
            state('territory.list', {
                url: '/list',
                templateUrl: 'modules/territories/views/territory-list.html'
            });
    }
]);

/*
 territories
 territories/filter/1
 territories/100
 territories/100/map
 territories/100/list
 */
