import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import SpineChart from "./Charts/SpineChart";
import DonutChart from "./Charts/DonutChart";
// import Accordion from "../../components/Accordion/Accordion";
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



function Dashboard() {
  const [showCustomizeButton1, setShowCustomizeButton1] = useState(false);
  const [showCustomizeButton2, setShowCustomizeButton2] = useState(false);
  const [showCustomizeButton3, setShowCustomizeButton3] = useState(false);
  const [showCustomizeButton4, setShowCustomizeButton4] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const handleImageClick1 = () => {

    setShowCustomizeButton1(!showCustomizeButton1); 
  };
  const handleImageClick2 = () => {

    setShowCustomizeButton2(!showCustomizeButton2); 
  };
  const handleImageClick3 = () => {

    setShowCustomizeButton3(!showCustomizeButton3); 
  };
  const handleImageClick4 = () => {

    setShowCustomizeButton4(!showCustomizeButton4); 
  };



  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const cancelBtnHandler = () => {
    setShowForm(!showForm); 
  }

  

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
              onClick={handleImageClick1}
              alt="button"
            />
            {showCustomizeButton1 && (
              <button className={styles.button} onClick={handleButtonClick}>
                <p>Customise Dashboard</p>
              </button>
            )}  {showForm &&
            createPortal(<Card heading="Chapter Details" onCancel={cancelBtnHandler}> 
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
          <div className={styles.heading_right}>
            <img
              className={styles.heading_right}
              src={threedots}
              onClick={handleImageClick2}
              alt="button"
            />
            {showCustomizeButton2 && (
              <button className={styles.button} onClick={handleButtonClick}>
                <p>Customise Dashboard</p>
              </button>
            )}  {showForm &&
            createPortal(<Card heading="Chapter Details" onCancel={cancelBtnHandler}> 
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
             
          </div>
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
          <div className={styles.heading_right}>
            <img
              className={styles.heading_right}
              src={threedots}
              onClick={handleImageClick3}
              alt="button"
            />
            {showCustomizeButton3 && (
              <button className={styles.button} onClick={handleButtonClick}>
                <p>Customise Dashboard</p>
              </button>
            )}  {showForm &&
            createPortal(<Card heading="Chapter Details" onCancel={cancelBtnHandler}> 
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
             
          </div>
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
          <div className={styles.heading_right}>
            <img
              className={styles.heading_right}
              src={threedots}
              onClick={handleImageClick4}
              alt="button"
            />
            {showCustomizeButton4 && (
              <button className={styles.button} onClick={handleButtonClick}>
                <p>Customise Dashboard</p>
              </button>
            )}  {showForm &&
            createPortal(<Card heading="Chapter Details" onCancel={cancelBtnHandler}> 
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
             
          </div>
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
