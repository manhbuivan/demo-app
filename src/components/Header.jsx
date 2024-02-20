import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ValueContext } from '../App';
import Nav from './Nav';

const Header = () => {
  const value = useContext(ValueContext);
  console.log(value);
  return (
    <ParentHeader style={{ background: `${value.color}` }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/">
          <img className="logo" src={value.logoUrl} alt="LOGO" />
        </NavLink>
        <span
          style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '30px' }}
        >
          {value.title}
        </span>
      </div>
      <Nav />
    </ParentHeader>
  );
};

const ParentHeader = styled.header`
  padding: 0 2rem;
  height: 5rem;
  background-color: #f6f8fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    /* width: 4rem; */
  }
`;
export default Header;
