const stream = require('stream');
const fs = require('fs');

const textToupperCase = fs.createReadStream('./toUppeCase.txt');


function firstLetterUpperCase() {
    return new Promise((resolve, reject) => {
        textToupperCase.on('data', function (chunk) {
            for (const iterator of chunk.toString().split(' ')) {
               console.log(iterator.slice(0, 1).toUpperCase() + iterator.slice(1)); 
            }
        })


    })
}
firstLetterUpperCase().then(() => console.log(revolve)).catch(() => console.log(err));