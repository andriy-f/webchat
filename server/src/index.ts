import uws, { DEDICATED_COMPRESSOR_3KB } from 'uWebSockets.js'

const serverPort = process.env.PORT ? parseInt(process.env.PORT) : 9001;
const isDevEnv = process.env.NODE_ENV === 'development'
let appListenSocket: uws.us_listen_socket | null = null;
let connectedClientCount = 0

// Signal handling
const handleSignal: NodeJS.SignalsListener = (signal) => {
  console.log(`*^!@4=> Received event: ${signal}`)
  if (appListenSocket !== null) {
    uws.us_listen_socket_close(appListenSocket)
    appListenSocket = null
  }
  // handle cleanup, like closing db connections
  process.exit(0)
}

process.on('SIGHUP', handleSignal)
process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

const chatTopic = 'home/chat'
interface KChatData {
  _kchat_clientId: number
}

uws.App({
}).ws<KChatData>('/*', {

  /* There are many common helper features */
  idleTimeout: 32,
  maxBackpressure: 1024,
  maxPayloadLength: 512,
  compression: DEDICATED_COMPRESSOR_3KB,

  /* Handlers */
  open: (ws) => {
    /* Let this client listen to topic $chatTopic */
    ws.subscribe(chatTopic);
    // ws._kchat_clientId = connectedClientCount
    ws.getUserData()._kchat_clientId = connectedClientCount
    connectedClientCount += 1
  },
  message: (ws, message, isBinary) => {

    // Send message to current client
    // Uncomment if client app has 'showOwnMessagesImmediately' set to false
    // const isOk = ws.send(message, isBinary, true)

    // Broadcast messages to everyone except current client
    ws.publish(chatTopic, message, isBinary, true)
    if (isDevEnv) {
      console.log(`message from client ${ws.getUserData()._kchat_clientId}`, message)
    }
  },
  close: (ws, code, message) => {
    /* The library guarantees proper unsubscription at close */
    connectedClientCount -= 1
    if (isDevEnv) {
      console.log(`A WebSocket for client ${ws.getUserData()._kchat_clientId} was closed`, code, message)
    }
  }
}).get('/health', (res, req) => {
  res.writeStatus('200 OK').end('healthy');
}).get('/', (res, req) => {
  // generic http handler

  res.writeStatus('200 OK').end('This is K-chat server!')

}).listen(serverPort, (listenSocket) => {

  if (listenSocket) {
    appListenSocket = listenSocket
    console.log(`K-Chat server is listening on port ${serverPort}`)
  } else {
    console.log('Failed to listen to port ' + serverPort)
  }
})
