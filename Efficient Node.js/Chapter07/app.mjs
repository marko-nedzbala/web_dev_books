import { spawn } from 'node:child_process';

// const child = spawn('calc');

// function example(code, signal) {
//     console.log(`Child process exited. Code: ${code} - Signal: ${signal}`);
    
// }

// child.on('exit', example);




// import { exec } from 'node:child_process';

// exec('dir', (err, stdout, stderr) => {
//     console.log(`Stdout: ${stdout}`);
// });




// const child = spawn('dir', {
//     stdio: 'inherit',
//     shell: true
// });

// function example(code, signal) {
//     console.log(`Child process exited. Code: ${code} - Signal: ${signal}`);
    
// }

// child.on('exit', example);




import { execFile } from 'node:child_process';

execFile('python', ['myFile.py'], (error, stdout, stderr) => {
    if(error) {
        console.error(`Error: ${error}`);
        return;
    }
    console.log(`Completed: ${stdout}`);
});





