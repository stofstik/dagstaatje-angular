dagstaatjeApp.service('saveCookieService', ['$cookies', 'dagstaatjeService', function ($cookies, dagstaatjeService) {

    $cookies.put('dagstaatjeService.start', dagstaatjeService.start || 0);
    $cookies.put('dagstaatjeService.extra', dagstaatjeService.extra || 0);
    $cookies.put('dagstaatjeService.turnover', dagstaatjeService.turnover || 0);
    $cookies.put('dagstaatjeService.bill', dagstaatjeService.bill || 0);
    $cookies.put('dagstaatjeService.billPayed', dagstaatjeService.billPayed || 0);
    $cookies.put('dagstaatjeService.out', dagstaatjeService.out || 0);
    $cookies.put('dagstaatjeService.pin', dagstaatjeService.pin || 0);
    $cookies.put('dagstaatjeService.counted', dagstaatjeService.counted || 0);

}]);

