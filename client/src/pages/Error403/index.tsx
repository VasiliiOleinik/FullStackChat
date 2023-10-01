import Auth from '@/components/Auth'
import { Alert, Card } from 'antd'

const Error403 = () => {
  return (
    <Card style={{ width: '500px' }}>
      <Alert message="Access denied!" type="error" />
      <Auth />
    </Card>
  )
}

export default Error403