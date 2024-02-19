import uws from 'uWebSockets.js'

const serverPort = process.env.PORT ? parseInt(process.env.PORT) : 9001;

uws.App({

}).ws('/*', {

  /* There are many common helper features */
  idleTimeout: 32,
  maxBackpressure: 1024,
  maxPayloadLength: 512,
  // compression: DEDICATED_COMPRESSOR_3KB,

  /* For brevity we skip the other events (upgrade, open, ping, pong, close) */
  message: (ws, message, isBinary) => {
    /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */

    /* Here we echo the message back, using compression if available */
    let ok = ws.send(message, isBinary, true);
  }

}).get('/*', (res, req) => {

  /* It does Http as well */
  res.writeStatus('200 OK').writeHeader('IsExample', 'Yes').end('Hello there!');

}).listen(serverPort, (listenSocket) => {

  if (listenSocket) {
    console.log(`Listening to port ${serverPort}`);
  }

});
