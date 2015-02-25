angular.module('records').factory('Record', function($resource){
    return $resource('/api/records/:id');
});
