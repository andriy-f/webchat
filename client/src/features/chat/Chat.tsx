import * as React from 'react'

import { serverUrl } from '../../config'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import { ChatMessage, ChatMessage2Send } from './ChatMessage'
import { AuthenticationContext } from '../auth/AuthenticationContext'

const Chat: React.FC = () => {
  const [isConnected, setIsConnected] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const chatSocketRef = React.useRef<WebSocket | null>(null)
  const authContext = React.useContext(AuthenticationContext)

  const handleSend = (messageText: string) => {
    const chatMsg2Send: ChatMessage2Send = {
      text: messageText,
      username: authContext.userName,
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
    chatSocket.addEventListener('open', (event) => {
      setIsConnected(true)
      console.log('Connected to the chat server.', event)
    })

    chatSocket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data) as ChatMessage
      console.log('Received message:', message)
      setMessages(oldMessages => oldMessages.concat(message))
    })

    chatSocket.addEventListener('error', (event) => {
      // disconnected due to error
      setIsConnected(false)
      console.log('WebSocket error: ', event);
    })

    chatSocket.addEventListener('close', (event) => {
      // disconnected due to close
      setIsConnected(false)
      console.log('WebSocket closed: ', event);
    })
  }, [])
  return (
    <div>
      <div className='flex'>Status:&nbsp;{isConnected ?
        <div className='text-emerald-500'>Connected</div> :
        <div className='text-red-500'>Disconnected</div>
      }</div>
      <ChatMessages messages={messages} />
      <ChatInput disabled={!isConnected} onSend={handleSend} />
    </div>)
}

export default Chat
