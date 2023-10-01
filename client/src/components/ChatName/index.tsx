import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { socket } from '../../utils/socket'

const ChatName = ({ userName, room }) => {
  const [users, setUsers] = useState()

  useEffect(() => {
    socket.on('chatroom_users', (data) => {
      setUsers(data)
    })

    return () => socket.off('chatroom_users')
  }, [socket])

  return (
    <>
      <Card size='small'><p>{room}</p></Card>
      <Card size='small'>
        Users:
        <div style={{ display: 'flex' }}>
          {users?.map((user, i) => <p key={i} style={{ fontWeight: `${user.userName === userName ? 'bold' : 'normal'}` }}>{user.userName},</p>)}
        </div>
      </Card>
    </>
  )
}

export default ChatName