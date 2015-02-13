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
            state('territories.detail', {
                url: '/{territoryId}',
                controller: 'TerritoryCtrl',
                templateUrl: 'modules/territories/views/territory.html'
            }).
            state('territories.detail.map', {
                url: '/map',
                templateUrl: 'modules/territories/views/territory-map.html'
            }).
            state('territories.detail.list', {
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
