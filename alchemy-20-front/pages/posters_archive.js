import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/Posters.module.css';
import PosterArchiveItem from '../components/PosterArchiveItem/PosterArchiveItem';

export default function PostersArchivePage({posters}) {
	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<div className={styles.heading}>
				<p>Archives</p>
			</div>
			<div className={styles.archives_container}>
				{posters.map((poster) => (
					<PosterArchiveItem key={poster._id} image={poster.image} alt={poster.alt} report={poster.report} />
				))}
			</div>
		</main>
	);
}

PostersArchivePage.Layout = Common;

export async function getServerSideProps() {
	const posters_res = await fetch(process.env.endpoint + '/posters', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});
	const posters = await posters_res.json();
	return {
		props: {
			posters,
		},
	};
}
