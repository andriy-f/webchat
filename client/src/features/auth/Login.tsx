import * as React from 'react'
import { navigate } from 'gatsby'

import { AuthenticationContext } from './AuthenticationContext'

const Login: React.FC = () => {
  const authContext = React.useContext(AuthenticationContext)
  const [userName, setUserName] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    authContext.login(userName)
    navigate('/')
  }

  React.useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    })
  }, [])

  return (
    <div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}>
          <div>
            <label htmlFor="k-chat-login-username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="k-chat-login-username"
                name="username"
                type="text"
                ref={inputRef}
                value={userName}
                onChange={(e) => { setUserName(e.target.value) }}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
