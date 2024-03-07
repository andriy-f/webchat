import * as React from 'react'

const ChatInput: React.FC<{
  disabled: boolean
  onSend: (message: string) => void
}> = (props) => {
  const [message, setMessage] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && message !== '') {
      props.onSend(message)
      setMessage('')
    }
  }
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (message !== '') {
      props.onSend(message)
      setMessage('')
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    })
  })
  return (
    <div className='flex m-2'>
      <input
        type="text"
        disabled={props.disabled}
        className='grow border-2 border-gray-300 rounded-md p-2'
        ref={inputRef}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button
        disabled={props.disabled}
        className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'
        onClick={handleClick}>
        Send
      </button>
    </div>
  )
}

export default ChatInput
