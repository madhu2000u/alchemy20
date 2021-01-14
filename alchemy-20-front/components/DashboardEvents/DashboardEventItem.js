import styles from './DashboardEventItem.module.css';

export default function DashboardEventItem(props) {
	// TODO: Add green-tick overlay for registered events
	return (
		<div className={props.active ? styles.card2 : styles.card}>
			<center>
				<img className={styles.image} src={props.event_img}></img>
			</center>
			<h4>
				<b>{props.event_name}</b>
			</h4>
			<p>{props.event_description}</p>
		</div>
	);
}
