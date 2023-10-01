import { ToDoLabels } from '@/constants'
import { Tag, notification } from 'antd'
import axios from 'axios'

export const useToDo = ({ mutate }) => {
  const getToDoTag = (tag: string): JSX.Element => {
    if (tag === ToDoLabels.work) return <Tag color='red'>{tag}</Tag>
    if (tag === ToDoLabels.family) return <Tag color='green'>{tag}</Tag>
    if (tag === ToDoLabels.sport) return <Tag color='blue'>{tag}</Tag>
    if (tag === ToDoLabels.hobby) return <Tag color='geekblue'>{tag}</Tag>

    return <Tag color='purple'>{tag}</Tag>
  }

  const handleComplete = async ({ id, title }: { id: number, title: string }) => {
    try {
      await axios.put('/api/todo/complete', { id, status: true })
      mutate()
      notification.success({
        duration: 2,
        message: `${title} has been successful completed!`,
      })
    } catch (e) {
      console.log('error', e)
    }
  }

  const handleDelete = async ({ id, title }: { id: number, title: string }) => {
    try {
      await axios.delete(`/api/todo/delete/${id}`)
      mutate()
      notification.warning({
        duration: 2,
        message: `${title} has been successful deleted!`,
      })
    } catch (e) {
      console.log('error', e)
    }
  }

  return {
    getToDoTag,
    handleComplete,
    handleDelete
  }
}
