import React from "react";
import styles from "./OrgLogin.module.scss";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import button from "../../components/Buttons/button/button";
// import googleIcon from "./Asset/google_icon.svg";
// import microsoftIcon from './Asset/Microsoft_icon.svg';
import ScreenImage from "./Asset/screen.svg";
import TogglePairButtons from "../../components/Buttons/TogglePairButtons/TogglePairButtons";
import ButtonGroup from "../../components/Buttons/ButtonGroup/ButtonGroup";

const buttons = ["Email Address", "Phone number"];

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
              <TextInput label="Company Name" helperText="" placeholder="Enter your company name"/>
              <TextInput label="Your Role" helperText="" placeholder="Founder & CEO"/>
            </div>
            <div className={styles.field_account}>
              <TextInput label="Account URL" helperText="" placeholder="companyname.chaabi.co"/>
              <TextInput label="Industry" helperText="" placeholder="Manufacturing"/>
            </div>
            <div className={styles.field_detail}>
              <div className={styles.field_detail_1}>
                

                 <p className={styles.p}>How will your users login?</p>
                <ButtonGroup buttons={buttons} />

              </div>
              <div className={styles.field_detail_2}>
                <NumberInput label="Company Size" helperText="" placeholder="0-10"/>
              </div>
            </div>
          </div>
          <PrimaryButton text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default OrganisationLogin;
