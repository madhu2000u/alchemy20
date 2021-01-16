import Link from 'next/link';
import {AtomSvg} from '../components/AtomSvg/AtomSvg';
import styles from '../styles/FourOhFour.module.css';

export default function FourOhFour() {
	return (
		<div className={styles.mainbox}>
			<style global jsx>{`
				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div,
				div#__next > div > div {
					height: 100%;
				}
			`}</style>
			<div className={styles.f4f}>
				<div className={styles.err}>4</div>
				<AtomSvg size={140} />
				<div className={styles.err2}>4</div>
			</div>
			<div className={styles.msg}>
				Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
				<p>
					Let's go{' '}
					<Link href="/">
						<a>home</a>
					</Link>{' '}
					and try from there.
				</p>
			</div>
		</div>
	);
}
