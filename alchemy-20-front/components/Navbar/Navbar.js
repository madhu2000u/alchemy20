import Burger from './Burger/Burger'
import Menu from './Menu/Menu'
import { useOnClickOutside } from './hooks';
import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css'
import Head from 'next/head'

export default function Navbar({children}) {
    const [open, setOpen] = useState(false);
    const node = useRef(); 

    useOnClickOutside(node, () => setOpen(false));

    useEffect(() => {
        let effect = VANTA.TOPOLOGY('container')

        console.log(window.innerWidth)
        if(window.innerWidth > 700) {
          effect = VANTA.TOPOLOGY('#vanta_container')
          VANTA.TOPOLOGY({
            el: "#vanta_container",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xbda023,
            backgroundColor: 0x303030
          });
        }
        
    
        return function cleanUp() {
          if(window.innerWidth > 700) effect.destroy()
        }
      }, [])
    return (
      <div className={styles.container}>
        <div className={styles.vanta} id="vanta_container"></div>
          <Head>
            <title>Alchemy 2020</title>
            <meta charset="UTF-8"/>
            <meta name="description" content="Alchemy - The national symposium of the Chemical Engineering Department of NIT Tiruchirappalli"/>
            <meta name="keywords" content="Alchemy, Chemical Engineering, NIT Tiruchirappalli, NIT Trichy, NITT"/>
            <meta name="author" content="Shambu"/>
            <link rel="icon" href="/favicon.ico" />
            <script type="text/javascript" src="/static/p5.min.js"></script>
            <script type='text/javascript' src='/static/vanta.topology.min.js'></script>
          </Head>
          {children}
          <div ref={node}>
              <Burger open={open} setOpen={setOpen}/>
              <Menu open={open} setOpen={setOpen} />
          </div>
      </div>
    )
}
