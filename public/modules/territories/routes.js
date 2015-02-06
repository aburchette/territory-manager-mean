'use strict';

// Routing for all territory-related urls
// all are GET requests and can only be read
angular.module('territories').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('territories', {
                url: '/territories',
                controller: 'TerritoriesCtrl',
                templateUrl: 'modules/territories/views/territories.html'
            }).
            state('territoriesFilter', {
                url: '/territories/filter/{filterId}',
                controller: 'TerritoriesCtrl',
                templateUrl: 'modules/territories/views/territories.html'
            }).

            state('territory', {
                url: '/territories/{territoryId}',
                controller: 'TerritoryCtrl',
                templateUrl: 'modules/territories/views/territory.html'
            }).
            state('territoryMap', {
                url: '/territories/{territoryId}/map',
                controller: 'TerritoryCtrl',
                templateUrl: 'modules/territories/views/territory-map.html'
            }).
            state('territoryList', {
                url: '/territories/{territoryId}/list',
                controller: 'TerritoryCtrl',
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
