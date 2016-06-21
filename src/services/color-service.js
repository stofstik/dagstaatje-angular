dagstaatjeApp.service('colorService', [function() {
    var countPageColors = {
        light: '#e6f7ff',
        normal: '#cceeff',
        highlight: '#66ccff'
    };
    var inputPageColors = {
        light: '#fff216',
        normal: '#fff2e6',
        highlight: '#ff9933'
    };

    this.getColors = function(pageType) {
        if(pageType === 'count') {
            fieldsService.ResetCountFields();
        } else if(pageType === 'input') {
            fieldsService.ResetInputFields();
        }
    };

}]);
