import express from 'express'
import cors, { CorsOptions } from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io';
import { onConnection } from './helpers/onConnection'

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
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', ({message, user}) => {
    console.log('message: ' + message);
    io.emit('chat message', message);
    io.emit('user', user);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})