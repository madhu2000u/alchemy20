import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/magazine.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Magazine() {
	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<div className={styles.heading}>
				<p>Magazines</p>
			</div>
			<div className={styles.card}>
				<card className={styles.card_items}>
					<Link href="https://pdfhost.io/v/K512X6kBv_mag_febpdf.pdf" className={styles.link}>
						<a className={styles.link}>MAGAZINE 2</a>
					</Link>
					<Link href="https://pdfhost.io/v/c2NmfZmZq_Magazinepdf.pdf" className={styles.link}>
						<a className={styles.link}>MAGAZINE 1</a>
					</Link>
				</card>
			</div>
		</main>
	);
}

Magazine.Layout = Common;
