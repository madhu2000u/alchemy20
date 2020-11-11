import {Component} from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";


 class login extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return  <div className={styles.loginContainer}>
            
        <Link href="/" passHref>
                <img
                className={styles.top_logo}
                src="https://i.imgur.com/xDQ25iF.png"
                alt="Alchemy Logo with Text"
                ></img>
        </Link>
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
       
    }
}

export default login;