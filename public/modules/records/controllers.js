'use strict';

angular.module('records').
    controller('RecordsCtrl', ['$scope', '$http', '$stateParams', 'Record', function($scope, $http, $stateParams, Record){
        $scope.params = $stateParams;

        Record.query(function(data){
            $scope.records = data;
        });

    }]).
    controller('RecordCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.params = $stateParams;

        Record.get({ id: $scope.params.recordId }, function(data){
            $scope.record = data;
        });

        Record.save($scope.record, function(){
            console.log('Saved');
        });


    }]);
