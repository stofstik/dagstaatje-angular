var dagstaatjeApp = angular.module('dagstaatjeApp', ['ngRoute']);

dagstaatjeApp.controller('mainController', function testController($scope) {
    $scope.title = "Laurierboom Dagstaatje";
});

dagstaatjeApp.controller('countController', function countController($scope) {
    $scope.money = [
        {
            multiplier: 500,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 200,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 100,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 50,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 20,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 10,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 5,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 2,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 1,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
           multiplier: 0.5,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 0.2,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        }, {
            multiplier: 0.1,
            amount: 0,
            prettyMultiplier: "pretM",
            result: 0,
            prettyResult: "pretR"
        },
    ];

    $scope.prettyTotal = "pretT";

    // put all multipliers in array, pass array to accountingJs
    // for each formatted item put it in the pretty field
    (function prettifyMultiplier(){
        var ugly = [];
        var pretty = [];
        for(var item in $scope.money){
            ugly.push($scope.money[item].multiplier);
        }
        pretty = accounting.formatColumn(ugly, '€ ');
        for(var i = 0; i < $scope.money.length; i++) {
            $scope.money[i].prettyMultiplier = pretty[i];
        }
    })();

    $scope.$watch('money', function(){
        prettifyResult();
    }, true);

    function prettifyResult(){
        var ugly = [];
        var pretty = [];
        var total = 0;
        // get all ugly results and save them in an array
        for(var item in $scope.money){
            // calculate the result
            $scope.money[item].result = $scope.money[item].amount * $scope.money[item].multiplier;
            // push the result to the ugly array
            ugly.push($scope.money[item].result);
            // calculate the total while we're at it
            total += $scope.money[item].result;
        }
        // also push the total to the ugly array
        ugly.push(total);
        // create an array with proper whitespaces
        pretty = accounting.formatColumn(ugly, '€ ');
        // set the prettyResult fields to the formatted items
        for(item in $scope.money) {
            $scope.money[item].prettyResult = pretty[item];
        }
        // set prettyTotal
        $scope.prettyTotal = pretty[pretty.length - 1];
    }

    function calculate() {
        for(var item in $scope.money){
            $scope.money[item].result = $scope.money[item].amount * $scope.money[item].multiplier;
        }

    }


});

dagstaatjeApp.controller('inputController', [
    '$scope',
    function inputController($scope) {

        // Inputs
        $scope.start = 0;
        $scope.extra = 0;
        $scope.turnover = 0;
        $scope.bill = 0;
        $scope.billPayed = 0;
        $scope.out = 0;
        $scope.pin = 0;
        $scope.counted = 0;


        $scope.$watchGroup(
            ['start', 'extra', 'turnover', 'bill', 'billPayed', 'out', 'pin', 'counted'],
            function() {
                recalc();
            });

        // Accounting js needs an array of numbers to calculate white space
        function recalc() {
            // Results
            $scope.inFieldsResult = $scope.start + $scope.extra;
            $scope.registerFieldsResult = $scope.turnover + $scope.billPayed - $scope.bill;
            $scope.inPlusRegisterResult = $scope.inFieldsResult + $scope.registerFieldsResult;
            $scope.outFieldsResult = $scope.out + $scope.pin;
            $scope.inMinusOutResult = $scope.inPlusRegisterResult - $scope.outFieldsResult;
            $scope.difference = $scope.inMinusOutResult - $scope.counted;

            $scope.formattedArray = accounting.formatColumn([
                $scope.start,
                $scope.extra,
                $scope.inFieldsResult,
                $scope.turnover,
                $scope.bill,
                $scope.billPayed,
                $scope.registerFieldsResult,
                $scope.inPlusRegisterResult,
                $scope.out,
                $scope.pin,
                $scope.outFieldsResult,
                $scope.inMinusOutResult,
                $scope.counted,
                $scope.difference
            ], '€ ');
        }

    }
]);
