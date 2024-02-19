import styled from 'styled-components';

const Header = () => {
  return <ParentHeader>12313</ParentHeader>;
};

const ParentHeader = styled.header`
  padding: 0 2rem;
  height: 5rem;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
    /* width: 4rem; */
  }
`;
export default Header;
