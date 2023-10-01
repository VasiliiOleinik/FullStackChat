import { Menu } from 'antd'
import links from './links'
import { Link } from 'react-router-dom'

const HeaderMenu = (): JSX.Element => (
  <Menu mode="horizontal" defaultSelectedKeys={['main']} style={{ background: 'transparent' }}>
    {links.map(el => (
      <Menu.Item key={el.key}>
        <Link to={el.link} style={{ color: '#fff' }}>{el.title}</Link>
      </Menu.Item>
    ))}
  </Menu>
)
export default HeaderMenu