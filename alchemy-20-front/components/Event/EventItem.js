import styles from './EventItem.module.css';
import {ApiService} from '../../api_service';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react'

export default function EventItem(props) {
	const router = useRouter();
	const [isLoggedin, setIsLoggedin] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('auth-token') || !localStorage.getItem('refresh-token')){
			setIsLoggedin(false)
		} else {
			setIsLoggedin(true)
		}
	}, []);

	const registerEvent = async (e) => {
		if(isLoggedin) {
			props.showToast('Registering...', 'success');
		// I am not sure if this is the right way to access localstorage from child components
		const auth_token = localStorage.getItem('auth-token');
		if (auth_token === 'null') {
			props.showToast('Please login and try again', 'error');

			// router push to login page
			return;
		} else {
			const headers = {
				event_id: props.id,
				authorization: 'Bearer '.concat(auth_token),
			};
			try {
				let isRegistrationSuccess = await ApiService.eventRegistration(headers);
				props.showToast(`Registration successfull : ${isRegistrationSuccess.data.message}`, 'success');
				setTimeout(() => {
					router.push('/dashboard');
				}, 1000);
			} catch (error) {
				props.showToast(`Cannot Register : ${error.response.data.message}`, 'error');
			}
		}
		} else {
			props.showToast("You need to log in first. Redirecting...", "error")
			setTimeout(() => {
				router.push('/login');
			}, 2000);
		}
		
	};

	return (
		<div className={styles.event_item_container}>
			<img src={props.img}></img>
			<h2>{props.name}</h2>
			<p>{props.description}</p>
			<h3>{props.date}</h3>
			<p>Event Cost : {props.cost === '0' ? 'free' : props.cost}</p>
			<div className={styles.reg_button} onClick={() => registerEvent()}>
				Register
			</div>
		</div>
	);
}
