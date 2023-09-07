import React from "react";
import styles from "./Login.module.scss";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import button from "../../components/Buttons/button/button";
import googleIcon from "./Asset/google_icon.svg";
import microsoftIcon from './Asset/Microsoft_icon.svg';
import ScreenImage from './Asset/screen.svg';
import companyLogo from './Asset/Zippe.svg';
import ButtonWithLeftIcon from "../../components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginContainer__left}>
       <img src={companyLogo} alt="Company logo" />
       
        <div className={styles.Image}></div>
      </div>
      <div className={styles.LoginContainer__right}>
        <div className={styles.formcontainer}>
          <h2>Login to Zippee</h2>
          <div className={styles.field}>
         
          
          
          <TextInput label="Email" helperText="" placeholder="email@chaabi.co"/>
          
          
          <TextInput label="Password" helperText="" type="password" placeholder="Enter your password" />
         
        
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
          <ButtonWithLeftIcon src={googleIcon} text="Sign up with Google" />
              <ButtonWithLeftIcon src={microsoftIcon} text="Sign up with  Microsoft" />
          </div>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default Login;
