'use strict';

angular.module('admin').
    controller('AdminCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]);
