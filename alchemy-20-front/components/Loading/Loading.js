import styles from './Loading.module.css';

export default function Loading() {
	return (
		<div className={styles.main}>
			<div className={styles.image_container}>
				<img src="https://i.imgur.com/T9uOy33.png" alt="alchemy logo loading screen" />
			</div>
			<p>Alchemy 22</p>
			<div class={styles.bar}>
				<i class={styles.sphere}></i>
			</div>
		</div>
	);
}
