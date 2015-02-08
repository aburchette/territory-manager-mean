'use strict';

angular.module('map').
    controller('MapCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }])
;
