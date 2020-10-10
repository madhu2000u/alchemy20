import styles from "./ImageSlider.module.css";
import Slider from "react-slick";

export default function ImageSlider({ images }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    lazyLoad: true,
    speed: 1000,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {images.map((image) => (
          <div className={styles.image_container} key={image._id}>
            <img
              key={image._id}
              className={styles.image}
              src={image.image_url}
              alt={image.image_desc}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
