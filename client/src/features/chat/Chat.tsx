import * as React from 'react'

import { serverUrl } from '../../config'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

const Chat: React.FC = () => {
  const [status, setStatus] = React.useState('Connecting...')
  const [messages, setMessages] = React.useState([])
  const chatSocketRef = React.useRef<WebSocket | null>(null)

  const handleSend = (message: string) => {
    console.log('Sending message:', message)
  }
  React.useEffect(() => {
    chatSocketRef.current = new WebSocket(
      serverUrl,
      'protocolOne',
    )
    const chatSocket = chatSocketRef.current
    chatSocket.onopen = function (event) {
      setStatus('Connected')
      console.log('Connected to the chat server.', event)

      // chatSocket.send("Hello, Server!");
    }

    chatSocket.onmessage = (event) => {
      console.log(event) // TODO
      // setMessages(oldMessages => oldMessages.concat(event.data))
    }
  }, [])
  return (<>
    <ChatMessages messages={messages}/>
    <ChatInput onSend={handleSend}/>
  </>
  )
}

export default Chat
