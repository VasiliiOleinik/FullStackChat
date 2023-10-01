import { Layout, Col, Row } from 'antd'
import HeaderMenu from './HeaderMenu'

const { Header, Content } = Layout

const RootLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
  <Layout style={{ width: '100vw', height: '100vh' }}>
    <Row>
      <Col span={24}>
        <Header><HeaderMenu /></Header>
      </Col>
    </Row>
    <Content className="site-layout" style={{ padding: '0 50px 50px', }}>
      <div className="site-layout-background" style={{ padding: 24, height: '100%', background: '#ffffff', borderRadius: '5px' }}>
        {children}
      </div>
    </Content>
  </Layout>
)

export default RootLayout