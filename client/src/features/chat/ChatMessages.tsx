import * as React from 'react'
import { ChatMessage } from './ChatMessage'

const ChatMessages: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
  const chatMessagesDivRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (chatMessagesDivRef.current) {
      chatMessagesDivRef.current.scrollTop = chatMessagesDivRef.current.scrollHeight
    }
  }, [messages])
  return (
    <div
      ref={chatMessagesDivRef}
      className='grow overflow-y-scroll flex flex-col border-t border-gray-200 bg-grey px-4 py-3'>
      {messages && messages.map((m) => (
        <div
          className='mb-2 flex flex-row'
          key={m.timestamp}>

          <div className='font-bold'>
            {m.username}:
          </div>
          <div
            className='grow ml-1 min-w-0 overflow-hidden overflow-ellipsis'
          >
            {m.text}
          </div>
          <div className='hidden md:block min-w-40 ml-1'>
            {new Date(m.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatMessages
