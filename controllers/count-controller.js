dagstaatjeApp.controller('countController', ['$scope', 'dagstaatjeService', function countController($scope, dagstaatjeService) {

    $scope.money = [{
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
    }, {
        multiplier: 0.05,
        amount: 0,
        prettyMultiplier: "pretM",
        result: 0,
        prettyResult: "pretR"
    }, ];

    $scope.prettyTotal = "pretT";

    $scope.$watch('money', function() {
        prettifyResult();
    }, true);

    function prettifyResult() {
        var money = $scope.money; // work with local variable so we dont $watch doesn't trigger until done
        var ugly = [];
        var pretty = [];
        var total = 0;
        // get all ugly results and save them in an array
        for (var item in money) {
            // calculate the result
            money[item].result = money[item].amount * money[item].multiplier;
            // push the result to the ugly array
            ugly.push(money[item].result);
            // calculate the total while we're at it
            total += money[item].result;
        }
        // also push the total to the ugly array
        ugly.push(total);
        // create an array with proper whitespaces
        pretty = accounting.formatColumn(ugly, '€ ');
        // set the prettyResult fields to the formatted items
        for (item in money) {
            money[item].prettyResult = pretty[item];
        }
        // set scope values
        $scope.money = money;
        $scope.prettyTotal = pretty[pretty.length - 1];
        // set global total counted for use in other sections
        dagstaatjeService.total = total;
    }

    // put all multipliers in array, pass array to accountingJs
    // for each formatted item put it in the pretty field
    (function prettifyMultiplier() {
        var money = $scope.money;
        var ugly = [];
        var pretty = [];
        for (var item in money) {
            ugly.push(money[item].multiplier);
        }
        pretty = accounting.formatColumn(ugly, '€ ');
        for (item in money) {
            money[item].prettyMultiplier = pretty[item];
        }
        $scope.money = money;
    })();

}]);
