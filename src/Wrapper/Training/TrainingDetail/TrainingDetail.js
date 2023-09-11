import React from 'react'
import styles from './trainingdetail.module.scss';
import Accordion from '../../../components/Accordion/Accordion';
import SecondaryButton from '../../../components/Buttons/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../../components/Buttons/PrimaryButton/PrimaryButton';
import TabGroup from '../../../components/TabGroup/TabGroup';
import NavigationButtonGroup from '../../../components/Buttons/NavigationButtonGroup/NavigationButtonGroup';

const AccordionTabs = [
    "Accordion title - 1",
    "Accordion title - 2",
    "Accordion title - 3",
    "Accordion title - 4",
    "Accordion title - 5",
  ];


  const tabs = ["1", "2", "3", "4" ,"5"];

const TrainingDetail = () => {
  return (
    <div className={styles.TrainingDetail}>
      <div className={styles.div1}>
      <Accordion tabs={AccordionTabs} />
      </div>
      <div className={styles.div2}>
        <div className={styles.div2_left}>
<h5 className={styles.h5Med}>&#60;&#60;&#60;&#60; Lesson Name &#62;&#62;&#62;&#62;</h5>
        </div>
        <div className={styles.div2_right}>
        <SecondaryButton>Upload Quiz</SecondaryButton>
        <SecondaryButton>View Demo</SecondaryButton>
          <PrimaryButton>Publish</PrimaryButton>
        </div>
      </div>
      <div className={styles.div3}>
      <div className={styles.container}>
      <div className={styles.div3__top}>
      <TabGroup tabs={tabs} />
      <NavigationButtonGroup />
        </div>
        <div className={styles.div3__middle}>
        
        </div>
        <div className={styles.div3__bottom}>
        
        </div>
        </div>
      </div>

    </div>
  )
}

export default TrainingDetail
