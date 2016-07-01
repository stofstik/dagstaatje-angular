dagstaatjeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/count', {
            templateUrl: 'templates/count.html',
            controller: 'countController'
        })
        .when('/input', {
            templateUrl: 'templates/input.html',
            controller: 'inputController'
        })
        .when('/settings', {
            templateUrl: 'templates/settings.html',
            controller: 'settingsController'
        })
        .otherwise('/count');
}]);


