import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import Gallery from "react-photo-gallery";
import styles from "../styles/GalleryPage.module.css";

export default function GalleryPage({ images }) {
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
  const images = [
    {
      src: "https://i.imgur.com/KUUd2EJ.jpg",
      alt: "image of director and chief guest",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/L4KtyrI.jpg",
      alt: "image of dr.psiva the legend",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/qyLVrgr.jpg",
      alt: "image of dtg prop",
      width: 780,
      height: 630,
    },
    {
      src: "https://i.imgur.com/05QiEYE.jpg",
      alt: "image of alchemy cake",
      width: 864,
      height: 924,
    },
    {
      src: "https://i.imgur.com/b0E67hA.jpg",
      alt: "image of some people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/OacgX3v.jpg",
      alt: "image of setting up the stage",
      width: 581,
      height: 602,
    },
    {
      src: "https://i.imgur.com/49aFukM.jpg",
      alt: "image of some people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/hAF3BnO.jpg",
      alt: "image of some people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/fZ1GmY9.jpg",
      alt: "image of audience",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/kPT9tVQ.jpg",
      alt: "image of some professors",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/D39obP9.jpg",
      alt: "image of guests",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/qZqFHlT.jpg",
      alt: "image of previous core members",
      width: 1500,
      height: 811,
    },
    {
      src: "https://i.imgur.com/ieoUWvU.jpg",
      alt: "image of audience view from back",
      width: 1333,
      height: 1000,
    },
    {
      src: "https://i.imgur.com/is9u9nF.jpg",
      alt: "image of some people",
      width: 1333,
      height: 1000,
    },
    {
      src: "https://i.imgur.com/Kip5Cl4.jpg",
      alt: "image of decorated stage",
      width: 2,
      height: 1,
    },
    {
      src: "https://i.imgur.com/4Sv5Uui.jpg",
      alt: "image of some people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/jrZg6nR.jpg",
      alt: "image of some people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/82dfcLm.jpg",
      alt: "image of some prize give away",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/GHyeBOl.jpg",
      alt: "image of 3 people",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/FbOCKVS.jpg",
      alt: "image of workshop prof's prize giveaway",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/ty7lv6Z.jpg",
      alt: "image of 2 core members",
      width: 3,
      height: 2,
    },
    {
      src: "https://i.imgur.com/w0l45Mk.jpg",
      alt: "image of ambience work",
      width: 581,
      height: 633,
    },
  ];
  return {
    props: {
      images,
    },
  };
}
