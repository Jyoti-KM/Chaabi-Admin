import React, { useState } from "react";
import styles from "./Users.module.scss";
import SearchInput from "../../components/InputFields/SearchInput/searchInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Table from "../../components/Table/Table";
import ButtonGroup from "../../components/Buttons/ButtonGroup/ButtonGroup";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import { createPortal } from "react-dom";
import Card from "../../components/CardComponent/Card/Card";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import DropDown from "../../components/InputFields/DropDown/DropDown";
import closeImage from "../../assets/close.svg";
import TertiaryButton from "../../components/Buttons/TertiaryButton/TertiaryButton";
import CheckBox from "../../components/Buttons/CheckBox/CheckBox";
import OrganisationLogin from "../../pages/Org/OrgLogin";
import { Link, Route, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import FileUpload from "../../components/InputFields/FileUpload/FileUpload";
import cloudIcon from "../../assets/icons/cloud-upload-icon.svg";
import NumberInput from "../../components/InputFields/NumberInput/NumberInput";

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

const fileInput = {
  iconSource: cloudIcon,
  supportingText: "SVG, PNG, JPG or GIF (max. 800x400px)",
  accept: "*",
};

function Users() {
  const [addUserGroup, setAddUserGroup] = useState(false);
  const [bukupload, setBulkupload] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const navigate = useNavigate();

  function handleButtonSelection(buttonValue) {
    setSelectedButton(buttonValue);

    if (selectedButton === "Users") {
      navigate("/users");
    } else if (selectedButton === "User Groups") {
      navigate("/usergroup");
    }
  }

  function cancelBtnHandler() {
    setAddUserGroup(false);
    setBulkupload(false);
  }

  function handleAddUserGroups() {
    setAddUserGroup(!addUserGroup);
  }

  function handleBulkUpload() {
    setBulkupload(!bukupload);
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
    },
  ];

  return (
    <div className={styles.usersContainer}>
      <div className={styles.usersContainer__top}>
        <ButtonGroup buttons={buttons} onButtonSelect={handleButtonSelection} />
        <div className={styles.container}>
          <SearchInput />
          <SecondaryButton onClick={handleBulkUpload}>
            Bulk upload
          </SecondaryButton>
          <PrimaryButton onClick={handleAddUserGroups}>Add User </PrimaryButton>

          {addUserGroup &&
            createPortal(
              <Card heading="User detail" onCancel={cancelBtnHandler}>
                <div className={styles.form}>
                  <TextInput
                    label="Name of the User"
                    placeholder="Puneet Dhiman"
                  />
                  <NumberInput
                    label="Email Address / Mobile Number"
                    placeholder="0123456789"
                  />
                  <p className={styles.t4Lite}>Add Custom Fields</p>
                  <TextInput label="Assign To" />
                  <div className={styles.button}>
                  <PrimaryButton>confirm</PrimaryButton>
                  </div>
                  
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
                    <PrimaryButton>Confirm</PrimaryButton>
                  </div>
                </div>
              </Card>,
              document.getElementById("modalPortal")
            )}
        </div>
      </div>
      <div className={styles.usersContainer__buttom}>
        <Table
          tableHeading=" Users "
          columnNames={columnNames}
          tableRows={tableRows}
        />
      </div>
    </div>
  );
}

export default Users;
