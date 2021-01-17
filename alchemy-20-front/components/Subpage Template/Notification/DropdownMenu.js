import ReactMarkdown from 'react-markdown';
import {StyledDropdownMenu} from './DropdownMenu.styled';

export default function DropdownMenu({isOpen, notifs}) {
	function DropdownItem(props) {
		return (
			<div>
				<p className="notification_head">{props.heading}</p>
				<ReactMarkdown className="notification_desc">{props.text}</ReactMarkdown>
				<p className="notification_date">{props.date}</p>
				<hr className="notif_divider"></hr>
			</div>
		);
	}

	return (
		<StyledDropdownMenu isOpen={isOpen}>
			{notifs.map((notif) => (
				<DropdownItem
					key={notif._id}
					heading={notif.notif_heading}
					text={notif.notif_desc}
					date={notif.notif_posted_on}
				/>
			))}
		</StyledDropdownMenu>
	);
}
