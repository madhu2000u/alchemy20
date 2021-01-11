import styles from './DashboardEvents.module.css';
import {ApiService} from '../../api_service';

export default function DashboardEvents(props) {
	// TODO: Add green-tick overlay for registered events

	return (
		<div className={styles.event_item_container}>
			<img src={props.img}></img>
			<p>{props.name}</p>
		</div>
	);
}
