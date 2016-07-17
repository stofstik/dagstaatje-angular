dagstaatjeApp.controller('overviewController', ['$scope', '$localStorage', 'fieldsService', function overviewController($scope, $localStorage, fieldsService) {

    var overviewItems = ['start', 'extra', 'turnover', 'tab', 'tabPaid', 'report', 'totalIn', 'out', 'pin', 'totalOut', 'result', 'counted', 'difference', 'envelope', 'new'];

    $scope.fields = [];

    $scope.$watch('$storage.input.fields', function(newValue, oldValue) {
        var fields = [];
        for (var i in overviewItems) {
            var field = fieldsService.GetById($localStorage.input.fields, overviewItems[i]);
            fields.push({label: field.label, prettyResult: field.prettyResult, isInput: false});

        }
        $scope.fields = fields;
    }, true);

}]);
