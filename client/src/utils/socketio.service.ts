import { io } from 'socket.io-client'

// export const socket = io(import.meta.env.VITE_SERVER_URI);

let socket

export const initiateSocketConnection = (token) => {
  console.log(`Connecting socket...`);
  socket = io('http://localhost:8080', {
  auth: {
    token
  }
  });
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
  socket.emit('my message', 'Hello there from React.');
  socket.on('my broadcast', msg => {
    return cb(null, msg)
  })
}

export const subscribeToMessages = (cb) => {
  if (!socket) return(true);
  socket.on('message', msg => {
    console.log('Room event received!');
    return cb(null, msg);
  });
}

export const sendMessage = ({message, roomName}, cb) => {
  if (socket) socket.emit('message', { message, roomName }, cb);
}