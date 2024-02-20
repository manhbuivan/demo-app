import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ValueContext } from '../App';
import Nav from './Nav';

const Header = () => {
  const value = useContext(ValueContext);
  return (
    <ParentHeader>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/">
          <img className="logo" src={value.logoUrl} alt="LOGO" />
        </NavLink>
      </div>
      <Nav />
    </ParentHeader>
  );
};

const ParentHeader = styled.header`
  padding: 0 10rem;
  height: 7rem;
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
