import * as React from 'react'

import { serverUrl, showOwnMessagesImmediately } from '../../config'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import { type ChatMessage, type ChatMessage2Send } from './ChatMessage'
import { AuthenticationContext } from '../auth/AuthenticationContext'
import RequireAuth from '../auth/RequireAuth'
interface WebSocketMessageEvent {
  data: string
}

const Chat: React.FC = () => {
  const [isConnected, setIsConnected] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const chatSocketRef = React.useRef<WebSocket | null>(null)
  const authContext = React.useContext(AuthenticationContext)

  const handleSend = (messageText: string): void => {
    const chatMsg2Send: ChatMessage2Send = {
      text: messageText,
      username: authContext.userName,
      timestamp: Date.now()
    }

    if (chatSocketRef.current !== null && chatSocketRef.current.readyState === WebSocket.OPEN) {
      chatSocketRef.current.send(JSON.stringify(chatMsg2Send))
    }

    if (showOwnMessagesImmediately) {
      setMessages(oldMessages => oldMessages.concat({
        ...chatMsg2Send,
        username: 'Me'
      }))
    }
  }

  React.useEffect(() => {
    if (serverUrl === '' || serverUrl === null || serverUrl === undefined) {
      return
    }

    const chatSocket = new WebSocket(
      serverUrl,
      'protocolOne'
    )

    chatSocketRef.current = chatSocket

    chatSocket.addEventListener('open', (event) => {
      setIsConnected(true)
      console.log('Connected to the chat server.', event)
    })

    chatSocket.addEventListener('message', (event: WebSocketMessageEvent) => {
      // console.log('Received message event:', event)
      const message = JSON.parse(event.data) as ChatMessage
      console.log('Received message:', message)

      if (!(showOwnMessagesImmediately && message.username === authContext.userName)) {
        // if app is rednering own messages immediately,
        // then skip showing own messages on broadcast from server
        setMessages(oldMessages => oldMessages.concat(message))
      }
    })

    chatSocket.addEventListener('error', (event) => {
      // disconnected due to error
      setIsConnected(false)
      console.log('WebSocket error: ', event)
    })

    chatSocket.addEventListener('close', (event) => {
      // disconnected due to close
      setIsConnected(false)
      console.log('WebSocket closed: ', event)
    })

    return () => {
      chatSocket.close()
      chatSocketRef.current = null
    }
  }, [authContext.userName])

  return (
    <RequireAuth>
      <div className='flex text-center'>Status:&nbsp;{isConnected
        ? <div className='text-emerald-500'>Connected</div>
        : <div className='text-red-500'>Disconnected</div>
      }</div>
      <ChatMessages messages={messages} />
      <ChatInput disabled={!isConnected} onSend={handleSend} />
    </RequireAuth>
  )
}

export default Chat
