import { fetchTodos } from '@/api/fetchers'
import useSwr from '@/hooks/useSwr'
import { List, Typography, Button, Tag, Empty } from 'antd'
import { useToDo } from './useToDo'
import { CheckCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { ToDoProps } from '@/api/types'
import { Loader } from '@/components/Loader'
import NewToDo from './NewToDo'
import { useSetRecoilState } from 'recoil'
import { toDoModalState } from '@/state/createTodoModalState'

const { Text } = Typography

const ToDo = (): JSX.Element => {
  const { data, isLoading, mutate } = useSwr({ url: 'api/todo/all', fetcher: fetchTodos })
  const { getToDoTag, handleComplete } = useToDo()
  const setOpen = useSetRecoilState(toDoModalState)

  return (
    <>
      {isLoading
        ? <Loader />
        : <>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="middle"
            style={{ marginBottom: '10px' }}
            onClick={() => setOpen({ isOpen: true })}
          >
            Add ToDo
          </Button>
          {!data.rows
            ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}><Empty /></div>
            : <List bordered style={{ maxHeight: '600px', overflow: 'auto' }}>
              {data.rows.map((el: ToDoProps) => {
                return (
                  <List.Item
                    key={el.id}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: `${el.status ? '#f6ffed' : '#fff'}` }}>
                    <Text style={{ marginBottom: '10px' }}>
                      <span style={{ marginRight: '10px' }}>{el.title}</span>
                      {getToDoTag(el.tag)}
                      {el.status
                        ? <Tag icon={<CheckCircleOutlined />} color="#87d068">DONE!</Tag>
                        : <Button
                          style={{ marginLeft: '10px' }}
                          size="small"
                          type="primary"
                          onClick={() => handleComplete(el.id)}
                        >
                          COMPLETE
                        </Button>
                      }
                    </Text>
                    <Text code>{el.description}</Text>
                  </List.Item>
                )
              })}
            </List>
          }
          <NewToDo mutate={mutate} />
        </>
      }
    </>
  )
}

export default ToDo