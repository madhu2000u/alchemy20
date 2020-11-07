import {StyledNotification} from './Notification.styled';

export default function Notification(props) {
	return (
		<StyledNotification>
			<img className="notification_img" src="https://i.imgur.com/vOcSbox.png" alt="Notifications"></img>
			{props.children}
		</StyledNotification>
	);
}
