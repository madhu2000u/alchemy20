import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Sponsors.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SponsersPage() {
	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<div className={styles.heading}>
				<p>Our Sponsors</p>
			</div>
			
			{ <div className={styles.card}>
				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> Title Sponsor</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/lOT3Jq9.jpg" alt="Media Sponsor" width={250} height={350} />
					<Link href="https://conservesolution.com">
						<a className={styles.link}>https://conservesolution.com</a>
					</Link>
				</card>
				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> General Sponsor</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/vUjWbF5.jpg" alt="General Sponsor" width={250} height={350} />
					<Link href="http://www.avircu.com/" className={styles.link}>
						<a className={styles.link}>AVI</a>
					</Link>
				</card>

				
			</div> }
		</main>
	);
}

SponsersPage.Layout = Common;
