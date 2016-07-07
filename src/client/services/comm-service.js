dagstaatjeApp.service('commService', ['$http', '$window', '$localStorage', function($http, $window, $localStorage){


    this.sendData = function(){
        // Get the relevant storage fields
        var fields = $localStorage.input.fields;
        var data = {};
        for(var item in fields) {
            // create key value pair in data object
            data[fields[item].id] = fields[item].amount;
        }
        data = angular.toJson(data);
        console.log(data);
        // Create a post req with a json body
        $http.post('http://' + $localStorage.server.address + '/postDagstaatje', data, $http.defaults.headers.post)
        .then(function success(res){
            // TODO animate send button
            $window.alert(res.data);
        }, function error(res){
            $window.alert("Could not connect to server");
        });
    };

}]);
