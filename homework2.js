const stream = require('stream');
const fs = require('fs');
const config = require('./config.json');
const readStream = fs.createReadStream('./homework4Eng.txt',{
    highWaterMark: 1
});
readStream.on('data',function(chunk){
for (const key in config){
     if(chunk.toString()===key){
        console.log(config[key])
    }
}
})