dagstaatjeApp.controller('navController', ['$scope', '$location', function navController($scope, $location) {
    $scope.title = "Dagstaatje";
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);
