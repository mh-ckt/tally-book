// src/components/Navbar.js
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '15px' }}>
        首页
      </Link>
      <Link to="/transactions" style={{ marginRight: '15px' }}>
        记账记录
      </Link>
      <Link to="/add">添加记录</Link>
    </nav>
  )
}
export default Navbar
