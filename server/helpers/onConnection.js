export const onConnection = (io, socket) => {
  console.log('socket', socket.handshake)
  const { roomId, userName } = socket.handshake.query;

  console.log('userName', userName)

  socket.roomId = roomId;
  socket.userName = userName;

  socket.join(roomId);
}