dagstaatjeApp.service('fieldsService', ['$localStorage', function($localStorage) {

    var countValues = [500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05];

    function countField(multiplier, amount) {
        if(multiplier > 1) {
            this.label = multiplier;
        } else {
            this.label = multiplier.toFixed(2);
        }
        this.multiplier   = multiplier;
        this.amount       = amount || '';
        this.result       = 0;
        this.prettyResult = "€ 0,00";
        this.isInput      = true;
        this.hasButtons   = true;
        this.decrement    = function() {
            this.amount -= 1;
            if (this.amount <= 0) this.amount = '';
        };
        this.increment    = function() {
            if (this.amount === '') {
                this.amount = 0;
            }
            this.amount += 1;
        };
    }


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

    this.GetCountFields = function() {
        // Get the banknote and coin values and push a new field object to array
        var fields = [];
        for(var i in countValues){
            // If there are saved values set them in the new field object
            if ($localStorage.countedAmounts) {
                fields.push(new countField(countValues[i], $localStorage.countedAmounts[i]));
            } else {
                fields.push(new countField(countValues[i]));
            }
        }
        // Then push the total field
        fields.push({
            label: 'Totaal:',
            amount: '',
            result: 0,
            prettyResult: "€ 0,00",
            isInput: false
        });
        return fields;
    };

    this.GetNewInputFields = function() {
        return angular.copy(defaultInputFields);
    };

    this.ResetCountFields = function() {
        $localStorage.countedAmounts = [];
    };

    this.ResetInputFields = function() {
        $localStorage.input.fields = this.GetNewInputFields();
    };

    this.UpdateCounted = function(counted) {
        this.GetById($localStorage.input.fields, 'counted').amount = counted;
    };

    this.GetById = function(fields, id){
        for(var item in fields){
            if(fields[item].id === id){
                return fields[item];
            }
        }
    };

}]);
