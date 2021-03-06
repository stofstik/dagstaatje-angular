dagstaatjeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/count', {
            templateUrl: 'templates/list-fields.html',
            controller: 'countController'
        })
        .when('/input', {
            templateUrl: 'templates/list-fields.html',
            controller: 'inputController'
        })
        .when('/overview', {
            templateUrl: 'templates/list-fields.html',
            controller: 'overviewController'
        })
        .when('/settings', {
            templateUrl: 'templates/settings.html',
            controller: 'settingsController'
        })
        .otherwise('/count');
}]);


