var readlineSync = require('readline-sync');

var username = readlineSync.question('May I Have your name?');
console.log('Hi ' + username + '!');

var favFood = readlineSync.question('What is your favourite food?', {
    hideEchoBack: true, //
});
console.log('Oh, ' + username + ' loves ' + favFood + '!');

console.log('After');