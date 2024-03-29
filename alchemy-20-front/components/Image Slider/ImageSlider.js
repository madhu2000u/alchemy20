import styles from './ImageSlider.module.css';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

export default function ImageSlider({images}) {
	const responsive = {
		desktop: {
			breakpoint: {
				max: 3000,
				min: 1024,
			},
			items: 3,
			partialVisibilityGutter: 40,
		},
		mobile: {
			breakpoint: {
				max: 730,
				min: 0,
			},
			items: 1,
			partialVisibilityGutter: 30,
		},
		tablet: {
			breakpoint: {
				max: 1345,
				min: 730,
			},
			items: 2,
			partialVisibilityGutter: 30,
		},
	};

	return (
		<Carousel
			arrows={false}
			autoPlay={true}
			autoPlaySpeed={2500}
			transitionDuration={2000}
			focusOnSelect={false}
			infinite={true}
			itemClass={styles.img_container}
			keyBoardControl={false}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			ssr={true}
			responsive={responsive}
			showDots={false}
			slidesToSlide={1}
			swipeable={false}
			minimumTouchDrag={0}
			draggable={false}
			containerClass={styles.slider}>
			{images.map((image) => (
				<div key={image._id}>
					<Image key={image._id} src={image.image_url} alt={image.image_desc} width={400} height={220} />
				</div>
			))}
		</Carousel>
	);
}
