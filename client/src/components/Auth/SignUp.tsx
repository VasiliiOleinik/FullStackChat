import { RocketOutlined } from '@ant-design/icons'
import { Button, Card, Input, notification } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleAuth = async () => {
    try {
      const data = {
        email,
        password,
        name
      }
      const { data: { user } } = await axios.post('http://localhost:3001/api/user/create', data)

      notification.success({
        duration: 2,
        message: `User ${user.name} has been created!`,
        onClick: () => {
          console.log('Notification Clicked!')
        },
      })
      navigate('/')
    } catch (e) {
      notification.error({
        duration: 2,
        message: e?.response?.data,
        onClick: () => {
          console.log('Notification Clicked!')
        },
      })
    }
  }


  return (
    <Card style={{ marginTop: 5, background: '#e6f4ff' }} size='small'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
        <Input placeholder="Name" onChange={e => setName(e.target.value)} value={name} style={{ marginTop: 10 }} />
        <Input placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} style={{ marginTop: 10 }} />
        <Button
          type="primary"
          shape="circle"
          icon={<RocketOutlined />}
          style={{ marginTop: 10 }}
          onClick={handleAuth} />
      </div>
    </Card>
  )
}

export default SignUp