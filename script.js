// const flight = 'LH231';
// const jonas = {
//     name: 'Jonas',
//     passport: 23456789
// }

// const checkIn = function (flight, passanger) {
//     flightNum = 'LH333',
//         passanger.name = 'Mr. ' + passanger.name;

//     if (passanger.passport === 23456789) {
//         alert("Check in");
//     } else {
//         alert("Wrong passport");
//     }
// }

// // checkIn(flight, jonas);

// // const newPassport = function (person) {
// //     person.passport = Math.trunc(Math.random() * 100000000);
// // }

// // newPassport(jonas);
// // checkIn(flight, jonas);


// //HOC && Callback

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is best!', upperFirstWord);

// const high5 = function () {
//     console.log("Hi");
// }

// document.body.addEventListener('Click', high5);

// ['Jonas', 'Kevin', 'CA'].forEach(high5);

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greetArr = greeting => (name) => console.log(`${greeting} ${name}`);


// greetArr('Hello')('CA');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
}

lufthansa.book(239, 'Jonas Schedtman');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;

// book(23, 'Sarah Williams');


// Does NOT work
// book(23, 'Sarah Williams');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss, ...flightData);

// The difference between apply and call method is the second argument take an array

// Bind method
// The bind method does not immediatelt call the function instead it returns a new function where this keyword is bound.

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applicatioin

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = (rate) => (value) => value + value * rate;

const addVAT2 = addTaxRate(0.3);
console.log(addVAT2(200));



