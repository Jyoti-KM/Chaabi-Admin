import React, { useState } from "react";
import styles from "./userGroup.module.scss";
import SearchInput from "../../../components/InputFields/SearchInput/searchInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import Table from "../../../components/Table/Table";
import ButtonGroup from "../../../components/Buttons/ButtonGroup/ButtonGroup";
import SecondaryButton from "../../../components/Buttons/SecondaryButton/SecondaryButton";
import { createPortal } from "react-dom";
import Card from "../../../components/CardComponent/Card/Card";
import TextInput from "../../../components/InputFields/TextInput/TextInput";
import DropDown from "../../../components/InputFields/DropDown/DropDown";
import closeImage from "../../../assets/close.svg";
import TertiaryButton from "../../../components/Buttons/TertiaryButton/TertiaryButton";
import CheckBox from "../../../components/Buttons/CheckBox/CheckBox";
import OrganisationLogin from "../../../pages/Org/OrgLogin";
import { Link, Route, useNavigate } from "react-router-dom";
import Layout from "../../../Layout/Layout";
import FileUpload from "../../../components/InputFields/FileUpload/FileUpload";
import cloudIcon from "../../../assets/icons/cloud-upload-icon.svg";

const buttons = ["Users", "User Groups"];
const buttons2 = ["And", "Or"];
const options1 = [
  "Name of the field",
  "Name of the field",
  "Name of the field",
];
const options2 = ["is equal to", "is equal to", "is equal to"];
const emailInput = {
  label: "",
  helperText: "",
};

const fileInput = {
  iconSource: cloudIcon,
  supportingText: "SVG, PNG, JPG or GIF (max. 800x400px)",
  accept: "*",
};

const columnNames = [
  "Name",
  "Status",
  "Role",
  "Email",
  "Teams",
  "Delete",
  "Edit",
];

const options = [
  "load the list of existing rules ",
  "load the list of existing rules ",
  "load the list of existing rules ",
];

function UserGroup() {
    const [addUserGroup, setAddUserGroup] = useState(false);
    const [bukupload, setBulkupload] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null)
    
    const navigate = useNavigate();


  function handleBulkUpload() {
    setBulkupload(!bukupload);
  }
     
    function handleButtonSelection(buttonValue) {
      setSelectedButton(buttonValue);
  
      if( selectedButton === 'Users'){
          navigate("/users");
      }
      else if(selectedButton === 'User Groups'){
        navigate("/usergroup");
      }
      
    }
    

  function cancelBtnHandler() {
    setAddUserGroup(false);
    setBulkupload(false);
  }

  function AddUserGroups() {
    setAddUserGroup(!addUserGroup);
  }

  const tableRows = [
    {
      id: 1,
      name: "John Smith",
      status: "active",
      role: "Software Engineer",
      email: "john.smith@example.com",
      teams: ["Engineering", "Product", "Development"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 2,
      name: "Jane Doe",
      status: "inactive",
      role: "UX Designer",
      email: "jane.doe@example.com",
      teams: ["Design", "Product"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 3,
      name: "Michael Johnson",
      status: "draft",
      role: "Product Manager",
      email: "michael.johnson@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 4,
      name: "Emily Williams",
      status: "active",
      role: "Frontend Developer",
      email: "emily.williams@example.com",
      teams: ["Engineering", "Development"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 5,
      name: "William Davis",
      status: "inactive",
      role: "UI Designer",
      email: "william.davis@example.com",
      teams: ["Design", "Product"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 6,
      name: "Sophia Wilson",
      status: "draft",
      role: "Marketing Specialist",
      email: "sophia.wilson@example.com",
      teams: ["Marketing", "Sales"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 7,
      name: "Alexander Martinez",
      status: "active",
      role: "Backend Developer",
      email: "alexander.martinez@example.com",
      teams: ["Engineering", "Development", "QA"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 8,
      name: "Emma Brown",
      status: "inactive",
      role: "UX Designer",
      email: "emma.brown@example.com",
      teams: ["Design"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 9,
      name: "Daniel Jones",
      status: "draft",
      role: "Product Manager",
      email: "daniel.jones@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 10,
      name: "Olivia Taylor",
      status: "active",
      role: "Full Stack Developer",
      email: "olivia.taylor@example.com",
      teams: ["Engineering", "Development", "QA"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 11,
      name: "Liam Jackson",
      status: "inactive",
      role: "UI Designer",
      email: "liam.jackson@example.com",
      teams: ["Design", "Product"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 12,
      name: "Ava White",
      status: "draft",
      role: "Marketing Specialist",
      email: "ava.white@example.com",
      teams: ["Marketing", "Sales", "Analytics"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 13,
      name: "Noah Martinez",
      status: "active",
      role: "Backend Developer",
      email: "noah.martinez@example.com",
      teams: ["Engineering", "Development"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 14,
      name: "Isabella Davis",
      status: "inactive",
      role: "UX Designer",
      email: "isabella.davis@example.com",
      teams: ["Design", "Product"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
    {
      id: 15,
      name: "Mason Wilson",
      status: "draft",
      role: "Product Manager",
      email: "mason.wilson@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
      onClick: () => {
        navigate("/userdetail");
      }
    },
  ];
  

 
  return (
    <div className={styles.usersContainer}>
      <div className={styles.usersContainer__top}>
        <ButtonGroup buttons={buttons} onButtonSelect={handleButtonSelection}  />
        <div className={styles.container}>
          <SearchInput />
          <SecondaryButton onClick={handleBulkUpload}>Bulk upload</SecondaryButton>
          <PrimaryButton onClick={AddUserGroups} text="Add User Group" />

          {addUserGroup &&
            createPortal(
              <Card heading="Add a User Group" onCancel={cancelBtnHandler}>
                <div className={styles.form}>
                  <div className={styles.form_col1}>
                    <TextInput
                      label="Name of the User Group"
                      helperText=""
                      type="text"
                      placeholder="Name of the User Group"
                    />

                    <DropDown
                      options={options}
                      label={"Copy from another rule"}
                    />
                  </div>

                  <p className={styles.t1Reg}>When a user meets the following conditions:</p>

                  <div className={styles.form_col2}>
                    
                    <ButtonGroup className={styles.buttongroup} buttons={buttons2} />
                    <p className={styles.t3Reg}>Match any of the following conditions</p>
                    <div className={styles.row}>
                      <div className={styles.row_1}>
                        <DropDown options={options1} />
                      </div>

                      <div className={styles.row_2}>
                        <DropDown options={options2} />
                      </div>

                      <div className={styles.row_3}>
                        <TextInput {...emailInput} isRequire={true} />
                      </div>

                      <div className={styles.row_4}>
                        <img src={closeImage} alt="close icon " />
                      </div>
                    </div>

                <div className={styles.row}>
                      <div className={styles.row_1}>
                        <DropDown options={options1} />
                      </div>

                      <div className={styles.row_2}>
                        <DropDown options={options2} />
                      </div>

                      <div className={styles.row_3}>
                        <TextInput {...emailInput} />
                      </div>

                      <div className={styles.row_4}>
                        <img
                          src={closeImage}
                          alt="close icon "
                          isRequire={false}
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.row_1}>
                        <DropDown options={options1} />
                      </div>

                      <div className={styles.row_2}>
                        <DropDown options={options2} />
                      </div>

                      <div className={styles.row_3}>
                        <TextInput {...emailInput} isRequire={false} />
                      </div>

                      <div className={styles.row_4}>
                        <img src={closeImage} alt="close icon " />
                      </div>
                    </div>

                    <TertiaryButton>+ Add Condition</TertiaryButton>
                  </div>

                  <p className={styles.t1Reg}>
                    Enroll them in the &#60;&#60;&#60; Name of the usegroup
                    &#62;&#62;&#62; user group
                  </p>

                  <div className={styles.form_col3}>
                    <CheckBox />
                    <p className={styles.t3Lite}>Auto-enroll future users</p>
                  </div>
                  <PrimaryButton text="Confirm" />
                </div>
              </Card>,
              document.getElementById("modalPortal")
            )}
            {bukupload &&
            createPortal(
              <Card heading="Bulk Upload Users" onCancel={cancelBtnHandler}>
                <div className={styles.form2}>
                  <TextInput
                    label="Name of the Upload"
                    placeholder="Gurgaon Users"
                  />
                  
                  <TextInput label="Assign To" />
                  <FileUpload {...fileInput} />
                  <div className={styles.button}>
                  <PrimaryButton text="Confirm" />
                  </div>
                 
                </div>
              </Card>,
              document.getElementById("modalPortal")
            )}
        </div>
      </div>
      <div className={styles.usersContainer__buttom} >
        <Table tableHeading="All Users Groups" columnNames={columnNames} tableRows={tableRows} />
      </div>
    </div>
  );
}

export default UserGroup;


