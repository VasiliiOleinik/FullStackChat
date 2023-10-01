import { userState } from '@/state/userState'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios'
import { notification } from 'antd'
import { toDoModalState } from '@/state/createTodoModalState'
import type { FormInstance } from 'antd/es/form';
import { useRef } from 'react'
import { ToDoFormProps } from './types'

export const useNewToDo = ({mutate}) => {
  const user = useRecoilValue(userState)
  const setOpen = useSetRecoilState(toDoModalState)
  const todoState = useRecoilValue(toDoModalState)
  const formRef = useRef<FormInstance>(null)

  const handleCreateTodo = async (data: ToDoFormProps) => {
    try {
      await axios.post('/api/todo/create', {
        ...data,
        id: user.id
      })
      mutate()
      notification.success({
        duration: 2,
        message: `${data.title} has been successful created!`,
      })
      formRef.current?.resetFields()
      setOpen({ isOpen: false })
    } catch (e) {
      notification.error({
        duration: 2,
        message: e?.response?.data,
      })
    }
  }

  return {
    handleCreateTodo,
    setOpen,
    todoState,
    formRef
  }
};
