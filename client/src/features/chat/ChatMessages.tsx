import * as React from 'react'
import { ChatMessage } from './ChatMessage'

const ChatMessages: React.FC<{messages: ChatMessage[]}> = ({messages}) => {
  return (
    <div className='max-h-96'>
      {messages && messages.map((m) => (
        <div key={m.timestamp}>
          <span className='font-bold'>{m.username}</span>: {m.message}
        </div>
      ))}
    </div>
  )
}

export default ChatMessages
