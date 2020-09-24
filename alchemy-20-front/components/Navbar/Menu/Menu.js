import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import Link from 'next/link'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <div className="menu_header">
        <img src='/alchemy_2018.png' alt="Alchemy Logo"></img>
        <a>ALCHEMY'20</a>
        <h4>October 18<sup>th</sup> - 20<sup>th</sup>, 2020</h4>
        <hr className="solid"></hr>
      </div>
      <div className="nav-links">
        <div className="active-div">
          <Link href="/">
              <p>About</p>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="coming-soon-div">
              <img src="/coming_soon_badge.svg" alt="Coming soon"></img>
              <p>Accommodation</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="coming-soon-div">
              <img src="/coming_soon_badge.svg" alt="Coming soon"></img>
              <p>Schedule</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="coming-soon-div">
              <img src="/coming_soon_badge.svg" alt="Coming soon"></img>
              <p>Sponsors</p>
            </div>
          </Link>
        </div>
        <div className="active-div">
          <Link href="/">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}
  