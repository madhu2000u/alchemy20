import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import Link from 'next/link'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
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
  