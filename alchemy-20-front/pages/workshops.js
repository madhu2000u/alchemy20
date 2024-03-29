import React from 'react';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Events.module.css';
import WorkshopItem from '../components/Event/WorkshopItem';
import {useToasts} from 'react-toast-notifications';

export default function Workshops({notifs, workshops}) {
	const {addToast} = useToasts();

	const showToastInPage = (message, type) => {
		addToast(`${message}`, {
			appearance: type,
			autoDismiss: true,
		});
	};

	return (
		<main className={styles.main}>
			<Subpage notifs={notifs} showNot={true} />
			<div className={styles.heading}>
				<p>Workshops</p>
			</div>
			<div className={styles.events_container}>
				{workshops
					.slice(0)
					.reverse()
					.map((event) => (
						<WorkshopItem
							id={event._id}
							name={event.event_name}
							description={event.event_description}
							img={event.event_img}
							date={event.event_date}
							cost={event.event_cost}
							contacts={event.event_contacts}
							details={event.event_details}
							is_team_event={event.is_team_event}
							is_active={event.is_active}
							reg_over={event.reg_over}
							showToast={(msg, type) => showToastInPage(msg, type)}
						/>
					))}
			</div>
		</main>
	);
}

Workshops.Layout = Common;

export async function getServerSideProps() {
	const not_res = await fetch(process.env.endpoint + '/allNotific', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const event_res = await fetch(process.env.endpoint + '/allEvents', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const notifs = await not_res.json();
	const events_workshops = await event_res.json();

	let workshops = [];
	Array.from(events_workshops).forEach((element) => {
		if (element['event_type'] === 'workshop') workshops.push(element);
	});

	console.log(workshops);
	return {
		props: {
			notifs,
			workshops,
		},
	};
}
