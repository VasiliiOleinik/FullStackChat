import { Spin } from 'antd'

export const Loader = (): JSX.Element => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spin size="large" /></div>
)