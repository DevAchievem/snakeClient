const net = require('net');
const { stdin } = require('process');
stdin.setEncoding('utf-8');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const client = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  client.setEncoding('utf8');
  client.on('connect', () => {
    client.write('Hello from MJ!');
    stdin.on('data', data => {
      client.write(data);
    });
  });
  // handle messages sent to client
  client.on('disconnect', () => {
    client.write('you ded cuz you idled');
  });
  return client;
};

console.log('Connecting ...');
connect();

//Password 648842