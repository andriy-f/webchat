import * as React from 'react'

import { serverUrl } from '../../config'

const Chat: React.FC = () => {
  const [status, setStatus] = React.useState('Connecting...')
  React.useEffect(() => {
    const chatSocket = new WebSocket(
      serverUrl,
      'protocolOne',
    )
    chatSocket.onopen = function (event) {
      setStatus('Connected')
      console.log('Connected to the chat server.', event)

      // chatSocket.send("Hello, Server!");
    }
  }, [])
  return (<>
    <div>Status: {status}</div>
    <div>
      Chat messages
    </div>
  </>
  )
}

export default Chat
