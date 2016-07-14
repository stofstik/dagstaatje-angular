// TODO This directive will return the appropiate list item based on the field.isInput property.

dagstaatjeApp.directive('listItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/list-item.html',
    };
});
