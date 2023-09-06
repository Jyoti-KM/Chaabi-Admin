import React from "react";
import styles from "./signup.module.scss";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import button from "../../components/Buttons/button/button";
import googleIcon from "./Asset/google_icon.svg";
import microsoftIcon from './Asset/Microsoft_icon.svg';
import ScreenImage from './Asset/screen.svg';
import CheckBox from "../../components/Buttons/CheckBox/CheckBox";



const SignUp = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupContainer__left}>
        <h2>WhatsApp Learning </h2>
      <h2>  Made Easy</h2>
       
        <img src={ScreenImage} alt="Screen Image" />
      </div>
      <div className={styles.signupContainer__right}>
        <div className={styles.formcontainer}>
          <h2>Start Your Trial</h2>
          <div className={styles.field}>
          <div className={styles.field_name}>
          <TextInput label="First Name" helperText="" />
          <TextInput label="Last Name" helperText="" />
          </div>
          <div className={styles.field_detail}>
          <TextInput label="Email" helperText="" />
          <NumberInput label="Phone Number" helperText="" />
          </div>
          <div className={styles.field_password}>
          <TextInput label="Set Your Password" helperText="" />
          <TextInput label="Confirm Your Password" helperText="" />
          </div>
           
           <div className={styles.field_terms}>

           
          <div className={styles.field_terms_1}>
          <CheckBox />
          <p>I have read and agree to the <span>
          Terms Of Service
          </span> </p>
          </div>
          <div className={styles.field_terms_2}>
          <CheckBox />
          <p>I want to receive communication about product, features and updates</p>
          </div>
          </div>
          </div>
          <PrimaryButton>Submit</PrimaryButton>
          <div>
          <p>Already a member? <span>Login </span></p>
          <div className={styles.hr}>
           
          <div className={styles.line} >
            <hr/>
            </div>
            <p>Or</p>
            <div className={styles.line}>
            <hr/>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
            <div className={styles.img}>
            <img src={googleIcon} alt="google icon" />
            </div>
            
            Sign up with Google
            </button>
            <button className={styles.button}>
            <div className={styles.img}>
            <img src={microsoftIcon} alt="Microsoft icon" />
            </div>
            Sign up with Microsoft</button>
          </div>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default SignUp;
