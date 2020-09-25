import Navbar from "../components/Navbar/Navbar";
import cs_styles from "../styles/ComingSoon.module.css";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className={cs_styles.cs_main}>
      <Link href="/">
        <img
          className={cs_styles.top_logo}
          src="/alchemy_text_logo.png"
          alt="Alchemy Logo with Text"
        ></img>
      </Link>
      <div className={cs_styles.image_div}>
        <img src="/coming_soon.png" className={cs_styles.coming_soon_img}></img>
      </div>
    </main>
  );
}

ComingSoon.Layout = Navbar;
