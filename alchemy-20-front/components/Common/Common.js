import Burger from "../Navbar/Burger/Burger";
import Menu from "../Navbar/Menu/Menu";
import { useOnClickOutside } from "../Navbar/hooks";
import { useState, useRef } from "react";
import styles from "./Common.module.css";
import Head from "next/head";
import ParticlesContainer from "../Particles Container/ParticlesContainer";

export default function Common({ children }) {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.container}>
      <Head>
        <title>Alchemy 2020</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Alchemy - The national symposium of the Chemical Engineering Department of NIT Tiruchirappalli"
        />
        <meta
          name="keywords"
          content="Alchemy, Chemical Engineering, NIT Tiruchirappalli, NIT Trichy, NITT"
        />
        <meta name="author" content="Shambu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesContainer />

      {children}

      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
