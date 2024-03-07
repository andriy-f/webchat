import * as React from 'react'
import { ChatMessage } from './ChatMessage'

const ChatMessages: React.FC<{messages: ChatMessage[]}> = ({messages}) => {
  return (
    <div
      className='grow overflow-y-scroll flex flex-col border-t border-gray-200 bg-grey px-4 py-3'>
      {messages && messages.map((m) => (
        <div key={m.timestamp}>
          <span className='font-bold'>{m.username}</span>: {m.text}
        </div>
      ))}
    </div>
  )
}

export default ChatMessages
