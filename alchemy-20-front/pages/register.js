import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Login.module.css';
import fetch from 'node-fetch';
import {ApiService} from '../api.service';
import {useToasts} from 'react-toast-notifications';
import 'font-awesome/css/font-awesome.min.css';

export default function Register({notifs}) {
	const router = useRouter();
	const {addToast} = useToasts();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const register = async (e) => {
		if (
			errors.email === null &&
			errors.password === null &&
			errors.password_confirmation === null &&
			errors.password_val === null
		) {
			addToast('Checking Credentials... Please wait!', {appearance: 'success', autoDismiss: true});
			e.preventDefault();
			let data = {
				email: email,
				password: password,
			};
			try {
				let isRegisterSuccess = await ApiService.register(data);
				if (isRegisterSuccess.status === 201) {
					addToast('Registration successful!', {appearance: 'success', autoDismiss: true});
					setTimeout(() => {
						router.push('/login');
					}, 1000);
				}
			} catch (error) {
				addToast(`Cannot register : ${error.response.data.message}`, {appearance: 'error', autoDismiss: true});
			}
		} else {
			addToast('Please enter email and passwords correctly!!', {appearance: 'error', autoDismiss: true});
		}
	};

	const OauthRegister = async (e) => {
		e.preventDefault();
		window.open('http://localhost:4700/api/google', '_blank');
	};

	const validatePassword = (value) => {
		if (value !== '') {
			errors.password = null;
		} else {
			errors.password = ['Empty password is not allowed'];
		}

		if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
			errors.password_val = null;
		} else {
			errors.password_val = [
				'Password needs to be minimum eight characters with at least one letter and one number',
			];
		}
		setPassword(value);
	};

	const validatePasswordConfirmation = (value) => {
		if (value === '') {
			errors.password_confirmation = ['Password confirmation cannot be empty'];
		} else if (value !== password) {
			errors.password_confirmation = ["Password confirmation doesn't match"];
		} else {
			errors.password_confirmation = null;
		}
		setConfirmPassword(value);
	};

	const validateEmail = (value) => {
		// Check out https://www.w3resource.com/javascript/form/email-validation.php
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
			errors.email = null;
		} else {
			errors.email = ['Enter a valid email'];
		}
		setEmail(value);
	};

	return (
		<div className={styles.loginContainer}>
			<div>
				<Subpage notifs={notifs} showNot={true} />
			</div>

			<div className={styles.formContainer}>
				<img className={styles.userIcon} src={'https://i.imgur.com/HiNJNAv.png'} alt="User Icon" />

				<div className={styles.main}>
					<ul className="errorMessages">
						{errors.email ? <li> {errors.email}</li> : null}
						{errors.password ? <li> {errors.password}</li> : null}
						{errors.password_val ? <li> {errors.password_val}</li> : null}
						{errors.password_confirmation ? <li> {errors.password_confirmation} </li> : null}
					</ul>
				</div>

				<div className={styles.main}>
					<input
						type="email"
						className={styles.input}
						onChange={(e) => validateEmail(e.target.value)}
						name="email"
						placeholder="Email Id"
					/>
				</div>

				<div className={styles.main}>
					<input
						type="password"
						className={styles.input}
						onChange={(e) => validatePassword(e.target.value)}
						name="password"
						placeholder="Password"
					/>
				</div>

				<div className={styles.main}>
					<input
						type="password"
						className={styles.input}
						onChange={(e) => validatePasswordConfirmation(e.target.value)}
						name="confirmPassword"
						placeholder="Confirm Password"
					/>
				</div>

				<div>
					<button className={styles.card} onClick={register} type="submit">
						REGISTER
					</button>
				</div>

				<div className="separator" className={styles.separator}>
					OR
				</div>

				<div>
					<button className={styles.card2} onClick={OauthRegister} style={{fontWeight: 100}} type="submit">
						Sign-up with <i style={{paddingLeft: 5}} className="fa fa-google" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

Register.Layout = Common;

export async function getServerSideProps() {
	const not_res = await fetch(process.env.endpoint + '/allNotific', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const notifs = await not_res.json();
	return {
		props: {
			notifs,
		},
	};
}
