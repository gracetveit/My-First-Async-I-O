'use strict'
const fs = require('fs');

const asyncNewLine = function(filename) {
    fs.readFile(filename, (err, data) => {
        if (err) {console.log(err)}
        console.log(data.toString().split('\n').length - 1);
    })
}

asyncNewLine(process.argv[2]);