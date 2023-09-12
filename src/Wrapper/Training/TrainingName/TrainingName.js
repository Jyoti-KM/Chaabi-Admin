import React from 'react'
import styles from './trainingName.module.scss'
import SecondaryButton from '../../../components/Buttons/SecondaryButton/SecondaryButton'
import PrimaryButton from '../../../components/Buttons/PrimaryButton/PrimaryButton'
import userGroup from '../../../assets/usergroup.svg';
import learning from '../../../assets/light.svg';
import clock from '../../../assets/clock.svg';

import CheckCircle from '../../../assets/checkMark.svg';
import Spine2Chart from './Spine2Chart';
import DropDown from '../../../components/InputFields/DropDown/DropDown';
import MyTable from './MyTable';

const options = ["Last 14 Days", "Training Name 2", "Training Name 3"];


const TrainingName = () => {
  return (
    <div className={styles.TrainingName}>
      <div className={styles.div1}>
        <h5 className={styles.h5Med}>&#60;&#60;&#60; Lesson Name &#62;&#62;&#62;</h5>
        <div className={styles.div1_right}>
        <SecondaryButton>Back to List</SecondaryButton>
          <PrimaryButton>Edit Training</PrimaryButton>
        </div>
      </div>
      <div className={styles.div2}>
      <div className={styles.div2_left}>
         <h6 className={styles.h6Reg}>Total Users Enrolled</h6>
         <h3 className={styles.h3Med}>3,423</h3>
        </div>
        <div className={styles.div2_right}>
           <img src={userGroup} alt='user group'/>
        </div>
      </div>
      <div className={styles.div3}>
      <div className={styles.div2_left}>
         <h6 className={styles.h6Reg}>Learning Minutes</h6>
         <h3 className={styles.h3Med}>3,423</h3>
        </div>
        <div className={styles.div2_right}>
           <img src={learning} alt='user group'/>
        </div>
      </div>
      <div className={styles.div4}>
      <div className={styles.div2_left}>
         <h6 className={styles.h6Reg}>In Progresss</h6>
         <h3 className={styles.h3Med}>3,423</h3>
        </div>
        <div className={styles.div2_right}>
           <img src={clock} alt='user group'/>
        </div>
      </div>
      <div className={styles.div5}>
      <div className={styles.div2_left}>
         <h6 className={styles.h6Reg}>Completions</h6>
         <h3 className={styles.h3Med}>3,423</h3>
        </div>
        <div className={styles.div2_right}>
           <img src={CheckCircle} alt='user group'/>
        </div>
      </div>
      <div className={styles.div6}>
        <MyTable />
      </div>
      <div className={styles.div7}>
      <div className={styles.div7_heading}>
          <h2>Learning Activity</h2>

          <DropDown options={options} />
        </div>
        <hr />
        <div className={styles.div7_chart}>
          <Spine2Chart />
        </div>
      </div>
      
    </div>
  )
}

export default TrainingName
