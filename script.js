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
        // console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
}

lufthansa.book(239, 'Jonas Schedtman');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

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
// console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
// console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData)
// console.log(swiss);

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
    // console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applicatioin

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

const addTaxRate = (rate) => (value) => value + value * rate;

const addVAT2 = addTaxRate(0.3);
// console.log(addVAT2(200));


// CODING CHALLENGE




/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. 
  For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
    The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
    If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. 
    If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //Answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        }
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }

}

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Immediately invoked function expressions (IIFE)
const runOne = function () {
    console.log('This will never run again');
};

runOne();

//IIFE
(function () {
    console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// conso.log(isPrivate);
console.log(notPrivate);

// Closure

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

console.dir(booker);

//NOTE
// A clousure is the closed-over variable environment of the execution context in which a function was created, event after that execution context is gone.
// A clousure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A clousure makes sure that a function does not loose connection to variables that existed at the function's birth place


//Example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait}`)
}


const perGroup = 1000;
boardPassengers(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();




