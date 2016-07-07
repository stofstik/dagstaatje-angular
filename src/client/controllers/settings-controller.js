dagstaatjeApp.controller('settingsController', ['$scope', '$localStorage' ,function($scope, $localStorage){

    $scope.mainViewColor = 'settings-view-color';

    $scope.$storage = $localStorage.$default({
        settings: {
        }
    });

}]);
