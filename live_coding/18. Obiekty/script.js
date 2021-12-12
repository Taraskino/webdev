var person = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    introduce: function (){
        console.log('Nazywam się: ' + this.firstName + ' ' + this.lastName)
    }
}

person.introduce();
person.firstName = 'Adam';
person.introduce();


function Car(brand, model) {
    this.brand = brand;
    this.model = model;
     }
this.showDetails = function () {
    console.log('Car: ' + brand + ' ' + model);
}
}
var fiat = new Car('Fiat', '125');
fiat.showDetails;

class House {
    constructor(windows, dors) {
        this.windows = windows;
        this.dors = dors;
        }
        showDetails(){
        console.log('Dom ma: ' + this.windows + ' ' + this.dors)
        }
}

var house = new House(2,6);
house.showDetails()