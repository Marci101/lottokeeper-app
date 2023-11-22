import { Link } from 'react-router-dom';
import './navBar.css';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <ul>
        <li><Link to='/'>LottoKeeper</Link></li>
        <li><Link to='user'>User</Link></li>
        <li><Link to='admin'>Admin</Link></li>
      </ul>
    </nav>
  );
}