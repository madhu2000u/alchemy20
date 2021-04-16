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
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/workshops">
						<p>Workshops</p>
					</Link>
				</div>
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/sponsors">
						<p>Sponsors</p>
					</Link>
				</div>
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/posters_archive">
						<p>Industrial Disasters</p>
					</Link>
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
				<div className="active-div" onClick={() => setOpen(!open)}>
					<Link href="/magazines">
						<p>Magazines</p>
					</Link>
				</div>
			</div>
		</StyledMenu>
	);
}

Menu.propTypes = {
	open: bool.isRequired,
};
