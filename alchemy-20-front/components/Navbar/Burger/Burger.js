import React from "react";
import { StyledBurger } from "./Burger.styled";
import { bool, func } from "prop-types";
import { Spring } from "react-spring/renderprops.cjs";

export default function Burger({ open, setOpen }) {
  return (
    <Spring
      from={{
        opacity: 0,
        marginTop: -1000,
      }}
      to={{
        opacity: 1,
        marginTop: 0,
      }}
    >
      {(props) => (
        <StyledBurger style={props} open={open} onClick={() => setOpen(!open)}>
          <div />
          <div aria-label="Side menu" />
          <div />
        </StyledBurger>
      )}
    </Spring>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
