import uws, { DEDICATED_COMPRESSOR_3KB } from 'uWebSockets.js'

const serverPort = process.env.PORT ? parseInt(process.env.PORT) : 9001;

// Signal handling
const handleSignal: NodeJS.SignalsListener = (signal) => {
  console.log(`*^!@4=> Received event: ${signal}`)
  // handle cleanup, like closing db connections
  process.exit(0)
}

process.on('SIGHUP', handleSignal)
process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

const chatTopic = 'home/chat'

uws.App({
}).ws('/*', {

  /* There are many common helper features */
  idleTimeout: 32,
  maxBackpressure: 1024,
  maxPayloadLength: 512,
  compression: DEDICATED_COMPRESSOR_3KB,

  /* Handlers */
  open: (ws) => {
    /* Let this client listen to topic "broadcast" */
    ws.subscribe(chatTopic);
  },
  message: (ws, message, isBinary) => {
    /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */

    // ws.publish(chatTopic, message, isBinary, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('message', message)
    }
    // Here we echo the message back, using compression if available
    const isOk = ws.send(message, isBinary, true);
  }

}).get('/health', (res, req) => {
  res.writeStatus('200 OK').end('healthy');
}).get('/', (res, req) => {
  // generic http handler

  res.writeStatus('200 OK').end('This is K-chat server!');

}).listen(serverPort, (listenSocket) => {

  if (listenSocket) {
    console.log(`K-Chat server is listening on port ${serverPort}`);
  } else {
    console.log('Failed to listen to port ' + serverPort);
  }

});
