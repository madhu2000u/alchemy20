import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import Link from "next/link";

export default function Menu({ open, setOpen }) {

  return (
    <StyledMenu open={open}>
      <div className="menu_header">
        <img src="https://i.ibb.co/g9gLDkH/alchemy-2018.png" alt="Alchemy Logo"></img>
        <a>ALCHEMY'20</a>
        <p>
          October 18<sup>th</sup> - 20<sup>th</sup>, 2020
        </p>
        <hr className="solid"></hr>
      </div>
      <div className="nav-links">
        <div className="active-div" onClick={() => setOpen(!open)}>
          <Link href="/about">
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
        <div className="active-div" onClick={() => setOpen(!open)}>
          <Link href="/coming-soon">
            <p>Team</p>
          </Link>
        </div>
        <div className="active-div" onClick={() => setOpen(!open)}>
          <Link href="/coming-soon">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};
