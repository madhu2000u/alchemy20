import {StyledMenu} from './Menu.styled';
import {bool} from 'prop-types';
import Link from 'next/link';

export default function Menu({open, setOpen}) {
	return (
		<StyledMenu open={open}>
			<div className="menu_header">
				<img src="https://i.imgur.com/yICWwO1.png" alt="Alchemy Logo"></img>
				<a href="/">ALCHEMY'21</a>
				{/* <p>
          October 18<sup>th</sup> - 20<sup>th</sup>, 2020
        </p> */}
				<hr className="solid"></hr>
			</div>
			<div className="nav-links">
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/about">
						<p>About</p>
					</Link>
				</div>
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/events">
						<p>Events</p>
					</Link>
				</div>
				<div>
					<div className="coming-soon-div">
						<img src="/coming_soon_badge.svg" alt="Coming soon"></img>
						<p>Workshops</p>
					</div>
				</div>
				<div>
					<div className="coming-soon-div">
						<img src="/coming_soon_badge.svg" alt="Coming soon"></img>
						<p>Sponsors</p>
					</div>
				</div>
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/team">
						<p>Team</p>
					</Link>
				</div>
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/gallery">
						<p>Gallery</p>
					</Link>
				</div>
			</div>
		</StyledMenu>
	);
}

Menu.propTypes = {
	open: bool.isRequired,
};
