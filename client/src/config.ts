// set up on production build
const clientsideServerUrl = typeof window !== 'undefined' && window.kchat
  ? window.kchat.serverUrl
  : null;
// set up on development build
const serverSideServerUrl = process.env.GATSBY_KCHAT_SERVER_URL;

// API
export const serverUrl = serverSideServerUrl || clientsideServerUrl
