import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage"
import styles from "../styles/ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <main className={styles.cs_main}>
      <Subpage />
      <div className={styles.image_div}>
        <img src="/coming_soon.png" className={styles.coming_soon_img}></img>
      </div>
    </main>
  );
}

ComingSoon.Layout = Common;
