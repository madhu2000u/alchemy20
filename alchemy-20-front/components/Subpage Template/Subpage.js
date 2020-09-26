import Link from "next/link";
import styles from "./Subpage.module.css";

export default function Subpage() {
  return (
    <div className={styles.subpage_container}>
      <Link href="/">
        <img
          className={styles.top_logo}
          src="/alchemy_text_logo.png"
          alt="Alchemy Logo with Text"
        ></img>
      </Link>
      <div className={styles.login_signup}>
          
      </div>
    </div>
  );
}
