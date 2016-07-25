dagstaatjeApp.controller('countController', ['$scope', '$localStorage', 'fieldsService', function countController($scope, $localStorage, fieldsService) {

    $scope.$storage = $localStorage;
    $scope.fields = fieldsService.GetCountFields();

    $scope.hasAutoFocus = function(multiplier) {
        if(multiplier === 50) {
            return 'autofocus';
        }
    };

    $scope.$watch('$storage.countedAmounts', function(newValue, oldValue) {
        if (newValue === oldValue) return;
        $scope.fields = fieldsService.GetCountFields();
        // TODO set focus to item that has autofocus attribute
    }, true);

    $scope.$watch('fields', function(newValue, oldValue) {
        if (newValue === oldValue) return;
        prettifyResult();
        saveToLocalStorage();
    }, true);

    function prettifyResult() {
        var fields = $scope.fields; // work with local variable so we dont $watch doesn't trigger until done
        var ugly = [];
        var pretty = [];
        var total = 0;
        // get all ugly results and save them in an array
        // the last entry of the array is the total value so we don't want
        // to include it in the total
        for (var i = 0; i < fields.length - 1; i++) {
            // calculate the result
            fields[i].result = fields[i].amount * fields[i].multiplier;
            // push the result to the ugly array
            ugly.push(fields[i].result);
            // calculate the total while we're at it
            total += fields[i].result;
        }
        // then we can push the total to the ugly array
        ugly.push(total);
        // create an array with proper whitespaces
        pretty = accounting.formatColumn(ugly, '€');
        // set the prettyResult fields to the formatted items
        for (var item in fields) {
            fields[item].prettyResult = pretty[item];
        }
        // set scope values)
        $scope.fields = fields;

        // total counted has changed, so update the input.counted field as well
        fieldsService.UpdateCounted(total);
    }

    function saveToLocalStorage(){
        var amounts = [];
        for(var i in $scope.fields){
            amounts.push($scope.fields[i].amount);
        }
        $localStorage.countedAmounts = amounts;
    }

}]);
