const { Transform } = require('stream');
const fs = require('fs');
const readStream = fs.createReadStream('homeworkr5.txt');
const writeStream = fs.createWriteStream('homeworkw5.txt');
const reg = (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g);

class RemoveSpecialChars extends Transform {
    _transform(chunk, encoding, collback) {
        this.push(chunk.toString().replace(reg,''))
        collback();
    }
}
const transform = new RemoveSpecialChars;
readStream.pipe(transform).pipe(writeStream);

readStream.on('end', function(){
    console.log('end');
  })