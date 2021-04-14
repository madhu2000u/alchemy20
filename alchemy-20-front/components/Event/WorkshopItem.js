import {StyledEventItem} from './WorkshopItem.styled.js';
import {ApiService} from '../../api_service';
import {useRouter} from 'next/router';
import {useState} from 'react';
import DetailsModal from './DetailsModal';
import ReactMarkdown from 'react-markdown';

export default function WorkshopItem(props) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const loadRazorpay = async (e) => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';
			document.body.appendChild(script);
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
		});
	};

	const displayRazorpay = async (amount, name, order_id, prefill) => {
		const res = await loadRazorpay();

		if (!res) {
			// Handle Razorpay fail
			return;
		}

		let options = {
			key: process.env.razorpay_key_id,
			amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: name,
			description: 'Alchemy workshops - ' + name,
			image: 'https://i.imgur.com/yICWwO1.png',
			order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: function (response) {
				paymentHandler(response);
			},
			prefill: {
				name: prefill.name,
				email: prefill.email,
				contact: prefill.contact
			},
			theme: {
				color: '#ecc82c',
			},
		};

		const paymentObj = new window.Razorpay(options);
		paymentObj.open();
	};

	const paymentHandler = (response) => {
		alert(response.razorpay_payment_id);
		alert(response.razorpay_order_id);
		alert(response.razorpay_signature);
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

			// TODO(): Payements
			props.showToast('Registering...', 'info');

			const auth_token = localStorage.getItem('auth-token');

			const headers = {
				get_api: process.env.get_api_key,
				event_id: props.id,
			};

			const body = {
				Authorization: 'Bearer '.concat(auth_token),
			};

			try {
				// let isRegistrationSuccess = await ApiService.eventRegistration(headers);
				props.showToast('Enrolling you for this workshop, please wait for payment', 'info');

				let isWorkshopOrderIdSuccess = await ApiService.workshopOrderId(headers, body);
				console.log(JSON.stringify(isWorkshopOrderIdSuccess.data));

				displayRazorpay(
					isWorkshopOrderIdSuccess.data.amount,
					props.name,
					isWorkshopOrderIdSuccess.data.id,
					isWorkshopOrderIdSuccess.data.prefill
				);

				// Check status code
				// displayRazorpay(isWorkshopOrderIdSuccess.data)
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
			{props.reg_over && props.is_active ? (
				<h4 className="event_item_container_h4">&#9888; Registrations not open</h4>
			) : null}
			<h2 className="event_item_container_h2">{props.name}</h2>
			<ReactMarkdown className="event_item_container_p">{props.description}</ReactMarkdown>
			<h3 className="event_item_container_h3">{parseDateToReadable(props.date)}</h3>
			<p className="event_item_container_p">
				Event Cost : <a className="event_item_container_a">{props.cost === '0' ? 'free' : props.cost}</a>
			</p>
			<p className="event_item_container_p">
				Workshop Managers :{' '}
				{props.contacts.map((contact) => (
					<>
						<a style={{color: '#ecc82c'}} href={`tel:${contact}`}>
							{contact}
						</a>
						<br></br>
					</>
				))}
			</p>
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
			<DetailsModal open={open} onClose={handleClose} modal_name={props.name} modal_details={props.details} />
		</StyledEventItem>
	);
}
