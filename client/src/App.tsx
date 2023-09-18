import React, { useEffect } from 'react'
import { Card } from 'antd'
import ChatName from './components/ChatName'
import Chat from './components/Chat'
import ChatForm from './components/ChatForm'
import { socket } from './utils/socket'
import { nanoid } from 'nanoid'

function App() {
  const user = {
    userName: `User-${nanoid(10)}`,
    userId: nanoid(10)
  }

  useEffect(() => {
    socket.connect()

    return () => { socket.disconnect() }
  }, [])

  return (
    <>
      <Card style={{ width: 700, height: 'calc(100vh - 100px)' }}>
        <ChatName />
        <Chat user={user} />
        <ChatForm user={user} />
      </Card>
    </>
  )
}

export default App
