1.
// const os = require('os');
// console.log(os.totalmem());
2.
// const os = require('os');
// console.log(os.networkInterfaces()['Loopback Pseudo-Interface 1'][1]['address']);
3.
// const fs = require('fs');
// const os = require('os');
// let fileName = Math.ceil(Math.random()*(100000000-1)); 
// fs.appendFile(`${fileName}.txt`, `${os.cpus().length}`, function (err) {
//     if (err) throw err;
//     console.log('ok!');
//   });
4.
// const fs = require('fs');
// const data = fs.readFileSync('input.txt', 'utf-8');
// const nextData = data.split(' ').join('-');
// fs.appendFile('write.txt', `${nextData}`, function (err) {
//     if (err) throw err;
//     console.log('ok!');
// });
5.
// const fs = require('fs');
// const os = require('os');
// const homeworks = fs.readdirSync(`${__dirname}/homeworks/`);
// let data = '';

// for (let i = 0; i < homeworks.length; i++) {
//      data += fs.readFileSync(`${__dirname}/homeworks/` + homeworks[i], 'utf8');
// }

//  fs.appendFile(`${os.platform()+'_'+new Date().getHours()+'_'+new Date().getMinutes()+'_'+new Date().getSeconds()}.txt`, 
// `${data}`, function (err) {
//        if (err) throw err;
//        console.log('ok!');
//     });
