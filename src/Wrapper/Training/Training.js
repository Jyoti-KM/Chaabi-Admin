import React , {useState }from "react";
import styles from "./Training.module.scss";
import SearchInput from "../../components/InputFields/SearchInput/searchInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Table from "../../components/Table/Table";
import ButtonGroup from "../../components/Buttons/ButtonGroup/ButtonGroup";
import { useNavigate } from "react-router-dom";

const buttons = ["List", "Templates", "Playlist"];

const columnNames = [
  "Name",
  "Status",
  "Role",
  "Email",
  "Teams",
  "Delete",
  "Edit",
];

const Training = () => {
  const [selectedButton, setSelectedButton] = useState(null)
  
  const navigate = useNavigate();
   
  function handleButtonSelection(buttonValue) {
    setSelectedButton(buttonValue);

    if( selectedButton === 'List'){
        navigate("/list");
    }
    else if(selectedButton === 'Templates'){
      navigate("/templates");
    }
    else if (selectedButton === 'Playlist'){
      navigate("/playlist");
    }
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
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
        navigate("/trainingname");
      },
    },
  ];

  return (
    <div className={styles.Training}>
      <div className={styles.Training__top}>
        <ButtonGroup
          buttons={buttons}
          onButtonSelect={handleButtonSelection} 
        />
        
        <div className={styles.conatiner}>
          <SearchInput />
          <PrimaryButton>Create New</PrimaryButton>
        </div>
      </div>
      <div className={styles.Training__buttom}>
        <Table
          tableHeading="Training"
          columnNames={columnNames}
          tableRows={tableRows}
        />
      </div>
    </div>
  );
};

export default Training;
