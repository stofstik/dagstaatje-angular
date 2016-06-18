dagstaatjeApp.service('fieldsService', [function() {

    var money = [{
        label: '€ 500',
        multiplier: 500,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 200',
        multiplier: 200,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 100',
        multiplier: 100,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 50',
        multiplier: 50,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 20',
        multiplier: 20,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 10',
        multiplier: 10,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 5',
        multiplier: 5,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 2',
        multiplier: 2,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 1',
        multiplier: 1,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.50',
        multiplier: 0.5,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.20',
        multiplier: 0.2,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.10',
        multiplier: 0.1,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: '€ 0.05',
        multiplier: 0.05,
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: true
    }, {
        label: 'Totaal:',
        amount: 0,
        result: 0,
        prettyResult: "€ 0,00",
        isInput: false
    }];

    var input = [{
        label: 'Beginkas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Extra in kas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Omzet:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Pof:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Pof betaald:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Kassastrook:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        label: 'Totaal in kas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        label: 'Uit kas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'PIN:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Totaal uit kas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        label: 'Kas moet zijn:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        label: 'Geteld:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Verschil:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }, {
        label: 'Envelop:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: true
    }, {
        label: 'Nieuwe kas:',
        amount: 0,
        prettyAmount: "€ 0,00",
        isInput: false
    }];

    this.GetMoneyFields = function() {
        return money;
    };
    this.GetInputFields = function() {
        return input;
    };
    this.UpdateCounted = function(counted) {
        this.GetByLabel(input, 'Geteld:').amount = counted;
    };
    this.GetByLabel = function(fields, label){
        for(var item in fields){
            if(fields[item].label === label){
                return fields[item];
            }
        }
    };


}]);
