import { ToDoLabels } from '@/constants'
import { Tag } from 'antd'
import axios from 'axios'

export const useToDo = () => {
  const getToDoTag = (tag: string): JSX.Element => {
    if (tag === ToDoLabels.work) return <Tag color='red'>{tag}</Tag>
    if (tag === ToDoLabels.family) return <Tag color='green'>{tag}</Tag>
    if (tag === ToDoLabels.sport) return <Tag color='blue'>{tag}</Tag>
    if (tag === ToDoLabels.hobby) return <Tag color='geekblue'>{tag}</Tag>

    return <Tag color='purple'>{tag}</Tag>
  }

  const handleComplete = async (id: number) => {
    try {
      const todo = await axios.put('/api/todos/update', { id })
      console.log('todo', todo)
    } catch (e) {
      console.log('error', e)
    }
  }

  return {
    getToDoTag,
    handleComplete
  }
}
