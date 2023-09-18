import React, { useState } from 'react'
import { Card, Input, Button } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { socket } from '../../utils/socket'

const ChatForm = ({ user }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    socket.emit('chat message', { message, user })
    setMessage('')
  }

  return (
    <Card style={{ marginTop: 20, background: '#e6f4ff' }} size='small'>
      <div style={{ display: 'flex' }}>
        <Input placeholder="Write something..." onChange={e => setMessage(e.target.value)} value={message} />
        <Button type="primary" shape="circle" icon={<RocketOutlined />} style={{ marginLeft: 10 }} onClick={handleSubmit} />
      </div>
    </Card>
  )
}

export default ChatForm