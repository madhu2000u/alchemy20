import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/ComingSoon.module.css';

export default function ComingSoon() {
	return (
		<main className={styles.cs_main}>
			<Subpage showNot={false} />
			<div className={styles.image_div}>
				<img src="https://i.imgur.com/nPyZGGK.png" className={styles.coming_soon_img}></img>
			</div>
		</main>
	);
}

ComingSoon.Layout = Common;
