import styled from 'styled-components';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import { useContext } from 'react';
import { ValueContext } from '../App';

const Header = () => {
  const value = useContext(ValueContext)
  console.log(value.color)
  return (
    <ParentHeader style={{ background: `${value.color}` }}>
      <NavLink to="/">
        <img className="logo" src={logo} alt="LOGO" />
      </NavLink>
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
