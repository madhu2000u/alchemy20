import React, {useState} from 'react';
import Link from 'next/link';
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
	const [errors, setErrors] = useState({});

	const login = async (e) => {
		if (errors.email === null && errors.password === null) {
			addToast('Checking Credentials... Please wait!', {appearance: 'success', autoDismiss: true});
			e.preventDefault();
			let data = {
				email: email,
				password: password,
			};
			try {
				let isLoginSuccess = await ApiService.login(data);
				if (isLoginSuccess.status === 200) {
					addToast('Login successful!', {appearance: 'success', autoDismiss: true});
					setTimeout(() => {
						router.push('/dashboard');
					}, 1000);
				}
			} catch (error) {
				addToast(`Cannot login : ${error.response.data.message}`, {appearance: 'error', autoDismiss: true});
			}
		} else {
			addToast('Please enter email and passwords correctly!!', {appearance: 'error', autoDismiss: true});
		}
	};

	const OauthLogin = async (e) => {
		e.preventDefault();
		window.open('http://localhost:4700/api/google');
	};

	const validatePassword = (value) => {
		if (value !== '') {
			errors.password = null;
		} else {
			errors.password = ['Empty password is not allowed'];
		}
		setPassword(value);
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
					</ul>
				</div>
				<div className={styles.main}>
					<input
						type="email"
						onChange={(e) => validateEmail(e.target.value)}
						className={styles.input}
						name="email"
						placeholder="Email Id"
					/>
				</div>

				<div className={styles.main}>
					<input
						type="password"
						onChange={(e) => validatePassword(e.target.value)}
						className={styles.input}
						name="password"
						placeholder="Password"
					/>
				</div>

				<div>
					<button onClick={login} className={styles.card} type="submit">
						LOGIN
					</button>
				</div>

				<div className={styles.main}>
					<Link href="#" passHref>
						<a className={styles.links}>Forgot Password?</a>
					</Link>
				</div>

				<div>
					<Link href="/register" passHref>
						<a className={styles.links2}>Sign up?</a>
					</Link>
				</div>
				<div className="separator" className={styles.separator}>
					OR
				</div>

				<div>
					<button className={styles.card3} onClick={OauthLogin} type="submit">
						Continue with <i style={{paddingLeft: 5}} className="fa fa-google" aria-hidden="true"></i>
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
