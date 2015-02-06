'use strict';

angular.module('main').
    controller('MainCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]);
