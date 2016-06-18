dagstaatjeApp.controller('inputController', ['$scope', '$localStorage', 'fieldsService', function inputController($scope, $localStorage, fieldsService) {

    $scope.$storage = $localStorage.$default({
        input: {
            fields: fieldsService.GetInputFields()
        }
    });

    $scope.$watch('$storage.input.fields', function(newValue, oldValue) {
        console.log("$storage.input.fields changed...");
        recalc();
        prettifyAmount();
    }, true);

    function prettifyAmount() {
        var fields = $scope.$storage.input.fields;
        var ugly   = [];
        var pretty = [];
        for (var item in fields) {
            ugly.push(fields[item].amount);
        }
        pretty = accounting.formatColumn(ugly, '€');
        for (item in fields) {
            fields[item].prettyAmount = pretty[item];
        }
        $scope.$storage.input.fields = fields;
    }

    // Accounting js needs an array of numbers to calculate white space
    function recalc() {
        var fields    = $scope.$storage.input.fields;

        var start     = fieldsService.GetByLabel(fields, 'Beginkas:').amount;
        var extra     = fieldsService.GetByLabel(fields, 'Extra in kas:').amount;
        var turnover  = fieldsService.GetByLabel(fields, 'Omzet:').amount;
        var bill      = fieldsService.GetByLabel(fields, 'Pof:').amount;
        var billPayed = fieldsService.GetByLabel(fields, 'Pof betaald:').amount;
        var out       = fieldsService.GetByLabel(fields, 'Uit kas:').amount;
        var pin       = fieldsService.GetByLabel(fields, 'PIN:').amount;
        var counted   = fieldsService.GetByLabel(fields, 'Geteld:').amount;
        var envelope  = fieldsService.GetByLabel(fields, 'Envelop:').amount;

        var registerReceipt  = turnover + billPayed - bill;
        var totalInRegister  = start + extra + registerReceipt;
        var totalOut         = out + pin;
        var registerShouldBe = totalInRegister - totalOut;
        var difference       = registerShouldBe - counted;
        var newRegister      = counted - envelope;

        fieldsService.GetByLabel(fields, 'Kassastrook:').amount    = registerReceipt;
        fieldsService.GetByLabel(fields, 'Totaal in kas:').amount  = totalInRegister;
        fieldsService.GetByLabel(fields, 'Totaal uit kas:').amount = totalOut;
        fieldsService.GetByLabel(fields, 'Kas moet zijn:').amount  = registerShouldBe;
        fieldsService.GetByLabel(fields, 'Verschil:').amount       = difference;
        fieldsService.GetByLabel(fields, 'Nieuwe kas:').amount     = newRegister;

        $scope.$storage.input.fields = fields;
    }

}]);
