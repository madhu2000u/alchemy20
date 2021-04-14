import styles from './DashboardEventItem.module.css';
import {useRouter} from 'next/router';
import ReactMarkdown from 'react-markdown';
import UpiPayModal from './UpiPayModal';
import {useState} from 'react';

export default function DashboardEventItem(props) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		console.log(props);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = () => {
		router.push(props.event_type === 'event' ? '/events' : '/workshops');
	};
	return (
		<div className={props.active ? styles.card2 : styles.card}>
			{props.active ? <img src="https://i.imgur.com/WiDM4SP.png" className={styles.gtick}></img> : null}
			<center>
				<img className={styles.image} src={props.event_img} onClick={handleClick}></img>
			</center>
			<h4 className={styles.h4} onClick={handleClick}>
				<b>{props.event_name}</b>
			</h4>
			<ReactMarkdown>{props.event_description}</ReactMarkdown>
			{props.active ? (
				props.gform != '/notfound' ? (
					<a className={styles.gform_tag} href={props.gform} target="_blank">
						<div className={styles.work_button}>Register Here</div>
					</a>
				) : null
			) : null}

			{props.active ? (
				props.team_reg_gform != '/notfound' ? (
					<a className={styles.gform_tag} href={props.team_reg_gform} target="_blank">
						<div className={styles.work_button}>Enter Team details!</div>
					</a>
				) : null
			) : null}
			{props.active ? (
				props.event_type === 'workshop' ? (
					<div className={styles.work_button} onClick={() => handleOpen()}>
						Complete Payment
					</div>
				) : null
			) : null}
			<UpiPayModal
				open={open}
				onClose={handleClose}
				modal_name={props.event_name}
				modal_details={props.payment_details}
			/>
		</div>
	);
}
