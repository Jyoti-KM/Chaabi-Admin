import React from "react";
import styles from "./signup.module.scss";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import button from "../../components/Buttons/button/button";
import googleIcon from "./Asset/google_icon.svg";
import microsoftIcon from "./Asset/Microsoft_icon.svg";
import ScreenImage from "./Asset/screen.svg";
import CheckBox from "../../components/Buttons/CheckBox/CheckBox";
import ButtonWithLeftIcon from "../../components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";

const SignUp = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupContainer__left}>
        <h2>WhatsApp Learning </h2>
        <h2> Made Easy</h2>

        <img src={ScreenImage} alt="Screen Image" />
      </div>
      <div className={styles.signupContainer__right}>
        <div className={styles.formcontainer}>
          <h2>Start Your Trial</h2>
          <div className={styles.field}>
            <div className={styles.field_name}>
              <TextInput
                label="First Name"
                helperText=""
                type="text"
                placeholder="Enter your first name"
              />
              <TextInput
                label="Last Name"
                helperText=""
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className={styles.field_detail}>
              <TextInput
                label="Email"
                helperText=""
                type="email"
                placeholder="Enter your email address"
              />
              <NumberInput
                label="Phone Number"
                helperText=""
                type="tel"
                placeholder="9999999999"
              />
            </div>
            <div className={styles.field_password}>
              <TextInput
                label="Set Your Password"
                helperText=""
                type="password"
                placeholder="Enter your password"
              />
              <TextInput
                label="Confirm Your Password"
                helperText=""
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <div className={styles.field_terms}>
              <div className={styles.field_terms_1}>
                <CheckBox />
                <p>
                  I have read and agree to the <span>Terms Of Service</span>{" "}
                </p>
              </div>
              <div className={styles.field_terms_2}>
                <CheckBox />
                <p>
                  I want to receive communication about product, features and
                  updates
                </p>
              </div>
            </div>
          </div>
          <PrimaryButton text="Submit" />
          <div>
            <p className={styles.p}>
              Already a member? <span>Login </span>
            </p>
            <div className={styles.hr}>
              <div className={styles.line}>
                <hr />
              </div>
              <p>Or</p>
              <div className={styles.line}>
                <hr />
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

export default SignUp;
