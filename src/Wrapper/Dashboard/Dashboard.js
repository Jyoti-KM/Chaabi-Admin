import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import SpineChart from "./Charts/SpineChart";
import DonutChart from "./Charts/DonutChart";
// import Accordion from "../../components/Accordion/Accordion";
import DropDown from "../../components/InputFields/DropDown/DropDown";
import RadialChart from "./Charts/RadialChart";
import ColumnChart from "./Charts/ColumnChart";
import Spine2Chart from "./Charts/Spine2Chart";
import threedots from "../../assets/threedots.svg";

const options = ["Training Name 1", "Training Name 2", "Training Name 3"];

function Dashboard() {
  const [showCustomizeButton, setShowCustomizeButton] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleImageClick = () => {
    setShowCustomizeButton(!showCustomizeButton); 
  };


  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.div1}>
        <div className={styles.heading}>
          <div className={styles.heading_left}>
            <h4>3,435</h4>
            <h5>In Training</h5>
          </div>
          <div className={styles.heading_right}>
            <img
              className={styles.heading_right}
              src={threedots}
              onClick={handleImageClick}
              alt="button"
            />
            {showCustomizeButton && (
              <button className={styles.button} onClick={handleButtonClick}>
                <p>Customise Dashboard</p>
              </button>
            )}  {showForm && (
            <div className={styles.form}>
              <div></div>
            </div>
          )}
          </div>
        </div>

        <div className={styles.chart}>
          <SpineChart />
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.heading}>
          <div className={styles.heading_left}>
            <h4>40,000</h4>
            <h5>Learning Mins</h5>
          </div>
          <img className={styles.heading_right} src={threedots} alt="button" />
        </div>

        <div className={styles.chart}>
          <SpineChart />
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.heading}>
          <div className={styles.heading_left}>
            <h4>3,435</h4>
            <h5>Video Mins</h5>
          </div>
          <img className={styles.heading_right} src={threedots} alt="button" />
        </div>

        <div className={styles.chart}>
          <SpineChart />
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles.heading}>
          <div className={styles.heading_left}>
            <h4>3,435</h4>
            <h5>Completion</h5>
          </div>
          <img className={styles.heading_right} src={threedots} alt="button" />
        </div>

        <div className={styles.chart}>
          <SpineChart />
        </div>
      </div>
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
