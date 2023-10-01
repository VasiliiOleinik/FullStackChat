import { Select, Button } from 'antd'
import { socket } from '../../utils/socket'

const Rooms = ({ userName, setRoom, room }) => {

  const joinRoom = () => {
    if (room) {
      console.log('room', room)
      socket.emit('join_room', { userName, room })
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Select
        onChange={e => setRoom(e)}
        defaultValue=""
        style={{ width: 580, marginBottom: 12, marginRight: 12 }}
        options={[{ value: 'React', label: 'React' }, { value: 'Vue', label: 'Vue' }, { value: 'Angular', label: 'Angular' }]}
      />
      <Button type="primary" onClick={joinRoom}>Conntect</Button>
    </div>
  )
}

export default Rooms