import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { socket } from '../../utils/socket'
import { ChatMessage, MyMessage } from './styles'
import { nanoid } from 'nanoid'

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages([...messages, { message: data.message, userName: data.userName, date: data.date }])
    })

    return () => socket.off('receive_message')
  }, [socket])

  return (
    <Card style={{ marginTop: '20px', height: 'auto', minHeight: "100px", overflowY: 'auto' }}>
      {/* {messages.map(msg => <ChatMessage key={nanoid(5)} friend={friend}>{msg}</ChatMessage>)} */}
      {messages.map(msg => <ChatMessage key={nanoid(5)}>{msg.userName}: {msg.message}</ChatMessage>)}
    </Card>
  )
}

export default Chat