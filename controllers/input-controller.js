dagstaatjeApp.controller('inputController', ['$scope', '$localStorage', function inputController($scope, $localStorage) {

    $scope.$storage = $localStorage.$default({
        start: 0,
        extra: 0,
        turnover: 0,
        bill: 0,
        billPayed: 0,
        out: 0,
        pin: 0,
        inputCounted: 0
    });

    $scope.$watchGroup(
        ['$storage.start', '$storage.extra', '$storage.turnover', '$storage.bill', '$storage.billPayed', '$storage.out', '$storage.pin', '$storage.countCounted', '$storage.inputCounted'],
        function() {
            recalc();
        });

    // Accounting js needs an array of numbers to calculate white space
    function recalc() {

        $scope.$storage.inFieldsResult = $scope.$storage.start + $scope.$storage.extra;
        $scope.$storage.registerFieldsResult = $scope.$storage.turnover + $scope.$storage.billPayed - $scope.$storage.bill;
        $scope.$storage.inPlusRegisterResult = $scope.$storage.inFieldsResult + $scope.$storage.registerFieldsResult;
        $scope.$storage.outFieldsResult = $scope.$storage.out + $scope.$storage.pin;
        $scope.$storage.inMinusOutResult = $scope.$storage.inPlusRegisterResult - $scope.$storage.outFieldsResult;
        $scope.$storage.difference = $scope.$storage.inMinusOutResult - $scope.$storage.inputCounted;

        $scope.formattedArray = accounting.formatColumn([
            $scope.$storage.start,
            $scope.$storage.extra,
            $scope.$storage.inFieldsResult,
            $scope.$storage.turnover,
            $scope.$storage.bill,
            $scope.$storage.billPayed,
            $scope.$storage.registerFieldsResult,
            $scope.$storage.inPlusRegisterResult,
            $scope.$storage.out,
            $scope.$storage.pin,
            $scope.$storage.outFieldsResult,
            $scope.$storage.inMinusOutResult,
            $scope.$storage.inputCounted,
            $scope.$storage.difference
        ], '€ ');
    }

}]);
