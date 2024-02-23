import uws, { DEDICATED_COMPRESSOR_3KB } from 'uWebSockets.js'

const serverPort = process.env.PORT ? parseInt(process.env.PORT) : 9001;

// Signal handling
function handle(signal) {
  console.log(`*^!@4=> Received event: ${signal}`)
  // handle cleanup, like closing db connections
  process.exit(0)
}

process.on('SIGHUP', handle)
process.on('SIGINT', handle)
process.on('SIGTERM', handle)

uws.App({

}).ws('/*', {

  /* There are many common helper features */
  idleTimeout: 32,
  maxBackpressure: 1024,
  maxPayloadLength: 512,
  compression: DEDICATED_COMPRESSOR_3KB,

  /* For brevity we skip the other events (upgrade, open, ping, pong, close) */
  message: (ws, message, isBinary) => {
    /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */

    /* Here we echo the message back, using compression if available */
    let ok = ws.send(message, isBinary, true);
  }

}).get('/health', (res, req) => {
  res.writeStatus('200 OK').end('healthy');
}).get('/', (res, req) => {
  // generic http handler

  res.writeStatus('200 OK').end('This is K-chat server!');

}).listen(serverPort, (listenSocket) => {

  if (listenSocket) {
    console.log(`Listening on port ${serverPort}`);
  }

});
