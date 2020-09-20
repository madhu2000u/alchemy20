import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import Link from 'next/link'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <img src='/alchemy_2018.png' alt="Alchemy Logo"></img>
      <a>ALCHEMY'20</a>
      <h4>OCTOBER 18<sup>th</sup> - 20<sup>th</sup>, 2020</h4>
      <Link href="/">
        <p>About</p>
      </Link>
      <Link href="/">
        <p>Accomodation</p>
        </Link>
      <Link href="/">
        <p>Schedule</p>
      </Link>
      <Link href="/">
        <p>Sponsors</p>
      </Link>
      <Link href="/">
        <p>Contact</p>
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
  }
  