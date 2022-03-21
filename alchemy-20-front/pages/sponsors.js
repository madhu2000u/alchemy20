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
			<div className={styles.card}>
				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> Title Sponsor</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/lOT3Jq9.jpg" alt="Title Sponsor" width={500} height={900}/>
					<Link href="https://conservesolution.com">
						<a className={styles.link}>https://conservesolution.com</a>
					</Link>
				</card>
				</div>
			{/* <div className={styles.card}>
				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> Media Sponsor</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/nWjywHo.jpg" alt="Media Sponsor" width={250} height={220} />
					<Link href="https://www.noticebard.com">
						<a className={styles.link}>Noticebard.com</a>
					</Link>
				</card>
				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> General Sponsor</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/1OXn0I2.jpg" alt="General Sponsor" width={250} height={220} />
					<Link href="https://Badelog.in" className={styles.link}>
						<a className={styles.link}>Badelog.in</a>
					</Link>
				</card>

				<card className={styles.card_items}>
					<div className={styles.heading2}>
						<p> Platform Partner</p>
					</div>
					<br />
					<Image src="https://i.imgur.com/QfmsiVP.jpg" alt="General Sponsor" width={250} height={220} />
					<Link href="https://dare2compete.com/" className={styles.link}>
						<a className={styles.link}>dare2compete.com</a>
					</Link>
				</card>
			</div> */}
		</main>
	);
}

SponsersPage.Layout = Common;
