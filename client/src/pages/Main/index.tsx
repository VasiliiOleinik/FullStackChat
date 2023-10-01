import { userState } from '@/state/userState'
import React from 'react'
import { useRecoilValue } from 'recoil'

const Main = () => {
  const user = useRecoilValue(userState)
  console.log('userState', user)
  return (
    <div>
      Main page
    </div>
  )
}

export default Main