import React from "react";
import styles from "./userdetail.module.scss";
import SecondaryButton from "../../../components/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import RadioButton from "../../../components/Buttons/RadioButton/RadioButton";
import checkmark from "../../../assets/check.svg";
import Spine2Chart from "./Spine2Chart";
import TextInput from "../../../components/InputFields/TextInput/TextInput";

const Userdetail = () => {
  return (
    <div className={styles.Userdetail}>
      <div className={styles.div1}>
        <div className={styles.div1_left}>
          <h5 className={styles.h5Med}>
            &#60;&#60;&#60;&#60;&#60; Name of the User &#62;&#62;&#62;&#62;&#62;
          </h5>
          <p className={styles.t1Lite}>Create/edit Users & User Groups</p>
        </div>
        <div className={styles.div1_right}>
          <SecondaryButton>Back to List</SecondaryButton>
          <PrimaryButton>Edit Details</PrimaryButton>
        </div>
      </div>
      <div className={styles.div2}>
        <h6 className={styles.h6Lite}>User Details</h6>

        <div className={styles.container}>
          <div className={styles.text}>
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
          </div>
          <div className={styles.text}>
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
          </div>
          <div className={styles.text}>
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
          </div>
          <div className={styles.text}>
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
            <TextInput
              label={"User Details"}
              placeholder={"Enter your email address"}
              helperText={" This is a hint text to help user."}
              isDisabled={true}
            />
          </div>
         
        </div>
      </div>
      <div className={styles.div3}>
        <h6 className={styles.h6Lite}>Trainings Enrolled in</h6>
        <div className={styles.div3__container}>
        <div className={styles.row}>
        <div className={styles.text}>
            
            <RadioButton />
            <p className={styles.t3Req}>
              Training Name 124134143 | 12 Chapters | 20 Lessons
            </p>
          </div>
          <div className={styles.check}>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.check}>
              <div className={styles.checkMark}>
                <img src={checkmark} />
                <p className={styles.t3Lite}>10 lessons completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.text}>
            
            <RadioButton />
            <p className={styles.t3Req}>
              Training Name 124134143 | 12 Chapters | 20 Lessons
            </p>
          </div>
          <div className={styles.check}>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.check}>
              <div className={styles.checkMark}>
                <img src={checkmark} />
                <p className={styles.t3Lite}>10 lessons completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.text}>
            
            <RadioButton />
            <p className={styles.t3Req}>
              Training Name 124134143 | 12 Chapters | 20 Lessons
            </p>
          </div>
          <div className={styles.check}>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.checkMark}>
              <img src={checkmark} />
              <p className={styles.t3Lite}>10 lessons completed</p>
            </div>
            <div className={styles.check}>
              <div className={styles.checkMark}>
                <img src={checkmark} />
                <p className={styles.t3Lite}>10 lessons completed</p>
              </div>
            </div>
          </div>
        </div>
         
        </div>
      </div>
      <div className={styles.div4}>
        <h6 className={styles.h6Lite}>Last 14 day activity</h6>
        <Spine2Chart />
      </div>
    </div>
  );
};

export default Userdetail;
