dagstaatjeApp.service('fieldsService', ['$localStorage', function($localStorage) {

    var defaultCountFields = [{
        label: '€ 500',
        multiplier: 500,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 200',
        multiplier: 200,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 100',
        multiplier: 100,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 50',
        multiplier: 50,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 20',
        multiplier: 20,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 10',
        multiplier: 10,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 5',
        multiplier: 5,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 2',
        multiplier: 2,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 1',
        multiplier: 1,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.50',
        multiplier: 0.5,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.20',
        multiplier: 0.2,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.10',
        multiplier: 0.1,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.05',
        multiplier: 0.05,
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: 'Totaal:',
        amount: '',
        result: 0,
        prettyResult: "€ 0,00",
        isInput: false
    }];

    var defaultInputFields = [{
        id: 'start',
        label: 'Beginkas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'extra',
        label: 'Extra in kas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'turnover',
        label: 'Omzet:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'tab',
        label: 'Pof:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'tabPaid',
        label: 'Pof betaald:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'report',
        label: 'Kassastrook:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        id: 'totalIn',
        label: 'Totaal in kas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        id: 'out',
        label: 'Uit kas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'pin',
        label: 'PIN:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'totalOut',
        label: 'Totaal uit kas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        id: 'result',
        label: 'Kas moet zijn:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        id: 'counted',
        label: 'Geteld:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'difference',
        label: 'Verschil:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        id: 'envelope',
        label: 'Envelop:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        id: 'new',
        label: 'Nieuwe kas:',
        amount: '',
        prettyAmount: "€ 0,00",
        isInput: false
    }];

    this.GetNewCountFields = function() {
        return angular.copy(defaultCountFields);
    };

    this.GetNewInputFields = function() {
        return angular.copy(defaultInputFields);
    };

    this.ResetCountFields = function() {
        $localStorage.count.fields = this.GetNewCountFields();
    };

    this.ResetInputFields = function() {
        $localStorage.input.fields = this.GetNewInputFields();
    };

    this.UpdateCounted = function(counted) {
        this.GetByLabel($localStorage.input.fields, 'Geteld:').amount = counted;
    };

    this.GetByLabel = function(fields, label){
        for(var item in fields){
            if(fields[item].label === label){
                return fields[item];
            }
        }
    };

}]);
