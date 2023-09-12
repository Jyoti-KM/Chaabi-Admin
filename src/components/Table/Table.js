import React, { useState } from "react";
import styles from "./Table.module.scss";
import TableRow from "./TableRow/TableRow";
import TableRowHeader from "./TableRowHeader/TableRowHeader";
import Columnfilter from "../../assets/columnfilter.svg";
import filterIcon from "../../assets/filterIcon.svg";
import { createPortal } from "react-dom";
import Card from "../CardComponent/Card/Card";
import CheckBox from "../Buttons/CheckBox/CheckBox";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import closeImage from "../../assets/close.svg";
import DropDown from "../InputFields/DropDown/DropDown";
import TextInput from "../InputFields/TextInput/TextInput";

const options1 = [
  "Name of the field",
  "bombay",
  "hyd",
  "calcutta",
  "bombay",
  "hyd",
  "calcutta",
];
const options2 = [
  "is equal to",
  "bombay",
  "hyd",
  "calcutta",
  "bombay",
  "hyd",
  "calcutta",
];

const emailInput = {
  label: "",
  helperText: "",
};

function Table({ tableHeading ,columnNames, tableRows }) {
  const [showColumnFilter, setShowColumnFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [rows, setRows] = useState(tableRows);

  function handleColumnFilter() {
    setShowColumnFilter(!showColumnFilter);
  }

  function cancelBtnHandler() {
    setShowColumnFilter(false);
    setShowFilter(false);
  }

  function handleFilter() {
    setShowFilter(!showColumnFilter);
  }

  // pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPageIndex = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleRows = rows.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPageIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const tableRowDeleteHandler = (id) => {
    console.log(id);
    setRows(rows.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <p className={styles.header_left}>{tableHeading}</p>
        <div className={styles.header_right}>
          <img src={filterIcon} alt="filter button" onClick={handleFilter} />
          <img
            src={Columnfilter}
            alt="filter button"
            onClick={handleColumnFilter}
          />

          {showFilter &&
            createPortal(
              <Card heading="Create a Filter" onCancel={cancelBtnHandler}>
                <div className={styles.formContain1}>
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
                      <img src={closeImage} alt="close icon " />
                    </div>
                  </div>
                  
                  <div className={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
                  </div>
                </div>
              </Card>,
              document.getElementById("modalPortal")
            )}
          {showColumnFilter &&
            createPortal(
              <Card heading="Choose your Columns" onCancel={cancelBtnHandler}>
                {/* form can also customise */}
                <div className={styles.formContain2}>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>Total Trainings</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>In Training</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>Learning Minutes</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>Video Watch Time</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>Completions</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>
                  <div className={styles.fields}>
                    <div className={styles.fields_left}>
                      <CheckBox />
                      <p>Enrollments</p>
                    </div>
                    <img
                      src={closeImage}
                      alt="close icon "
                      className={styles.fields_left}
                    />
                  </div>

                  <div className={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
                  </div>
                </div>
              </Card>,
              document.getElementById("modalPortal")
            )}
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <TableRowHeader columnNames={columnNames} />
        </thead>
        <tbody className={styles.tableBody}>
          {visibleRows.map((item) => (
            <TableRow
              item={item}
              key={item.id}
              onDelete={tableRowDeleteHandler}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.footer}>
        Page {currentPage} of {lastPageIndex}{" "}
        <div className={styles.paginationBtnContainer}>
          <button
            className={styles.paginationBtn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={styles.paginationBtn}
            onClick={handleNextPage}
            disabled={currentPage === lastPageIndex}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
