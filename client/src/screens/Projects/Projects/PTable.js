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
import { CButton } from "@coreui/react";
import { CCollapse } from "@coreui/react";
import { CCard } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { Url } from "../../../Global_variable/api_link";
import Search from "antd/lib/transfer/search";
import Form from "react-bootstrap/Form";
import { TextArea } from "@react-ui-org/react-ui";
import Stack from "@mui/material/Stack";
import { Modal, Nav, Tab } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import "./PTable.css";
import { useDispatch } from "react-redux";
import { getExperienceApi } from "../../store/api/task";
// import {getExperienceApi} from "../../store/api/task"
import moment from "moment";
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';
import TimeInput from "react-widgets/TimeInput";

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
    height: 70,
  },
  input: {
    width: 130,
    height: 50,
  },
}));

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  const formattedDeadline = new Date(row[name]).toLocaleDateString();
  const formatted_date = moment(row[name]).fromNow();
  // const formatted_duration = new Date(row[name]).toLocaleDateString();
  const formatted_start_date = new Date(row[name]).toLocaleDateString();
  const formatted_end_date = new Date(row[name]).toLocaleDateString();
  const formatted_created_dt = new Date(row[name]).toLocaleDateString();
  
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
    name === 'deadline' ? formattedDeadline
   : name === 'date' ? formatted_date
    : name === 'start_date' ? formatted_start_date
    : name === 'end_date' ? formatted_end_date
    : name === 'created_dt' ? formatted_created_dt

    : row[name]
  )}
</TableCell>

  );
      };


function Ptable() {
  const tableRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [visibleTimer, setVisibleTimer] = useState(false);
  const [rows, setRows] = useState([]);
  const [previous, setPrevious] = useState({});
  // Define a new state variable to hold the selected row data
  const classes = useStyles();
  const dispatch = useDispatch();
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
  // Update the state variable with the clicked row data
  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setVisibleTimer(true);
  };
  // Reducer
  useEffect(() => {
    console.log("render");
    dispatch(getExperienceApi()).then((res) => console.log(res, "res"));
  }, []);

  //  Pagination
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetch(Url+"/pagination")
      .then((response) => response.json())
      .then((data) => setRows(data));
  }, []);

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
    // const newRows = rows.map((row) => {
    //   if (row.id === id) {
    //     return previous[id]
    //       ? { ...previous[id], isEditMode: !row.isEditMode }
    //       : { ...row, isEditMode: !row.isEditMode };
    //   }
    //   return row;
    // });
    // setRows(newRows);
    // setPrevious((state) => {
    //   delete state[id];
    //   return state;
    // });
    setRows();
    getExperience();
  };
  // Search//
  const [search, setSearch] = useState([]);

  const requestSearch = (e) => {
    const filteredRows = search.filter((row) => {
      return (
        row.id
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        row.task_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.deadline.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.task_assignperson
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
    setRows(filteredRows);
  };
  const requestSearchId = (e) => {
    const filteredRows = search.filter((row) => {
      return row.id
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setRows(filteredRows);
  };

  const requestSearchProjectName = (e) => {
    const filteredRows = search.filter((row) => {
      return row.project_name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRows(filteredRows);
  };
  const requestSearchClient = (e) => {
    const filteredRows = search.filter((row) => {
      return row.client.toLowerCase().includes(e.target.value.toLowerCase());
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
  // Search
  //Backend API

  const [order, setorder] = useState("ASC");

  const sortingid = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) => {
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
      const sorted = [...rows].sort((a, b) => {
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
  };

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
  const sortingclient = (col) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) => {
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
      const sorted = [...rows].sort((a, b) => {
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

  const [task_name, setTask_name] = useState("");
  const [client, setClient] = useState("");
  const [control_code, setControl_code] = useState("");
  const [category, setCategory] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [task_assignperson, setTask_assignperson] = useState("");
  const [searched, setSearched] = useState("");
  const [deadline, setDeadline] = useState("");
  const [duration, setDuration] = useState('');


  
  // Timer
  const [selectedRowData, setSelectedRowData] = useState(null);

  //Backend API

  const [experiencedetails, setExperiencedetails] = useState([]);

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = async () => {
    setRows([]);
    const response = await axios.get(Url+"/projectcard").then((response) => {
      const result = response.data.map(function (el) {
        var o = Object.assign({}, el);
        // o.deadline = moment(el.formatted_deadline).format('YYYY-MM-DD');
        o.deadline = new Date(el.formatted_deadline).toLocaleDateString();
        console.log(o.deadline);
        o.isEditMode = false;
        return o;
      });
      setRows(result);
      setSearch(result);
    });
  };

// format the date using JavaScript's Date API
const formattedDate = new Date(deadline).toLocaleDateString('en-GB');
  useEffect(() => {
    console.log(rows,'rowsa')
  }, [rows])
  


  const deleteExperience = async (id) => {
    var result = window.confirm("Are you sure to delete?");
    if (result) {
      await axios.delete(Url + `/delete_project/` + id);
      getExperience();
    }
  };

  const updateExp = ({
    id,
    project_name,
    created_dt,
    category,
    client,
    duration,
    start_date,
    end_date,
    project_manager,
    deadline,
     status,
    date,
    priority,
    description
  }) => {
    console.log(status);
    axios
      .put(Url + "/update_project", {
        id: id,
        project_name: project_name,
        created_dt : created_dt,
        category:category,
        client: client,
        duration:duration,
        start_date:start_date,
        end_date:end_date,
        project_manager:project_manager,
        deadline:deadline,
         status:status,
        date:date,
        priority:priority,
        description:description
      })
      .then((response) => {
        console.log("OK");
      });
  };
  const handleStatus = (status, id) => {
    axios
      .put(Url + "/project_status_update", {
        id: id,
        status: status,
      })
      .then((response) => {
        console.log(response, "response");
        if (!response.error) {
          alert("Status updated");
          getExperience();
        }
        // window.location.reload();
      });
  };
  // Modal Visible
  const tableData = [
    { status: "All" },
    { status: "InProgress" },
    { status: "Pending" },
    { status: "Completed" },
  ];
  // Color Code
  const colorCode = {
    Completed: "#80FFAD",
    InProgress: "#FFAF64",
    Pending: "#FF7F7F",
  };

  //   const data = [
  //     { status: "Completed" },
  //     {  status: "InProgress" },
  //     {  status: "Pending" },
  //   ]; // example data to filter and display in table rows

  //   // handle button clicks to update filter state
  //   const handleFilter = (status) => {
  //     setFilter(status);
  //   };
  // Pagination

  //  // render table rows based on filter state
  // const filteredData  = data.filter((row) => {
  //   if (filter === "All") {
  //     return true; // show all rows
  //   } else if (filter === "Completed") {
  //     return row.status === "Completed"; // show only completed rows
  //   } else if (filter === "InProgress") {
  //     return row.status === "InProgress"; // show only in-progress rows
  //   } else if (filter === "Pending") {
  //     return row.status === "Pending"; // show only pending rows
  //   } else {
  //     return false; // don't show any rows if filter value is invalid
  //   }
  // });
  const [filter, setFilter] = useState("All");
  const [totalCount, setTotalCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [InProgressCount, setProgressCount] = useState(0); // initialize filter state
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    axios
      .get(Url + `/project_filter?filter=${filter}`)
      .then((res) => {
        setRows(res.data);
        setTotalCount(res.data.length);
        setPendingCount(
          res.data.filter((row) => row.status !== "pending").length
        );
        setProgressCount(
          res.data.filter((row) => row.status !== "Inprogress").length
        );
        setCompletedCount(
          res.data.filter((row) => row.status !== "completed").length
        );
      })
      .catch((err) => console.log(err));
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    // Make an API call to fetch the users data
    axios
      .get(Url+"/getmembers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);
  const toast = useRef(null);
    const items = [
        {
            label: 'Edit Row',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },  
    ];

  return (
    <>
      <div className="background-ExperienceHr">
        <div className="container">
          <div className="shedule">
            {/* <HrModule /> */}
            <div className="content container-fluid">
              <div className="row_search">
                <div>{/* <h3 className="">Task Details</h3> */}</div>

                <DownloadTableExcel
                  filename="Experience Table"
                  sheet="users"
                  currentTableRef={tableRef.current}
                >
            
                  <Button type="danger">
                    <div className="download">
                      {" "}
                      Download
                      <DownloadIcon />
                    </div>
                  </Button>
                </DownloadTableExcel>
              </div>

              <>
                <div className="row_search" style={{ display: "flex" }}>
                  <CButton
                    style={{ height: "37px" }}
                    onClick={() => setVisible(!visible)}
                  >
                    Advance Search
                  </CButton>
                  <div className="filtb">
                    <Nav
                      variant="pills"
                      style={{ display: "flex" }}
                      className="nav nav-tabs tab-body-header rounded prtab-set w-sm-100"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="All"
                          onClick={() => handleFilter("All")}
                        >
                          All
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Started"
                          onClick={() => handleFilter("completed")}
                        >
                          Completed
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Approval"
                          onClick={() => handleFilter("Inprogress")}
                        >
                          Inprogress
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Completed"
                          onClick={() => handleFilter("pending")}
                        >
                          Pending
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="Search">
                    <Search
                    autoFocus
                      placeholder="Search Name"
                      onChange={(searchVal) => requestSearch(searchVal)}
                      onCancelSearch={() => cancelSearch()}
                      className="form-control"
                    />
                  </div>
                </div>

                <CCollapse visible={visible}>
                  {/* <CCard className="mt-3"> */}
                  {/* <CCardBody> */}
                  <div className=" d-flex flex-row row">
                    <div className="col-md-2 mt-2">
                      <Search
                        placeholder="ID"
                        onChange={(searchVal) => requestSearchId(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                        className="advance-search form-control"
                      />
                    </div>
                    <div className="col-md-2  mt-2">
                      <Search
                        onChange={(searchVal) =>
                          requestSearchProjectName(searchVal)
                        }
                        onCancelSearch={() => cancelSearch()}
                        placeholder="Project Name"
                        className="advance-search form-control"
                      />
                    </div>
                    <div className="col-md-2  mt-2">
                      <Search
                        onChange={(searchVal) =>
                          requestSearchClient(searchVal)
                        }
                        onCancelSearch={() => cancelSearch()}
                        placeholder="Client"
                        className="advance-search form-control"
                      />
                    </div>
                    <div className="col-md-2  mt-2 ">
                      <Search
                        onChange={(searchVal) =>
                          requestSearchDeadline(searchVal)
                        }
                        onCancelSearch={() => cancelSearch()}
                        placeholder="Deadline"
                        className="advance-search form-control"
                      />
                    </div>
                  </div>
                  {/* </CCardBody> */}
                  {/* </CCard> */}
                </CCollapse>

                {/* <Button style={{backgroundColor:'grey',color:'white',fontWeight:'550'}}  onClick={() => handleFilter("All")} >All({totalCount})</Button>
<Button style={{marginLeft:'10px',backgroundColor:'#80FFAD',color:'black',fontWeight:'550'}} onClick={() => handleFilter("completed")} >Completed({completedCount}) </Button>
<Button severity="warning" style={{marginLeft:'10px',backgroundColor:'#FFAF64',fontWeight:'550',color:'white'}} onClick={() => handleFilter("Inprogress")} >InProgress({InProgressCount}) </Button>
<Button style={{marginLeft:'10px',backgroundColor:'#FF7F7F',color:'white',fontWeight:'550'}} onClick={() => handleFilter("pending")} >Pending({pendingCount})</Button> */}
              </>
              <div className="flex-row">
                <div className="row_search">
                  <p style={{ color: "red", paddingTop: "10px" }}>
                    Page:{page}
                  </p>
                  <Pagination
                    count={Math.ceil(rows.length / rowsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                  />
                </div>
              </div>
              {/* <TablePagination
              component="div"
              rowsPerPageOptions={[2, 10, 25, 50]}
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
            <Paper>
              <TableContainer
                style={{
                  borderRadius: "10px",
                }}
              >
                <Table
                  className={classes.table}
                  aria-label="caption table"
                  ref={tableRef}
                >
                  <TableHead className={classes.tableHead}>
                    <TableRow className="satustable">
                      <TableCell>

              <Paper>
                <TableContainer>
                  <Table
                    className={classes.table}
                    style={{ paddingTop: "45px" }}
                    aria-label="caption table"
                    ref={tableRef}
                  >
                    {/* <caption>A barbone structure table example with a caption</caption> */}
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable table_name">ID</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingid("id")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable table_name">project_Name</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingname("task_name")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white"
                                  
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable">Created_dt</th>
                             <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdeadline("deadline")}
                              
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable table_name">Category</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingclient("client")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white"
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable table_name">Client</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingclient("client")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        {/* <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable table_name">Duration</th>
                            <i
                              style={{ paddingLeft: '2px', color: "#FF7F7F" }}
                              onClick={() => sortingcategory("category")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell> */}
                        {/* <TableCell>

                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >

                          Task_ID

                          <th className="hrtable ">Start Date</th>
                          <i
                            style={{ paddingLeft: '2px' }}
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
>>>>>>> 55ef620eb846488394303e3874ce994b1098ab63
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
<<<<<<< HEAD
                          Task_Name
                          <i style={{ paddingLeft: '2px' }}>
                            <BiSort
                              style={{
                                fontSize: 18,

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
                          Client
                          <i style={{ paddingLeft: '2px' }}>
                            <BiSort
                              style={{
                                fontSize: 18,

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
                          Control_Code
                          <i style={{ paddingLeft: '2px' }}>
                            <BiSort
                              style={{
                                fontSize: 18,

                                marginBottom: "10",
                              }}
                            />
                          </i>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          // className="d-flex flex-row justify-content-center"
                        >
                          Category
                          <i style={{ paddingLeft: '2px' }}>
                            <BiSort
                              style={{
                                fontSize: 18,

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
                          Assigned_by
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Assigned_To
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Deadline
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Description
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Status
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Comments
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          Actions
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice((page - 1) * rowsPerPage, page * rowsPerPage)

                      .map((row, index) => (
                        <TableRow
                          key={row.id}
                          style={{ backgroundColor: colorCode[row.status] }}
                        >
                          <CustomTableCell
                            {...{ row, name: "id", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />
                          <CustomTableCell
                            {...{ row, name: "task_name", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />
                          <CustomTableCell
                            {...{ row, name: "client", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />
                          <CustomTableCell
                            {...{ row, name: "control_code", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />

                          <CustomTableCell
                            {...{ row, name: "category", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />

                          <CustomTableCell
                            {...{ row, name: "task_assignperson", onChange }}
                            style={{ borderBottom: "1px solid black" }}
                          />

                          <Form.Select
                            value={row?.assignto}
                            disabled={!row.isEditMode}
                            onChange={(e) => {
                              const { value } = e.target;
                              const temp = rows;
                              temp[index].assignto = value || "";
                              setRows(temp);

                          <th className="hrtable">End Date</th>
                          <i
                            style={{ paddingLeft: '2px' }}
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
                      </TableCell> */}
                        {/* <TableCell>
                          <div
                            style={{ paddingTop: 15 }}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable">
                              Start_Date
                              <span style={{ textAligh: "center" }}> </span>
                            </th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() =>
                                sortingtaskassignperson("task_assignperson")
                              }
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
                            style={{ paddingTop: 18 }}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable">
                              End Date
                              <span style={{ textAligh: "center" }}> </span>
                            </th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() =>
                                sortingtaskassignperson("task_assignperson")
                              }
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
                        </TableCell> */}
                        
                        <TableCell>
                          <div
                            style={{ }}
                            className="d-flex flex-row justify-content-center"
                          >
                          
                            <th className="hrtable">Project_Manager</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdeadline("deadline")}
                              
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable">Deadline</th>
                             <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdeadline("deadline")}
                              
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div
                            style={{ }}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th className="hrtable">Status</th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdescription("description")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
                                }}
                              />
                            </i>
                          </div>
                        </TableCell>
                       
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th
                              className="hrtable"
                              style={{ borderCollapse: "collapse" }}
                            >
                              Date
                            </th>
                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdescription("status")}
                            >
                              <BiSort
                                style={{
                                  fontSize: 18,
                                  color: "white" 
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
                            <th className="hrtable">
                            Priority</th>

                            <i
                              style={{ paddingLeft: '2px' }}
                              onClick={() => sortingdescription("comments")}
                            >
                              <BiSort
                                style={{
                                  fontSize: "18px",
                                  color: "white",
                                  marginBottom: "10",
                                }}
                              />
                            </i>
                          </div>
                        </TableCell> */}
                        {/* <TableCell>
                          <div
                            style={{ paddingTop: 15 }}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th
                              className="hrtable"
                              style={{ paddingRight: "10px", paddingTop: "" }}
                            >
                              Description
                            </th>
                          </div>
                        </TableCell> */}
                        <TableCell>
                          <div
                            style={{}}
                            className="d-flex flex-row justify-content-center"
                          >
                            <th
                              className="hrtable"
                              style={{ paddingRight: "10px", paddingTop: "" }}
                            >
                              Actions
                            </th>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ) */}
                      {rows
                        .slice((page - 1) * rowsPerPage, page * rowsPerPage)

                        .map((row, index) => (
                      
                          <TableRow
                            key={row.id}
                            style={{ backgroundColor: colorCode[row.status] }}
                           
                          >
                            <CustomTableCell
                              {...{ row, name: "id", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                            <CustomTableCell
                              {...{ row, name: "project_name", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                             <CustomTableCell
                              {...{ row, name: "created_dt", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                            <CustomTableCell
                              {...{ row, name: "category", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                            <CustomTableCell
                              {...{ row, name: "client", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />

                            {/* <CustomTableCell
                              {...{ row, name: "duration", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            /> */}
                            
                            {/* <CustomTableCell
                                {...{ row, name: "start_date", onChange }}
                                style={{ borderBottom: "1px solid black" }}
                              />
                              <CustomTableCell
                                {...{ row, name: "end_date", onChange }}
                                style={{ borderBottom: "1px solid black" }}
                              /> */}
                            <CustomTableCell
                              {...{ row, name: "project_manager", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
<CustomTableCell
                              {...{ row, name: "deadline", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                                  <Form.Select
                              style={{
                                width: "133px",
                                height:"40px",
                                paddingTop:"5px",

                                backgroundColor:
                                  row.status === "completed"
                                    ? "#80FFAD"
                                    : row.status === "pending"
                                    ? "red"
                                    : row.status === "Inprogress"
                                    ? "#FFAF64"
                                    : "grey",
                                color: "white",
                                fontWeight: "bold",
                              }}
                              id={row.id}
                              disabled={!row.isEditMode}
                              // style={{  }}
                              value={row.status}
                              onChange={(e) =>
                                handleStatus(e.target.value, row.id)
                              }
                            >
                              <option value="">Select</option>
                              <option value="Completed">Completed</option>
                              <option value="InProgress">In Progress</option>
                              <option value="Pending">Pending</option>
                            </Form.Select>

                            
                            
                            {/* {console.log( {...{ row, name: "deadline", onChange }},'d')} */}
                            {/* <input
                          type="time"
                          name="ftime"
                          className="form-control"
                          {...{ row, name: "duration", onChange }}
                        /> */}
                        <CustomTableCell
                              {...{ row, name: "date", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                            {/* <CustomTableCell
                              {...{ row, name: "priority", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            />
                            <CustomTableCell
                              {...{ row, name: "description", onChange }}
                              style={{ borderBottom: "1px solid black" }}
                            /> */}
                     
                            {/* <CustomTableCell
                              {...{ row, name: "comments", onChange }}
                            /> */}
 
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
                                    onClick={() => getExperience()}
                                  >
                                    <RevertIcon />
                                  </IconButton>
                                </>
                              ) : (
                                <>
                                <div className="flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Details"
                            onClick={() => {
                              setSelectedRowData(row); // Set the selected row's data
                              setVisibleTimer(true); // Show the modal

                            }} model={items} className="custom-button" severity="warning" raised />
           

           
                                                  </div>
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
              </Paper>
              </TableCell>
              </TableRow>
              </TableHead>
              </Table>
</TableContainer>
              </Paper>
            </div>
          </div>
        </div>
      </div>
      <Modal show={visibleTimer} onHide={() => setVisibleTimer(!visibleTimer)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            {selectedRowData?.task_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="form-table">
  <tbody>
    <tr>
      <td>ID:</td>
      <td>{selectedRowData?.id}</td>
    </tr>
    <tr>
      <td>Task Name:</td>
      <td>{selectedRowData?.task_name}</td>
    </tr>
    <tr>
      <td>Client:</td>
      <td>{selectedRowData?.client}</td>
    </tr>
    <tr>
      <td>Control Code:</td>
      <td>{selectedRowData?.control_code}</td>
    </tr>
    <tr>
      <td>Category:</td>
      <td>{selectedRowData?.category}</td>
    </tr>
    <tr>
      <td>Task Assign Person:</td>
      <td>{selectedRowData?.task_assignperson}</td>
    </tr>
    <tr>
      <td>Assign To:</td>
      <td>{selectedRowData?.assignto}</td>
    </tr>
    <tr>
      <td>Deadline:</td>
      <td>{selectedRowData?.deadline}</td>
    </tr>
    <tr>
      <td>Description:</td>
      <td>{selectedRowData?.description}</td>
    </tr>
    <tr>
      <td>Comments:</td>
      <td>{selectedRowData?.comments}</td>
    </tr>
    <tr>
      <td>Status:</td>
      <td>{selectedRowData?.status}</td>
    </tr>
  </tbody>
</table>

        
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Ptable;



