import React from "react";
import Link from "next/link";
import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import styles from "../styles/Login.module.css";
import fetch from "node-fetch";
import 'font-awesome/css/font-awesome.min.css';

export default function Register({ notifs }){

    return(
        <div className={styles.loginContainer}>
            <div>
                <Subpage notifs={notifs} showNot={true} />
            </div> 
        
        <div  style={{"marginTop": "9%", "marginLeft": "39%"}}>
        <img src={'https://i.imgur.com/HiNJNAv.png'} style={{"width": "13%", "marginLeft": "13.5%", "marginBottom": "1.5%"}} alt="User Icon" className="img-responsive"/>
        <div className={styles.main}>
            <input type="email" className={styles.input} name="email" placeholder="Email Id" />
        </div>

        <div className={styles.main}>
            <input type="password" className={styles.input} name="password" placeholder="Password" />
        </div>

        <div >
            <button className={styles.card}  style={{"marginTop": "4%", "marginLeft": "12%", "paddingLeft": "5%", "paddingRight": "5%"}}type="submit" >
                LOGIN
            </button>
        </div>

        <div className={styles.main} style={{"marginTop": "2.5%"}}>
            <Link href="#" passHref >
                <a className={styles.links} style={{"marginLeft": "11.5%"}}>Forgot Password?</a>
            </Link>
        </div> 

        <div >
            <Link href="/register" passHref >
                <a className={styles.links}  style={{"marginLeft": "16%"}}>Sign up?</a>
            </Link>
        </div> 
        </div>

        <div className="separator" className={styles.separator}>OR</div>
        
        <div className={styles.formContainer}>
        <div>
            <button className={styles.card2} style={{ "marginLeft": "46.2%", fontWeight:100}}type="submit" >
                Continue with  <i style={{paddingLeft:5}}className="fa fa-google" aria-hidden="true"></i>
            </button>
        </div>
     
        </div>
        </div>
       
    )  
    
}

Register.Layout = Common;

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
  