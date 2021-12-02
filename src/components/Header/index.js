import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="content-container">
      <Link to="/">
        <p className="item">Home</p>
      </Link>
      <Link to="/about">
        <p className="item">About</p>
      </Link>
    </div>
  </div>
)
export default Header
