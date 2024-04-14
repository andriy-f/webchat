// set up on production build
const clientsideServerUrl = (typeof window !== 'undefined' && window.kchat !== undefined)
  ? window.kchat.serverUrl
  : null
// set up on development build
const serverSideServerUrl = process.env.GATSBY_KCHAT_SERVER_URL

// API
export const serverUrl = serverSideServerUrl ?? clientsideServerUrl

// Show (render) own chat messages immediately, not waiting for
// server broadcating it to everyone
export const showOwnMessagesImmediately = true
