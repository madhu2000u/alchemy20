import styles from './DashboardEventItem.module.css';
import {useRouter} from 'next/router';

export default function DashboardEventItem(props) {
	// TODO: Add green-tick overlay for registered events
	const router = useRouter();
	const handleClick = () => {
		router.push('/events');
	};
	return (
		<div className={props.active ? styles.card2 : styles.card}>
			{props.active ? <img src="https://i.imgur.com/WiDM4SP.png" className={styles.gtick}></img> : null}
			<center>
				<img className={styles.image} src={props.event_img}></img>
			</center>
			<h4 className={styles.h4} onClick={handleClick}>
				<b>{props.event_name}</b>
			</h4>
			<p>{props.event_description}</p>
			{props.active ? (
				<a className={styles.gform_tag} href={props.team_reg_gform} target="_blank">
					<div className={styles.work_button}>Enter Team details!</div>
				</a>
			) : null}
			{props.active ? (
				<a className={styles.gform_tag} href={props.gform} target="_blank">
					<div className={styles.work_button}>Submit your work</div>
				</a>
			) : null}
		</div>
	);
}
