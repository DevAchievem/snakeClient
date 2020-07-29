const connect = require('./client');
console.log('Connecting ...');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */  const stdin = process.stdin;

const setupInput = function() {
  handleUserInput();

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = function()  {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

};
setupInput();
connect();