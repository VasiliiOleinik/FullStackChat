import { Card } from 'antd'
import React, { useState } from 'react'
import { socket } from '../../utils/socket'
import { ChatMessage, MyMessage } from './styles'
import { nanoid } from 'nanoid'

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([''])
  const [friend, setFriend] = useState(false)
  socket.on('chat message', msg => setMessages([...messages, msg]))
  socket.on('user', msg => {
    if (msg.userId === user.userId) {
      setFriend(false)
    } else {
      setFriend(true)
    }
  })

  return (
    <Card style={{ marginTop: '20px', height: 'auto', minHeight: "100px", overflowY: 'auto' }}>
      {messages.map(msg => <ChatMessage key={nanoid(5)} friend={friend}>{msg}</ChatMessage>)}
    </Card>
  )
}

export default Chat