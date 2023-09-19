// Using Process stdin
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${ answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This is important software is now closing');
  process.exit(0);
});