import * as React from 'react'

const ChatInput: React.FC<{
  onSend: (message: string) => void
}> = (props) => {
  const [message, setMessage] = React.useState('')

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
  return (
    <>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button onClick={handleClick}>Send</button>
    </>
  )
}

export default ChatInput
