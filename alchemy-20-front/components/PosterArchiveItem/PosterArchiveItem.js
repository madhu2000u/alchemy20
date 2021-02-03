import Image from 'next/image';
import DetailsModal from '../Event/DetailsModal';
import {useState} from 'react';
import styles from './PosterArchiveItem.module.css';
export default function PosterArchiveItem(props) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className={styles.img__wrap} onClick={() => handleOpen()}>
				<Image width={300} height={300} className={styles.img__img} src={props.image} />
				<div className={styles.img__description_layer}>
					<p className={styles.img__description}>{props.alt}</p>
				</div>
			</div>
			<DetailsModal open={open} onClose={handleClose} modal_name={props.alt} modal_details={props.report} />
		</>
	);
}
