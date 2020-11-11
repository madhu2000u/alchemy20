import {Component} from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";


 class register extends Component{

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

        <div className={styles.main} >
            <label >RE-ENTER PASWORD</label>
            <input type="password" className={styles.input} name="confirmPassword" placeholder="Confirm Password"/>
        </div>

        <button className={styles.card} type="submit" >
            REGISTER
        </button>

        <button className={styles.card} type="submit" >
            SIGN-UP WITH GOOGLE
        </button>
       
        </div>
        </div>
       
    }
}

export default register;