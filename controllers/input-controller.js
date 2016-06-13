dagstaatjeApp.controller('inputController', [
    '$scope', 'dagstaatjeService',
    function inputController($scope, dagstaatjeService) {

        // Inputs
        $scope.start = 0;
        $scope.extra = 0;
        $scope.turnover = 0;
        $scope.bill = 0;
        $scope.billPayed = 0;
        $scope.out = 0;
        $scope.pin = 0;
        $scope.counted = dagstaatjeService.total;


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

