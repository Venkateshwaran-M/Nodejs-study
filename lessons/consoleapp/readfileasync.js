// load the fs (filesystem) module
var fs = require('fs');

console.log('start reading a file...');
// read the content of file into memory.
// these error-first callbacks are in the heart of node.js itself -
// the core modules are using it as well as most of the modules found in npm.

/**
 * THings to notice here:
 *       error handling: instead of a try-catch block you have to check for errors in the callback
 *       no return value: async functions
 */



fs.readFile('phonebook.dat', function (err, contactData) {
    if (err) {
        console.log('ERROR!!! ${err}');
        return console.log(err);
    }

    var text = contactData.toString();
    //console.log(text);

    let myfunc = function () {
        console.log('INSIDE readFILE');
    };
    setTimeout(myfunc, 3000);

    var lines = text.split('\n');
    lines.forEach(function (line) {
        var parts = line.split(' ');
        var name = parts[0];
        var phone = parts[2];
        console.log(name + ' - ' + phone);

    });

});

console.log('end of the file');