import React from "react";
import styles from "./OrganisationLogin.module.scss";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import button from "../../components/Buttons/button/button";
// import googleIcon from "./Asset/google_icon.svg";
// import microsoftIcon from './Asset/Microsoft_icon.svg';
import ScreenImage from './Asset/screen.svg';
import TogglePairButtons from "../../components/Buttons/TogglePairButtons/TogglePairButtons";


const OrganisationLogin = () => {
  return (
    <div className={styles.OrganisationLoginContainer}>
      <div className={styles.OrganisationLoginContainer__left}>
        <h2>Transforming</h2>
      <h2> Your Workforce is</h2>
       
        <img src={ScreenImage} alt="Screen Image" />
      </div>
      <div className={styles.OrganisationLoginContainer__right}>
        <div className={styles.formcontainer}>
          <h2>One Step Away</h2>
          <div className={styles.field}>
          
          <TextInput label="First Name" helperText="" />
          <TextInput label="Last Name" helperText="" />
          <TogglePairButtons label='How will your users login?'  firstButton="Email Address" secondButton="Mobile Number" />
          
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        
         

        </div>
      </div>
    </div>
  );
};

export default OrganisationLogin;
