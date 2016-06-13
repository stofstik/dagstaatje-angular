dagstaatjeApp.config(function($routeProvider) {
    $routeProvider
        .when('/count', {
            templateUrl: 'templates/count.html',
            controller: 'countController'
        })
        .when('/input', {
            templateUrl: 'templates/input.html',
            controller: 'inputController'
        });
});


