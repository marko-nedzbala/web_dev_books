import { createServer } from 'node:http';
import cluster from 'node:cluster';
import os from 'node:os';


if(cluster.isPrimary) {
    const cpus = os.availableParallelism();
    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    createServer((req, res) => {
        for(let i = 0; i < 1e8; i++) {
            //simulate cpu work
        };
        res.end();
    }).listen(3000, () => {
        console.log(`Process ${process.pid}`);
    });
}























