import { NavLink } from 'react-router-dom';
import "../global.css";

const Nav = () => {
  return (
    <>
      <div>
        <ul style={{ display: 'flex', alignItems: 'center', gap: '4rem', listStyle: 'none' }}>
          <li>
            <NavLink
              to="/"
              className='nav-link'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className='nav-link'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div >
    </>
  );
};

export default Nav;
