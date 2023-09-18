import React, { useEffect, useState } from 'react'
import { socket } from '../../utils/socket'

const ConnectionManager = () => {
  const [count, setCount] = useState(1)

  function connect() {
    socket.connect()
  }

  function disconnect() {
    socket.disconnect()
  }

  useEffect(() => {
    socket.emit('chat message', `Hi, Im React + ${count}`)
  }, [count])

  return (
    <>
      <button onClick={() => setCount(prev => ++prev)}>Send MSG</button>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}

export default ConnectionManager