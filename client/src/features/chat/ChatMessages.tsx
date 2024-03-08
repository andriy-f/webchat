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
      className='grow overflow-y-scroll flex flex-col border-t border-gray-200 bg-grey mb-1 ring-1 rounded-md ring-black ring-opacity-5 p-2'>
      {messages && messages.map((m) => {
        const isCurrentAccountMessage = m.username === 'Me'
        return (
          <div
            key={m.timestamp}
            className={`rounded-md ${isCurrentAccountMessage ? 'ml-2 bg-cyan-200' : 'bg-teal-100'} shadow-lg ring-1 ring-black ring-opacity-5 p-1 my-2`}
          >
            {/* Message header */}
            <div
              className='flex flex-row border-b-2 border-b-black border-opacity-5'
            >
              <div
                className='font-bold'
              >{m.username}</div>,&nbsp;
              <div
                className='block min-w-40'
              >{new Date(m.timestamp).toLocaleTimeString()}
              </div>
            </div>
            {/* Message text */}
            <div
              className='grow min-w-0 overflow-hidden overflow-ellipsis whitespace-pre'
            >
              {m.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatMessages
