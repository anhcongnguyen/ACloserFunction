const flight = 'LH231';
const jonas = {
    name: 'Jonas',
    passport: 23456789
}

const checkIn = function (flight, passanger) {
    flightNum = 'LH333',
        passanger.name = 'Mr. ' + passanger.name;

    if (passanger.passport === 23456789) {
        alert("Check in");
    } else {
        alert("Wrong passport");
    }
}

// checkIn(flight, jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);


//HOC && Callback

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is best!', upperFirstWord);

const high5 = function () {
    console.log("Hi");
}

document.body.addEventListener('Click', high5);

['Jonas', 'Kevin', 'CA'].forEach(high5);