dagstaatjeApp.controller('navController', ['$scope', '$location', 'fieldsService', 'commService', function navController($scope, $location, fieldsService, commService) {

    $scope.clear = function() {
        if($location.path() === '/count') {
            fieldsService.ResetCountFields();
        } else if($location.path() === '/input') {
            fieldsService.ResetInputFields();
        }
    };

    $scope.send = function() {
        commService.sendData();
    };
}]);
