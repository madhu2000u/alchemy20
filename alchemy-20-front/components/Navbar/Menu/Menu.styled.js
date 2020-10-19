import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  border-right: solid #2fb996 5px;
  height: 100%;
  background: #2a2c2d;
  padding-left: 2rem;
  padding-right: 2rem;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  overflow: auto;

  .menu_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }

  .menu_header img {
    height: 9em;
    width: 9em;
  }

  .menu_header a {
    color: #2fb996;
    margin-top: 1rem;
    font-weight: bolder;
  }
  .menu_header p {
    color: white;
    font-weight: normal;
    margin: 0.5rem;
  }

  hr {
    width: 100%;
    border-top: 0.04rem solid #bbb;
    border-style: solid;
  }

  .nav-links {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .coming-soon-div {
    display: flex;
    flex-direction: column;
    justify-content: start; 
  }

  .active-div p{
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: white;
    cursor: pointer;
    transition: color 0.3s linear;
    transition: letter-spacing 0.1s linear;
    padding: 0;
    margin: 0;
  
    &:hover {
      color: #2fb996;
      letter-spacing: 0.2rem;
    // -webkit-transform: scale(1.2);
    // -moz-transform: scale(1.2);
    // -o-transform: scale(1.2);
    }
  }

  .coming-soon-div img {
    width: 5rem;
    height: 1rem;
  }

  .coming-soon-div p{
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: gray;
    font-size: 1.5rem;
    transition: letter-spacing 0.3s linear;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    border-left: none;

    .menu_header img {
      margin-top: 1.5rem;
    }

    .nav-links {
      margin-left: 1.5rem;
    }
  }`;
