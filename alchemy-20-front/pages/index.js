import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Burger from '../components/Burger/Burger'
import Menu from '../components/Menu/Menu'
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';

export default function Home() {

  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    const effect = VANTA.TOPOLOGY('#index_container')

    VANTA.TOPOLOGY({
      el: "#index_container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xecc82c,
      backgroundColor: 0x303030
    });

    return function cleanUp() {
      effect.destroy()
    }
  }, [])

  return (
    <div className={styles.container} id="index_container">
      <Head>
        <title>Alchemy 2020</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/static/p5.min.js"></script>
        <script type='text/javascript' src='/static/vanta.topology.min.js'></script>
      </Head>
      
      <main className={styles.main}>
        <img src='/alchemy_2018.png' alt="Alchemy Logo" className={styles.logo}></img>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" target='_blank'>
            <div className={styles.card}>
              Events
            </div>
          </a>
          <a href="https://nextjs.org/docs" target='_blank'>
            <div className={styles.card}>
              Workshops
            </div>
          </a>
          <a href="https://nextjs.org/docs" target='_blank'>
            <div className={styles.card}>
              Sponsors
            </div>
          </a><br></br><br></br>
          <a href="https://nextjs.org/docs" target='_blank'>
            <div className={styles.card2}>
              Get ID
            </div>
          </a>
          <a href="https://nextjs.org/docs" target='_blank'>
            <div className={styles.card2}>
              Register
            </div>
          </a>
        </div>
        <div className={styles.titledate}>
          <p>OCTOBER 18<sup>th</sup> - 20<sup>th</sup>, 2019</p>
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </main>
    </div>
  )
}
