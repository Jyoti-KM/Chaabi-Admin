import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import SpineChart from "./Charts/SpineChart";
import DonutChart from "./Charts/DonutChart";

import DropDown from "../../components/InputFields/DropDown/DropDown";
import RadialChart from "./Charts/RadialChart";
import ColumnChart from "./Charts/ColumnChart";
import Spine2Chart from "./Charts/Spine2Chart";
import Card from '../../components/CardComponent/Card/Card'
import threedots from "../../assets/threedots.svg";
import CheckBox from '../../components/Buttons/CheckBox/CheckBox';
import closeImage from '../../assets/close.svg';
import { createPortal } from "react-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
const options = ["Training Name 1", "Training Name 2", "Training Name 3"];


// Extracted function to render the Customize Button and Form
function CustomizeButtonAndForm({ showCustomizeButton, showForm, handleButtonClick, cancelBtnHandler }) {
  return (
    <>
      <img
        className={styles.heading_right}
        src={threedots}
        onClick={handleButtonClick}
        alt="button"
      />
      {showCustomizeButton && (
        <button className={styles.button} onClick={handleButtonClick}>
          <p>Customise Dashboard</p>
        </button>
      )}
      {showForm &&
        createPortal(
          <Card heading="Customise Dashboard" onCancel={cancelBtnHandler}>
          
          {/* form can also customise */}
          <div className={styles.formContain}>
                 <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>Total Trainings</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>
              <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>In Training</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>
              <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>Learning Minutes</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>
              <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>Video Watch Time</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>
              <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>Completions</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>
              <div className={styles.fields}>
              <div className={styles.fields_left}>
                  <CheckBox />
                  <p>Enrollments</p>
                </div>
                <img src={closeImage} alt="close icon " className={styles.fields_left} />
              </div>

              <div className={styles.button}>
              <PrimaryButton >Confirm</PrimaryButton> 
              </div>
             
                 </div>
          </Card>,
          document.getElementById("modalPortal")
        )}
    </>
  );
}

function Dashboard() {
  const [showCustomizeButton, setShowCustomizeButton] = useState([false, false, false, false]);
  const [showForm, setShowForm] = useState(false);

  const handleImageClick = (index) => {
    const updatedButtons = [...showCustomizeButton];
    updatedButtons[index] = !updatedButtons[index];
    setShowCustomizeButton(updatedButtons);
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const cancelBtnHandler = () => {
    setShowForm(false);
  };

  // Define the dashboard content
  const dashboardContent = [
    { title: 'In Training', chart: <SpineChart /> },
    { title: 'Learning Mins', chart: <SpineChart /> },
    { title: 'Video Mins', chart: <SpineChart /> },
    { title: 'Completion', chart: <SpineChart /> },
  ];

  

  return (
    <div className={styles.dashboardContainer}>
     {dashboardContent.map((content, index) => (
        <div className={styles[`div${index + 1}`]} key={index}>
          <div className={styles.heading}>
            <div className={styles.heading_left}>
              <h4>3,435</h4>
              <h5>{content.title}</h5>
            </div>
            <div className={styles.heading_right}>
              <CustomizeButtonAndForm
                showCustomizeButton={showCustomizeButton[index]}
                showForm={showForm}
                handleButtonClick={handleButtonClick}
                cancelBtnHandler={cancelBtnHandler}
              />
            </div>
          </div>
          <div className={styles.chart}>
            {content.chart}
          </div>
        </div>
      ))}
      <div className={styles.div5}>
        <div className={styles.div5_heading}>
          <h2>Training Funnel</h2>

          <DropDown options={options} />
        </div>
        <hr />
        <div className={styles.div5_chart}>
          <ColumnChart />
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles.div6_left}>
          <h2>Chapter Summary</h2>
          <DropDown options={options} />
        </div>
        <div className={styles.div6_right}>
          <DonutChart />
        </div>
      </div>
      <div className={styles.div7}>
        <div className={styles.div7_left}>
          <h2>Quiz Summary</h2>
          <DropDown options={options} />
        </div>
        <div className={styles.div7_right}>
          <RadialChart />
        </div>
      </div>
      <div className={styles.div8}>
        <div className={styles.div8_heading}>
          <h2>Learning Activity</h2>

          <DropDown options={options} />
        </div>
        <hr />
        <div className={styles.div8_chart}>
          <Spine2Chart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
