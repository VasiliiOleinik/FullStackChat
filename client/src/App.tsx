import React, { useEffect } from 'react'
import { axiosSetup } from './utils/axios'
import { RouterElement } from './routes'
import { getCookie } from './utils/cookies'
import jwt_decode from 'jwt-decode'
import { useSetRecoilState } from 'recoil'
import { userState } from './state/userState'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const setUser = useSetRecoilState(userState)
  const token = getCookie('token')
  const navigate = useNavigate()
  axiosSetup()

  useEffect(() => {
    if (token) {
      const decodedUser = jwt_decode(token)
      if (decodedUser) {
        console.log('decodedUser', decodedUser)
        setUser(decodedUser?.dataValues)
      }
    } else {
      navigate('/403')
    }
  }, [token])


  // const [token, setToken] = useState('')
  // const [room, setRoom] = useState('')
  // const userName = `User-${nanoid(5)}`

  // useEffect(() => {
  //   initiateSocketConnection(token)
  //   subscribeToChat((err, data) => {
  //     console.log(data)
  //   })


  //   return () => {
  //     initiateSocketConnection()
  //   }
  // }, [])

  return (
    <>
      <RouterElement />

      {/* <Rooms userName={userName} setRoom={setRoom} room={room} />
      <Card style={{ width: 700, height: 'calc(100vh - 100px)' }}>
        <ChatName userName={userName} room={room} />
        <Chat userName={userName} />
        <ChatForm userName={userName} room={room} />
      </Card> */}
    </>
  )
}