const net = require('net');
const { stdin } = require('process');
stdin.setEncoding('utf-8');

const connect = function() {
  const client = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  client.setEncoding('utf8');
  client.on('connect', () => {
    client.write("Name: MEJ");
    console.log("connection has been established!");
    stdin.on('data', data => {
      client.write(data);
    });
  });
  // handle messages sent to client

  return client;
};

module.exports = connect;