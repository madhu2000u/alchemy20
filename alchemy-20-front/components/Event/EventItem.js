import {StyledEventItem} from './EventItem.styled.js';
import {ApiService} from '../../api_service';
import {useRouter} from 'next/router';
import {useState} from 'react';
import EventPage from './EventPage';
import AlertDialog from '../AlertDialog/AlertDialog';
import ReactMarkdown from 'react-markdown';

export default function EventItem(props) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const [openAlert, setAlertOpen] = React.useState(false);

	const handleAlertOpen = () => {
		setAlertOpen(true);
	};

	const handleAlertClose = () => {
		setAlertOpen(false);
		setTimeout(() => {
			router.push('/dashboard');
		}, 2000);
	};

	const registerEvent = async (e) => {
		const refreshtoken = localStorage.getItem('refresh-token');
		if (refreshtoken) {
			var currentDate = new Date();
			var expDate = new Date(localStorage.getItem('expirationdate'));

			if (currentDate > expDate) {
				const Refresh = async () => {
					try {
						const headers = {
							refreshtoken: refreshtoken,
						};
						let Refreshresult = await ApiService.refreshToken(headers);
						if ((Refreshresult.status = 200 && Refreshresult.data.success)) {
							var tokenexpiration = new Date();
							tokenexpiration.setSeconds(new Date().getSeconds() + parseInt(300));
							localStorage.setItem('auth-token', Refreshresult.data.accessToken);
							localStorage.setItem('expirationdate', tokenexpiration);
						}
					} catch (error) {
						console.log(error);
						props.showToast('Try loggin in again. Redirecting...', 'error');
						setTimeout(() => {
							router.push('/login');
						}, 2000);
					}
				};
				Refresh();
			}

			props.showToast('Registering...', 'info');

			const auth_token = localStorage.getItem('auth-token');

			const headers = {
				event_id: props.id,
				Authorization: 'Bearer '.concat(auth_token),
			};
			try {
				let isRegistrationSuccess = await ApiService.eventRegistration(headers);
				props.showToast(`Registration successfull : ${isRegistrationSuccess.data.message}`, 'success');
				if (props.is_team_event) handleAlertOpen();
				else {
					setTimeout(() => {
						router.push('/dashboard');
					}, 2000);
				}
			} catch (error) {
				props.showToast(`Cannot Register : ${error.response.data.message}`, 'error');
				if (error.response.data.message === 'Fill details before event/workshop registration') {
					setTimeout(() => {
						router.push('/dashboard');
					}, 2000);
				}
			}
		} else {
			props.showToast('You need to log in first. Redirecting...', 'error');
			setTimeout(() => {
				router.push('/login');
			}, 2000);
		}
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const parseDateToReadable = (dateString) => {
		const dateParts = dateString.split('-');
		const dateObject = new Date(dateParts[2], dateParts[1] - 1, +dateParts[0]);
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return dateObject.getDate() + ' ' + monthNames[dateObject.getMonth()] + ', ' + dateObject.getFullYear();
	};

	return (
		<StyledEventItem is_active={props.is_active}>
			<img src={props.img} className="event_item_container_img"></img>
			{props.is_active ? null : <h4 className="event_item_container_h4">&#9888; This event is over</h4>}
			<h2 className="event_item_container_h2">{props.name}</h2>
			<ReactMarkdown className="event_item_container_p">{props.description}</ReactMarkdown>
			<h3 className="event_item_container_h3">{parseDateToReadable(props.date)}</h3>
			<p className="event_item_container_p">
				Event Cost : <a className="event_item_container_a">{props.cost === '0' ? 'free' : props.cost}</a>
			</p>
			<p className="event_item_container_p">Event Managers : {props.contacts}</p>
			<div className="btn_container">
				{!props.reg_over ? (
					<div className="reg_button" onClick={() => registerEvent()}>
						Register
					</div>
				) : null}
				<div className="reg_button" onClick={() => handleOpen()}>
					Learn more
				</div>
			</div>
			{props.is_team_event ? (
				<AlertDialog
					open={openAlert}
					onClose={handleAlertClose}
					heading="This is a team event"
					body="You can form teams to participate in this event. You will be redirected to dashboard, please fill in the details of your team members by clicking the **Enter Team details!** button under your registered event"
				/>
			) : null}
			<EventPage open={open} onClose={handleClose} event_name={props.name} event_details={props.details} />
		</StyledEventItem>
	);
}
