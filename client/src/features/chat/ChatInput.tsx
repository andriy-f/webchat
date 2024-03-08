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

  React.useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    })
  })
  return (
    <form className="flex" action="#" method="POST" onSubmit={(e) => {
      e.preventDefault()
      message !== '' && props.onSend(message)
      setMessage('')
    }}>
      <input
        type="text"
        disabled={props.disabled}
        className='grow border-2 border-gray-300 rounded-md p-2'
        ref={inputRef}
        value={message}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <button
        disabled={props.disabled}
        className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'
        type='submit'
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
