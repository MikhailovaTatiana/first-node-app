const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return 'Welcome to SALT, ' + namePassedIn;
}

function days(datePassedIn) {
  const startDate = new Date(datePassedIn);
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((startDate - today) / oneDay));
}

// Main program
const name = prompt('What is your name? ');
const startDay = prompt('When does that course start (yyyy-mm-ddaaaa)? ');
const greeting = greet(name);
const daysCount = days(startDay);
console.log(greeting);
console.log('Today it is ' + daysCount + ' days left until the course starts');

module.exports.greet = greet;
module.exports.days = days;
