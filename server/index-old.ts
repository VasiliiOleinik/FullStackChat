import express from 'express'
import { CorsOptions } from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'myRandomHash'
const PORT = process.env.PORT;
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: process.env.ALLOWED_ORIGIN as CorsOptions,
  serveClient: false
})

app.get('/', (req, res) => {
  res.send('<h1>Hello node</h1>')
})


io.on('connection', (socket) => {
  console.log('a user connected')
  let token = socket.handshake.auth.token
  console.log('token', token)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('my message', (msg: string) => {
    io.emit('my broadcast', `server: ${msg}`);
  })

  socket.on('join', (roomName) => {
    console.log(`Join: ${roomName}`)
    socket.join(roomName)
  })

  socket.on('message', ({ message, roomName }) => {
    console.log(`Message: ${message} in ${roomName}`)
    socket.to(roomName).emit("message", message)
  })

})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on('join_room', ({userName, room}) => {
//     socket.join(room)

//     socket.to(room).emit('receive_message', {
//       message: `${userName} has joined the chat room`,
//       userName: 'ChatBot',
//       date: Date.now()
//     })

//     socket.emit('receive_message', {
//       message: `Welcome ${userName}`,
//       userName: 'ChatBot',
//       date: Date.now()
//     })

//     let chatRoom = ''
//     let allUsers = [];  

//     chatRoom = room
//     allUsers.push({ id: socket.id, userName, room })
//     const chatRoomUsers = allUsers.filter((user) => user.room === room)
//     socket.to(room).emit('chatroom_users', chatRoomUsers);
//     socket.emit('chatroom_users', chatRoomUsers);
//   })

//   socket.on('send_message', (data) => {
//     const {message, userName, room, date} = data
//     io.in(room).emit('receive_message', data)
//   });
// });

