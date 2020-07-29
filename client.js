const net = require('net');
const { IP, HOST } = require('./constants');
const connect = function() {
  const client = net.createConnection({
    host: IP,
    port: HOST
  });
  // interpret incoming data as text
  client.setEncoding('utf8');
  client.on('connect', () => {
    client.write("Name: MEJ");
    console.log("connection has been established!");
  });
  client.on('data', (data) => {
    console.log("Server sent us data: ", data);
  });
  client.on('end', () => {
    console.log("disconnected");
    process.exit();
  });
  return client;
};

module.exports = connect;