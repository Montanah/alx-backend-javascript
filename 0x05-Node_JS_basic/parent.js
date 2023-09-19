// Script to use for running 1-stdin.js as a child process

const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']);

child.stdout.on('data', (data) => {
  console.log(`From the child: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
  if (code) {
    console.log(`Child process exited with code ${code}`);
  } else if (signal) {
    console.log(`Child process was killed with signal ${signal}`);
  } else {
    console.log('Child process exited with no code or signal');
  }
});
