
import { Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Auth = () => {
  const [type, setType] = useState('login')
  const authType = [
    { label: 'Login', value: 'login' },
    { label: 'Sign up', value: 'signUp' },
  ]

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
  }

  return (
    <>
      <Radio.Group options={authType} onChange={onChange} value={type} optionType="button" style={{ marginTop: '20px' }} />
      {type === 'login'
        ? <Login />
        : <SignUp />
      }
    </>
  )
}

export default Auth