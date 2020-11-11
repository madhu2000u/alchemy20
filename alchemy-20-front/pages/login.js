import React from "react";
import Link from "next/link";
import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import styles from "../styles/Login.module.css";
import fetch from "node-fetch";


export default function Login({ notifs }){
  return(
    <div className={styles.loginContainer}>
        <div className={styles.nav}>
            <Subpage notifs={notifs} showNot={true} />
        </div> 
        
    <div className={styles.formContainer}>
        
    <div className={styles.main}>
        <label >EMAIL</label>
        <input type="email" className={styles.input} name="email" placeholder="Enter your email" />
    </div>

    <div className={styles.main}>
        <label >PASWORD</label>
        <input type="password" className={styles.input} name="password" placeholder="Enter Password" />
    </div>

    <button className={styles.card} type="submit"  >
        LOGIN
    </button>

    <button className={styles.card} type="submit"  >
        CONTINUE WITH GOOGLE
    </button>

    <div className={styles.main}>
        <Link href="/register" passHref >
            <a className={styles.links}>Register</a>
        </Link>
    </div>
    
    <div className={styles.main}>
        <Link href="#" passHref >
            <a className={styles.links}>Forgot Password? Click here.</a>
        </Link>
        </div>
    </div>
    </div>
   )            
}

Login.Layout=Common;

export async function getServerSideProps() {
  
    const not_res = await fetch(process.env.endpoint + "/allNotific", {
      method: "GET",
      headers: {
        get_api: process.env.get_api_key,
      },
    });
   
    const notifs = await not_res.json();
    return {
      props: {
        notifs,
      },
    };
  }
  