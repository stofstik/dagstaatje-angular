dagstaatjeApp.controller('settingsController', ['$scope', '$localStorage' ,function($scope, $localStorage){

    $scope.$storage = $localStorage.$default({
        settings: {
        }
    });

}]);
