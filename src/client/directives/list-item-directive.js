// TODO This directive will return the appropiate list item based on the field.isInput property.

dagstaatjeApp.directive('dsRow', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/ds-row.html',
    };
});
