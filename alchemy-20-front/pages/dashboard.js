import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import style from '../styles/Dashboard.module.css';
import Footer from '../components/Footer/Footer';
import fetch from 'node-fetch';
import {ApiService} from '../api_service';
import 'font-awesome/css/font-awesome.min.css';
import {Modal} from '../components/Modal/Modal';
import {StylesProvider} from '@material-ui/core';
import DashboardEventItem from '../components/DashboardEvents/DashboardEventItem';

export default function Dashboard({notifs}) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [dashboardData, setDashboardData] = useState([]);
	const [render, setRender] = useState(false);
	const [hideFillDetailBtn, setFillDetailBtn] = useState(false);

	useEffect(() => {
		const refreshtoken = localStorage.getItem('refresh-token');
		if (refreshtoken) {
			setRender(true);
		} else {
			router.push('/login');
		}
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
				}
			};
			Refresh();
		}
		const getDashboard = async () => {
			try {
				const headers = {
					Authorization: 'Bearer '.concat(localStorage.getItem('auth-token')),
				};
				let DashboardData = await ApiService.Dashboard(headers);
				if (DashboardData.status === 200) {
					setDashboardData(DashboardData.data.data);
					setFillDetailBtn(true);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getDashboard();
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleLogout = () => {
		localStorage.removeItem('auth-token');
		localStorage.removeItem('expirationdate');
		localStorage.removeItem('refresh-token');
		router.push('/');
	};

	return render ? (
		<div className={style.dashboard_container}>
			<div className={style.nav}>
				<Subpage notifs={notifs} showNot={true} />
			</div>
			<div className={style.profile_container}>
				<img src="https://i.imgur.com/HiNJNAv.png"></img>
				<p>Hello {dashboardData.name ?? ''}</p>
				<div onClick={handleClickOpen} className={style.get_id_div} hidden={hideFillDetailBtn}>
					Fill Details
				</div>
				<div onClick={handleLogout} className={style.get_id_div}>
					Log out
				</div>
			</div>
			<div className={style.events_workshops_container}>
				{dashboardData.length != 0 ? <div className={style.eve_wor_backdrop}> EVENTS </div> : null}
				<div className={style.events_workshops_list}>
					{dashboardData.length != 0
						? dashboardData.event.map((elem) => (
								<DashboardEventItem
									active={elem.active}
									event_img={elem.event_img}
									event_name={elem.event_name}
									event_description={elem.event_description}
								/>
						  ))
						: null}
				</div>
			</div>

			<div className={style.events_workshops_container}>
				{dashboardData.length != 0 ? <div className={style.eve_wor_backdrop}> WORKSHOPS </div> : null}
				<div className={style.events_workshops_list}>
					{dashboardData.length != 0
						? dashboardData.workshop.map((elem) => (
								<DashboardEventItem
									active={elem.active}
									event_img={elem.event_img}
									event_name={elem.event_name}
									event_description={elem.event_description}
								/>
						  ))
						: null}
				</div>
			</div>
			<Footer />
			<Modal open={open} handleClose={handleClose} />
		</div>
	) : null;
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
