import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Common from "../components/Common/Common";
import IdPopup from "../components/ID Popup/IdPopup";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const appear = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -3000 },
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className={styles.main}>
      <animated.div style={appear}>
        <img
          src="https://i.ibb.co/g9gLDkH/alchemy-2018.png"
          alt="Alchemy Logo"
          className={styles.logo}
        ></img>
      </animated.div>
      <div className={styles.grid}>
        <Link href="/coming-soon">
          <animated.div
            style={appear}
            className={styles.card}
            aria-label="Events"
          >
            Events
          </animated.div>
        </Link>
        <Link href="/coming-soon" aria-label="Workshops">
          <animated.div
            style={appear}
            className={styles.card}
            aria-label="Workshops"
          >
            Workshops
          </animated.div>
        </Link>
        <Link href="/coming-soon" aria-label="Sponsors">
          <animated.div style={appear} className={styles.card}>
            Sponsors
          </animated.div>
        </Link>
        <animated.div
          style={appear}
          onClick={togglePopup}
          className={styles.card2}
          aria-label="Get Alchemy ID"
        >
          Get ID
        </animated.div>
        <Link href="/coming-soon" aria-label="Register">
          <animated.div style={appear} className={styles.card2}>
            Register
          </animated.div>
        </Link>
      </div>
      <animated.div style={appear} className={styles.titledate}>
        <p>
          October 18<sup>th</sup> - 20<sup>th</sup>, 2020
        </p>
      </animated.div>
      {isOpen && <IdPopup handleClose={togglePopup}></IdPopup>}
    </main>
  );
}

Home.Layout = Common;
