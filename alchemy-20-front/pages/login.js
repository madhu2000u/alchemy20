import React from 'react';
import Link from 'next/link';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Login.module.css';
import fetch from 'node-fetch';
import 'font-awesome/css/font-awesome.min.css';

export default function Register({notifs}) {
	return (
		<div className={styles.loginContainer}>
			<div>
				<Subpage notifs={notifs} showNot={true} />
			</div>

			<div className={styles.formContainer}>
				<img className={styles.userIcon} src={'https://i.imgur.com/HiNJNAv.png'} alt="User Icon" />
				<div className={styles.main}>
					<input type="email" className={styles.input} name="email" placeholder="Email Id" />
				</div>

				<div className={styles.main}>
					<input type="password" className={styles.input} name="password" placeholder="Password" />
				</div>

				<div>
					<button className={styles.card} type="submit">
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
					<button className={styles.card3} type="submit">
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
