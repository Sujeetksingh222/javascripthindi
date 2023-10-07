// const score = 400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));// it sets precision at end. i.e it sets two zero after decimal point.

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4));// it rounds up value . output is 23.90


// const hundereds = 1000000
// console.log(hundereds.toLocaleString());// o/p:-1,000,00
// console.log(hundereds.toExponential('en-IN'));// 1e+6

// +++++++++++++++ Maths ++++++++++++++++++
// console.log(Math);// Math is also object 
// console.log(Math.abs(-4))
// console.log(Math.round(4.3));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.max(1,2,4,8));
console.log(Math.random());// it always generate values between 0 and 1
console.log(Math.random()*10 + 1);
console.log(Math.floor((Math.random()*10)) + 1);

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min + 1))) + min);


