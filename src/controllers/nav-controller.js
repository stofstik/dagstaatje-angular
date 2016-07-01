dagstaatjeApp.controller('navController', ['$scope', '$location', 'fieldsService', function navController($scope, $location, fieldsService) {
    $scope.title = "Dagstaatje";

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.pageColor = function() {
        if($location.path() === '/count') {
            return 'my-navbar-color-count';
        } else if($location.path() === '/input') {
            return 'my-navbar-color-input';
        } else if($location.path() === '/settings') {
            return 'my-navbar-color-settings';
        }
    };

    $scope.clear = function() {
        if($location.path() === '/count') {
            fieldsService.ResetCountFields();
        } else if($location.path() === '/input') {
            fieldsService.ResetInputFields();
        }
    };
}]);
