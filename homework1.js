const stream = require('stream');
const fs = require('fs');
const readStream = fs.createReadStream('./input.txt', {
  highWaterMark: 10
});
readStream.on('data', function (chunk) {
  if ((chunk.toString().search(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g)) < 0)

    console.log(chunk.toString());


});
readStream.on('end', function(){
  console.log('end');
})