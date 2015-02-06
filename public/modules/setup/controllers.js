'use strict';

angular.module('setup').
    controller('SetupCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

    }]);
