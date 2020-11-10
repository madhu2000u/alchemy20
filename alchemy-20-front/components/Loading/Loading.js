import styles from './Loading.module.css';

export default function Loading() {
	return (
		<div className={styles.main}>
			<div className={styles.image_container}>
				<img src="https://i.imgur.com/yICWwO1.png" alt="alchemy logo loading screen" />
			</div>
			<p>Alchemy 21</p>
			<div class={styles.bar}>
				<i class={styles.sphere}></i>
			</div>
		</div>
	);
}
