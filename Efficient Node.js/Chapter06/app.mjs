import fs from 'node:fs';
import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';

// const file = fs.createWriteStream('./big.file');

// for(let i = 0; i < 1e6; i++) {
//     file.write(randomBytes(200).toString('hex'));
// }

// file.end();

const server = createServer();
server.on('request', async(req, res) => {
    const src = createReadStream('./big.file');
    src.pipe(res);
});
server.listen(3000, () => {
    console.log('Server is running...');
});




































































































