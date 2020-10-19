import Link from "next/link";
import styles from "./Subpage.module.css";
import Notification from "./Notification/Notification";
import DropdownMenu from "./Notification/DropdownMenu";
import { useState } from "react";

export default function Subpage({ notifs, showNot }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.subpage_container}>
      <Link href="/" passHref>
        <img
          className={styles.top_logo}
          src="https://i.imgur.com/4Cctteg.png"
          alt="Alchemy Logo with Text"
        ></img>
      </Link>
      {showNot && (
        <a onClick={() => setOpen(!isOpen)}>
          <Notification isOpen={isOpen}>
            <DropdownMenu isOpen={isOpen} notifs={notifs} />
          </Notification>
        </a>
      )}
    </div>
  );
}
