import * as React from 'react'

import { serverUrl } from '../../config'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import { ChatMessage, ChatMessage2Send } from './ChatMessage'

const Chat: React.FC = () => {
  const [status, setStatus] = React.useState('Connecting...')
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const chatSocketRef = React.useRef<WebSocket | null>(null)

  const handleSend = (messageText: string) => {
    console.log('Sending message:', messageText)
    const chatMsg2Send: ChatMessage2Send = {
      text: messageText,
      username: 'me',
      timestamp: Date.now()
    }

    if (chatSocketRef.current && chatSocketRef.current.readyState === WebSocket.OPEN) {
      chatSocketRef.current.send(JSON.stringify(chatMsg2Send));
    }

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
    }

    chatSocket.onmessage = (event) => {
      console.log(event) // TODO
      const message = JSON.parse(event.data) as ChatMessage
      setMessages(oldMessages => oldMessages.concat(message))
    }

    chatSocket.addEventListener('error', (event) => {
      console.log('WebSocket error: ', event);
      setStatus('Error')
    })

    chatSocket.addEventListener('close', (event) => {
      console.log('WebSocket closed: ', event);
      setStatus('Disconnected')
    })
  }, [])
  return (<>
    <div>Status: {status}</div>
    <ChatMessages messages={messages} />
    <ChatInput onSend={handleSend} />
  </>
  )
}

export default Chat
