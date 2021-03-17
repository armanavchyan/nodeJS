1.
// const random = require("random");
// let num = random.int(0, 10);
// const promise = new Promise(function (resolve, reject) {
//     if (num < 5) {
//         return reject(new Error(`${num} is littl from 5`));

//     } else {
//         return resolve(num);
//     }
// });
// promise.then(function (data) {
//     console.log(data);
// });
// promise.catch(function (err) {
//     console.log(err);
// })
2.
// const http = require('http');
// const fs = require('fs');

// let data = fs.readFileSync('./config.json');
// let dataJson = JSON.parse(data);
// const server = http.createServer(function (req, res) {

//     res.end('server is created')
// });

// server.listen(dataJson["port"], dataJson["host"]);

3.
// const fs = require('fs/promises');
// async function text() {
//     try {
//         let data = await fs.readFile('./input.txt');
//         let nextData = data.toString();
//         let data1 = nextData.slice(0, nextData.length / 2)
//         let data2 = nextData.slice(nextData.length / 2, data.length)
//         await fs.writeFile('output1.txt', data1);
//         await fs.writeFile('output2.txt', data2);
//     } catch (e) {
//         console.log(e.message);

//     }
// }
// text();