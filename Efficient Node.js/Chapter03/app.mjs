import http from 'node:http';
import fs, { read } from 'node:fs';
import { EventEmitter } from 'node:events';


// const slowOperation = () => {
//     for(let i = 0; i < 1e9; i++) {
//         //fake long result
//     }
// };

// const slowOperation = (cb) => {
//     setTimeout( () => cb(), 15_000,);
// };

// let counter = 0;

// const server = http.createServer((req, res) => {
//     counter += 1;
//     if (counter === 1) {
//         slowOperation(() => {
//             res.end('Slow Reponse');
//         });
//     } else {
//         res.end('Normal Response');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running...');
// });



// class MyEmitter extends EventEmitter {}
// const MyEmitter = new MyEmitter();

// MyEmitter.emit('something-happend', data)

// class ReaderEmitter extends EventEmitter {
//     readFileAsArray(file) {
//         fs.readFile(file, (err, data) => {
//             if(err) {
//                 this.emit('error', err);
//                 returnl
//             }
//             const lines = data.toString().trim().split('\n');
//             this.emit('data', lines);
//         });
//     }
// }

// const reader = new ReaderEmitter();

// reader.on('data', (lines) => {
//     const numbers = lines.map(Number);
//     const oddNumbers = numbers.filter((n) => n % 2 === 1);
//     console.log('Odd numbers count: ', oddNumbers.length);
// });

// reader.on('error', (err) => {
//     throw err;
// });

// reader.readFileAsArray('numbers.txt');



class WithLog extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end')
        });
    }
}

const withLog = new WithLog();
withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));
withLog.on('error', (err) => {
    console.log(err);
});
withLog.execute(fs.readFile, import.meta.filename);
withLog.execute(fs.readFile, '');







