import React, {useState} from 'react';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import style from '../styles/Dashboard.module.css';
import Footer from '../components/Footer/Footer';
import fetch from 'node-fetch';
import 'font-awesome/css/font-awesome.min.css';
import {Modal} from '../components/Modal/Modal';
export default function Dashboard({notifs}) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={style.dashboard_container}>
			<div className={style.nav}>
				<Subpage notifs={notifs} showNot={true} />
			</div>
			<div className={style.profile_container}>
				<img src="https://i.imgur.com/HiNJNAv.png"></img>
				<p>Hello, {'Loren Ipsum'}</p>
				<div onClick={handleClickOpen} className={style.get_id_div}>
					Get ID
				</div>
			</div>
			<div className={style.events_workshops_container}>
				<div className={style.eve_wor_backdrop}>REGISTERED EVENTS</div>
				<div className={style.events_workshops_list}>{}</div>
			</div>

			<div className={style.events_workshops_container}>
				<div className={style.eve_wor_backdrop}>REGISTERED WORKSHOPS</div>
				<div className={style.events_workshops_list}>{}</div>
			</div>
			<Footer />
			<Modal open={open} handleClose={handleClose} />
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
