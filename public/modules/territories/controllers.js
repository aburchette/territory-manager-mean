'use strict';

angular.module('territories').
    controller('TerritoriesCtrl', ['$scope', '$http', '$stateParams', 'Territory', function($scope, $http, $stateParams, Territory){
        $scope.params = $stateParams;

        Territory.query(function(data){
            $scope.territories = data;
        });

    }]).
    controller('TerritoryCtrl', ['$scope', '$http', '$stateParams', 'Territory', function($scope, $http, $stateParams, Territory){
        $scope.params = $stateParams;

        Territory.get({ id: $stateParams.territoryId }, function(data){
            $scope.territory = data;
        });

        $scope.updateTerritory = function(){
            Territory.save()

        };
    }]);
