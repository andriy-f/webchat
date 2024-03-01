export interface ChatMessage {
  text: string
  username: string
  timestamp: number
}

export interface ChatMessage2Send {
  text: string
  username: string
  timestamp: number // todo remove after implementing server side timestamp
}
