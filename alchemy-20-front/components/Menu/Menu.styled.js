import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #303030;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  img {
    height: 9em;
    width: 9em;
  }

  a {
    color: #ecc82c;
    margin-top: 1rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
  }
  h4 {
    color: white;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }

  p {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #ecc82c;
      cursor: pointer;
    }
  }
`;