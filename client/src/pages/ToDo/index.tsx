import { fetchTodos } from '@/api/fetchers'
import useSwr from '@/hooks/useSwr'
import { List, Typography, Button, Tag, Empty, Input } from 'antd'
import { useToDo } from './useToDo'
import { CheckCircleOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { ToDoProps } from '@/api/types'
import { Loader } from '@/components/Loader'
import NewToDo from './NewToDo'
import { useSetRecoilState } from 'recoil'
import { toDoModalState } from '@/state/createTodoModalState'

const { Text } = Typography
const { TextArea } = Input

const ToDo = (): JSX.Element => {
  const { data, isLoading, mutate } = useSwr({ url: 'api/todo/all', fetcher: fetchTodos })
  const { getToDoTag, handleComplete, handleDelete } = useToDo({ mutate })
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
            : <List bordered style={{ maxHeight: '620px', overflow: 'auto' }}>
              {data.rows.map((el: ToDoProps) => {
                return (
                  <List.Item
                    key={el.id}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: `${el.status ? '#f6ffed' : '#fff'}` }}
                  >
                    <div style={{ marginBottom: '10px', borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '5px', width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Text strong style={{ marginRight: '10px' }}>{el.title}</Text>
                      {getToDoTag(el.tag)}
                      {el.status
                        ? <Tag icon={<CheckCircleOutlined />} color="#87d068">DONE!</Tag>
                        : <Button
                          size="small"
                          type="primary"
                          onClick={() => handleComplete({ id: el.id, title: el.title })}
                        >
                          COMPLETE
                        </Button>
                      }
                      <Button
                        style={{ marginLeft: 'auto' }}
                        size="middle"
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete({ id: el.id, title: el.title })}
                      />
                      <div style={{ width: '100%' }}>
                        <Text code>Deadline: {el.deadLine}</Text>
                      </div>
                    </div>
                    <TextArea value={el.description} disabled={true} style={{ color: 'black', height: 80, resize: 'none' }} />
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