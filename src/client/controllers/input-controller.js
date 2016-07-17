dagstaatjeApp.controller('inputController', ['$scope', '$localStorage', 'fieldsService', function inputController($scope, $localStorage, fieldsService) {

    // Name for navbar
    $scope.currentNavItem = 'input';

    // Set the default fields if none are found
    $scope.$storage = $localStorage.$default({
        input: {
            fields: fieldsService.GetNewInputFields()
        }
    });

    // Sync $storage to local $scope fields for easy templating
    // This way we can have one template for 'count' and 'input'
    // both iterating over the 'fields' property instead of having two
    // templates, one pointing to count.fields and one to input.fields
    $scope.fields = $scope.$storage.input.fields;

    $scope.$watch('$storage.input.fields', function(newValue, oldValue) {
        console.log("$storage.input.fields changed...");
        recalc();
        prettifyResult();
    }, true);

    function prettifyResult() {
        var fields = $scope.$storage.input.fields;
        var ugly   = [];
        var pretty = [];
        for (var item in fields) {
            ugly.push(fields[item].amount);
        }
        pretty = accounting.formatColumn(ugly, '€');
        for (item in fields) {
            fields[item].prettyResult = pretty[item];
        }
        $scope.$storage.input.fields = fields;
    }

    // Accounting js needs an array of numbers to calculate white space
    function recalc() {
        var fields    = $scope.$storage.input.fields;

        var start     = fieldsService.GetById(fields, 'start').amount;
        var extra     = fieldsService.GetById(fields, 'extra').amount;
        var turnover  = fieldsService.GetById(fields, 'turnover').amount;
        var tab       = fieldsService.GetById(fields, 'tab').amount;
        var tabPaid   = fieldsService.GetById(fields, 'tabPaid').amount;
        var out       = fieldsService.GetById(fields, 'out').amount;
        var pin       = fieldsService.GetById(fields, 'pin').amount;
        var counted   = fieldsService.GetById(fields, 'counted').amount;
        var envelope  = fieldsService.GetById(fields, 'envelope').amount;

        var registerReceipt  = turnover + tabPaid - tab;
        var totalInRegister  = start + extra + registerReceipt;
        var totalOut         = out + pin;
        var registerShouldBe = totalInRegister - totalOut;
        var difference       = counted - registerShouldBe;
        var newRegister      = counted - envelope;

        fieldsService.GetById(fields, 'report').amount    = registerReceipt;
        fieldsService.GetById(fields, 'totalIn').amount  = totalInRegister;
        fieldsService.GetById(fields, 'totalOut').amount = totalOut;
        fieldsService.GetById(fields, 'result').amount  = registerShouldBe;
        fieldsService.GetById(fields, 'difference').amount       = difference;
        fieldsService.GetById(fields, 'new').amount     = newRegister;

        // Set the $storage fields
        $scope.$storage.input.fields = fields;
        $scope.fields = fields;
    }

}]);
