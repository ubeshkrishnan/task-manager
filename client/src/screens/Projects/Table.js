import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { BiSort } from "react-icons/bi";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { DownloadTableExcel } from "react-export-table-to-excel";
import DownloadIcon from "@mui/icons-material/Download";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import SearchBar from "material-ui-search-bar";
import "./Table.css";
import { CButton } from "@coreui/react";
import { CCollapse } from "@coreui/react";
import { CCard } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { Url } from "../../Global_variable/api_link";
import Search from "antd/lib/transfer/search";
import Form from "react-bootstrap/Form";
import { TextArea } from '@react-ui-org/react-ui';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="Center" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function ExpereinceLetter  () {
  const tableRef = useRef(null);

  const [visible, setVisible] = useState(false);
  
  const [rows, setRows] = useState([]);
  const [previous, setPrevious] = useState({});
  const classes = useStyles();

  const onToggleEditDone = (id) => {
    console.log(id);
    setRows(() => {
      return rows.map((row) => {
        if (row.id === id) {
          updateExp(row);
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onToggleEditMode = (id) => {
    const newRow = rows.map((row) => {
      if (row.id === id) {
        return { ...row, isEditMode: !row.isEditMode };
      }
      return row;
    });
    setRows(newRow);
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }

    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    console.log(name);
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
      
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id]
          ? { ...previous[id], isEditMode: !row.isEditMode }
          : { ...row, isEditMode: !row.isEditMode };
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
  };
  // Search//
  const [search, setSearch] = useState([]);

  const requestSearch = (e) => {
    const filteredRows = search.filter((row) => {
      return row.id.toString().toLowerCase().includes(e.target.value.toLowerCase())||
      row.task_name.toLowerCase().includes(e.target.value.toLowerCase())||
      row.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.deadline.toLowerCase().includes(e.target.value.toLowerCase())||
      row.task_assignperson.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setRows(filteredRows);
  };
  const requestSearchId = (e) => {
    const filteredRows = search.filter((row) => {
      return row.id.toString().toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRows(filteredRows);
  };

  const requestSearchtaskname = (e) => {
    const filteredRows = search.filter((row) => {
      return row.task_name.toLowerCase().includes(e.target.value.toLowerCase());  
    });
    setRows(filteredRows);
  };

  const requestSearchDeadline = (e) => {
    const filteredRows = search.filter((row) => {
      return row.deadline.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    getExperience(searched);
  };
  // Search//

  const [order, setorder] = useState("ASC");

  const sortingid = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>{

      let valueA = a[col];
      let valueB = b[col];
      if (typeof valueA !== "string") {
        valueA = String(valueA);
      }
      if (typeof valueB !== "string") {
        valueB = String(valueB);
      }
      return valueA.toLowerCase() > valueB.toLowerCase() ? 1 : -1;
    });
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
        const sorted = [...rows].sort((a, b) =>{
  
        let valueA = a[col];
        let valueB = b[col];
        if (typeof valueA !== "string") {
          valueA = String(valueA);
        }
        if (typeof valueB !== "string") {
          valueB = String(valueB);
        }
        return valueA.toLowerCase() < valueB.toLowerCase() ? 1 : -1;
      });
      setRows(sorted);
      setorder("ASC");
    }
}

  const sortingname = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingcategory = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingstart = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingend = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingtaskassignperson = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingdeadline = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };
  const sortingdescription = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setRows(sorted);
      setorder("ASC");
    }
  };

  const [Office, setOffice] = useState("");
  const [Location, setLocation] = useState("");
  const [Name, setName] = useState("");
  const [EmpID, setEmpID] = useState("");
  const [searched, setSearched] = useState("");

  //Backend API

  const [experiencedetails, setExperiencedetails] = useState([]);

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = async () => {
    const response = await axios
      .get(Url + "/taskcard")
      .then((response) => {
        const result = response.data.map(function (el) {
          var o = Object.assign({}, el);
          o.isEditMode = false;
          return o;
        });
        setRows(result);
        setSearch(result);
      });
  };

  const deleteExperience = async (id) => {
    var result = window.confirm("Are you sure to delete?");
    if (result) {
      await axios.delete(Url + `/delete_experience/` + id);
      getExperience();
    }
  };

  const updateExp = ({ id, office, location, name, empid }) => {
    axios
      .put(Url + "/update_experience", {
        id: id,
        office: office,
        location: location,
        name: name,
        empid: empid,
      })
      .then((response) => {
        console.log("OK");
      });
  };

  //Backend API
  return (
    <div className="background-ExperienceHr">
      <div className="container">
        <div className="shedule">
          {/* <HrModule /> */}
          <div className="content container-fluid">
            <div>
              <h1 className="exp-main">Task Details</h1>
            </div>
       
            <div className="Search">
              <Search
                placeholder="Search Name"
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
                className="form-control "
               
              />
            </div>
            <br />
            <>
              <div className="row_search">
              <CButton style={{width:'135px'}} onClick={() => setVisible(!visible)}>
                Advance Search
              </CButton>
              <DownloadTableExcel
              filename="Experience Table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              {" "}
              <Button type="danger"  style={{marginLeft:'710px'}}>
             
                <div className='download' > Download 
                  <DownloadIcon/>
                 
                </div>
              </Button>
              <br />
            </DownloadTableExcel>
            <div >
            <Button style={{marginLeft:'10px',backgroundColor:'grey',color:'white',fontWeight:'550'}}>All</Button>
            <Button style={{marginLeft:'10px',backgroundColor:'#16A34A',color:'white',fontWeight:'550'}}>Completed</Button>
            <Button severity="warning" style={{marginLeft:'10px',backgroundColor:'#D97706',fontWeight:'550',color:'white'}}>InProgress</Button>
            <Button style={{marginLeft:'10px',backgroundColor:'#DC2626',color:'white',fontWeight:'550'}}>Pending</Button>
            </div>
            <div style={{marginTop:'15px'}}>
              <Stack direction="row" spacing={2}>
      <Button color="secondary">Total:10</Button>
      <Button variant="contained" color="success">
        Completed:4
      </Button>
      <Button variant="outlined" color="error">
        InProgress:2
      </Button>
      <Button variant="outlined" color="error">
        Pending:4
      </Button>
    </Stack>

            </div>
              <CCollapse visible={visible}>
                {/* <CCard className="mt-3"> */}
                {/* <CCardBody> */}
                <div className=" d-flex flex-row row">
                  <div className="col-md-2 mb-5">
                    <Search
                      placeholder="ID"
                      onChange={(searchVal) => requestSearchId(searchVal)}
                      onCancelSearch={() => cancelSearch()}
                      className="advance-search form-control"
                    />
                  </div>
                  <div className="col-md-4 mb-5">
                    <Search
                      onChange={(searchVal) => requestSearchtaskname(searchVal)}
                      onCancelSearch={() => cancelSearch()}
                      placeholder="Task Name"
                      className="advance-search form-control"
                    />
                  </div>
                  <div className="col-md-4 mb-5">
                    <Search
                      onChange={(searchVal) => requestSearchDeadline(searchVal)}
                      onCancelSearch={() => cancelSearch()}
                      placeholder="Location"
                      className="advance-search form-control"
                    />
                  </div>
                </div>
                {/* </CCardBody> */}
                {/* </CCard> */}
              </CCollapse>
            </div>
            </>
            <br />
            <br />
        
            <Paper>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-label="caption table"
                  ref={tableRef}
                  
                >
                  {/* <caption>A barbone structure table example with a caption</caption> */}
                  <TableHead >
                    <TableRow>
                      <TableCell align="Center">
                        <h5 className="hrtable">Task ID</h5>
                        <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingid("id")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable table_name">Task Name</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingname("task_name")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable table_name">Category</h5>
                          <i
                            style={{ paddingLeft: 10, color:'red' }}
                            onClick={() => sortingcategory("category")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable ">Start Date</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingstart("start_date")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">End Date</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingend("end_date")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Assigned by</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingtaskassignperson("task_assignperson")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Deadline</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdeadline("deadline")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Description</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdescription("description")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      {/* <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Description</h5>
                        </div>
                      </TableCell> */}
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Status</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdescription("description")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Comments</h5>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdescription("description")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <h5 className="hrtable">Actions</h5>
                        </div>
                      </TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <TableRow key={row.id}>
                          <CustomTableCell
                            {...{ row, name: "id", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "task_name", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "category", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "start_date", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "end_date", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "task_assignperson", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "deadline", onChange }}
                          />
                          
                          {/* <CustomTableCell
                            {...{ row, name: "reason", onChange }}
                          /> */}
                          <CustomTableCell
                            {...{ row, name: "description", onChange }}
                          />
                          <TableCell
                            {...{ row, name: "status", onChange }}>
                                  <Form.Select
                                    id={row.id}
                                   style={{width: "133px",backgroundColor:'white'}}
                                    value={row.status}
                                  >
                                    <option>select</option>
                                    <option value="Completed">Completed</option>
                                    <option value="In Progress">
                                      In Progress
                                    </option>
                                    <option value="Pending">Pending</option>
                                  </Form.Select>
                            
       
</TableCell>
                          
                          <TableCell
                            {...{ row, name: "comments", onChange }}
                            
                          ><TextArea style={{backgroundColor:'white'}} />
                          </TableCell>
                          
                        
                          <TableCell
                            style={{ display: "flex", width: "100%" }}
                            className={classes.selectTableCell}
                            class
                          >
                            {row.isEditMode ? (
                              <>
                                <IconButton
                                  aria-label="done"
                                  onClick={() => onToggleEditDone(row.id)}
                                >
                                  <DoneIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="revert"
                                  onClick={() => onRevert(row.id)}
                                >
                                  <RevertIcon />
                                </IconButton>
                              </>
                            ) : (
                              <>
                                <IconButton
                                  aria-label="edit"
                                  onClick={() => onToggleEditMode(row.id)}
                                >
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => deleteExperience(row.id)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              ></TablePagination>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpereinceLetter;
