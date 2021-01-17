import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import Gallery from 'react-photo-gallery';
import styles from '../styles/Gallery.module.css';
import {images} from '../data/GalleryImages';
export default function GalleryPage() {
	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<div className={styles.heading}>
				<p>Archives</p>
			</div>
			<div className={styles.gallery_container}>
				<Gallery photos={images} direction="column" />
			</div>
		</main>
	);
}

GalleryPage.Layout = Common;

export async function getStaticProps() {
	const pics = images;
	return {
		props: {
			pics,
		},
	};
}
