import { getTagsForSelect } from '@/utils'
import { RocketOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Select, Form, DatePicker } from 'antd'
import { useNewToDo } from './useNewToDo'
const { TextArea } = Input

const NewToDo = ({ mutate }): JSX.Element => {
  const {
    handleCreateTodo,
    setOpen,
    todoState,
    formRef
  } = useNewToDo({ mutate })

  return (
    <Modal
      title="Add ToDo"
      open={todoState.isOpen}
      onOk={() => console.log()}
      onCancel={() => setOpen({ isOpen: false })}
      footer={[]}
    >
      <Form
        onFinish={handleCreateTodo}
        ref={formRef}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        <Form.Item name="title" label="" rules={[{ required: true }]} style={{ width: '100%' }}>
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item name="tag" label="" rules={[{ required: true }]} style={{ width: '100%' }}>
          <Select options={getTagsForSelect()} placeholder="Tag" />
        </Form.Item>

        <Form.Item name="deadLine" label="" rules={[{ required: true }]} style={{ width: '100%' }}>
          <DatePicker />
        </Form.Item>

        <Form.Item name="description" label="" rules={[{ required: true }]} style={{ width: '100%' }}>
          <TextArea placeholder="Description" autoSize={{ minRows: 3, maxRows: 5 }} />
        </Form.Item>
        <Button
          key="submit"
          htmlType="submit"
          type="primary"
          icon={<RocketOutlined />}
          style={{ marginTop: 10 }}>Create</Button>
      </Form>
    </Modal>
  )
}

export default NewToDo