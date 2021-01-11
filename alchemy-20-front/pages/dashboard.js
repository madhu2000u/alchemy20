import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Dashboard.module.css';
import Footer from '../components/Footer/Footer';
import fetch from 'node-fetch';
import {ApiService} from '../api_service';
import {useToasts} from 'react-toast-notifications';
import 'font-awesome/css/font-awesome.min.css';
import DashboardEvents from '../components/DashboardEvents/DashboardEvents';

export default function Dashboard({notifs, api_endpoint}) {
	const router = useRouter();
	const {addToast} = useToasts();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	return (
		<div className={styles.dashboard_container}>
			<div className={styles.nav}>
				<Subpage notifs={notifs} showNot={true} />
			</div>
			<div className={styles.profile_container}>
				<img src="https://i.imgur.com/HiNJNAv.png"></img>
				<p>Hello, {'Loren Ipsum'}</p>
				<div className={styles.get_id_div}>Get ID</div>
			</div>
			<div className={styles.events_workshops_container}>
				<div className={styles.eve_wor_backdrop}>REGISTERED EVENTS</div>
				<div className={styles.events_workshops_list}>{}</div>
			</div>

			<div className={styles.events_workshops_container}>
				<div className={styles.eve_wor_backdrop}>REGISTERED WORKSHOPS</div>
				<div className={styles.events_workshops_list}>{}</div>
			</div>
			<Footer />
		</div>
	);
}

Dashboard.Layout = Common;

export async function getServerSideProps() {
	const not_res = await fetch(process.env.endpoint + '/allNotific', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const notifs = await not_res.json();
	const api_endpoint = process.env.endpoint;

	return {
		props: {
			notifs,
			api_endpoint,
		},
	};
}
