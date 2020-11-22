import styles from '../styles/Home.module.css';
import React from 'react';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import ImageSlider from '../components/Image Slider/ImageSlider';
import fetch from 'node-fetch';

export default function Home({ sliding_images, notifs }) {
  return (
    <div className={styles.home_container}>
      <div className={styles.nav}>
        <Subpage notifs={notifs} showNot={true} />
      </div>
      <div className={styles.main}>
        <ImageSlider images={sliding_images} />
        <div className={styles.grid}>
          <Link href="/coming-soon">
            <div className={styles.card} aria-label="Events">
              EVENTS
            </div>
          </Link>
          <Link href="/coming-soon" aria-label="Workshops">
            <div className={styles.card} aria-label="Workshops">
              WORKSHOPS
            </div>
          </Link>
          <Link href="/register" aria-label="Register">
            <div className={styles.card2}>REGISTER</div>
          </Link>
          <Link href="/login" aria-label="Login">
            <div className={styles.card2}>LOGIN</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );

}

Home.Layout = Common;

export async function getServerSideProps() {
	const img_res = await fetch(process.env.endpoint + '/gallery', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const not_res = await fetch(process.env.endpoint + '/allNotific', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});
	const images = await img_res.json();
	const sliding_images = await images.filter(function filterSliding(image) {
		if (image.is_sliding) return image;
	});
	const notifs = await not_res.json();
	return {
		props: {
			sliding_images,
			notifs,
		},
	};
}
