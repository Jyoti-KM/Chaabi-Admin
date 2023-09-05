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
          
          <div className={styles.field_name}>
          <TextInput label="Company Name" helperText="" />
          <TextInput label="Your Role" helperText="" />
          </div>
          <div className={styles.field_account}>
          <TextInput label="Account URL" helperText="" />
          <TextInput label="Industry" helperText="" />
         
          </div>
          <div className={styles.field_detail}>
          <TogglePairButtons label='How will your users login?'  firstButton="Email Address" secondButton="Mobile Number" />
          <NumberInput label="Company Size" helperText="" />
          </div>
          
          
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        
         

        </div>
      </div>
    </div>
  );
};

export default OrganisationLogin;
