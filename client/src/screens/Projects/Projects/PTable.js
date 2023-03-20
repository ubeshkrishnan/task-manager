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
import { TextArea } from '@react-ui-org/react-ui';
import Stack from '@mui/material/Stack';
import { Modal, Nav, Tab } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


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

function PTable  () {
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

//  Pagination
const [page, setPage] = useState(1);

const rowsPerPage = 3;
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};


useEffect(() => {
  fetch(Url+'/pagination')
    .then(response => response.json())
    .then(data => setRows(data));
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
  const requestSearchclient = (e) => {
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
//   S

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

  const sortingpname = (col) => {
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
  const sortingpcategory = (col) => {
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
  const sortingclient= (col) => {
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
  const sortingduration= (col) => {
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
  const sortingprojectmanager = (col) => {
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
  const sortingstatus = (col) => {
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
  const sortingdate = (col) => {
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
  const sortingcomments = (col) => {
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

  const updateExp = ({ id, project_name, client, control_code, start_date,end_date ,duration,task_assignperson,deadline,description,status,comments}) => {
   console.log(comments); 
   console.log(status);
    axios
      .put(Url + "/update_experience", {
        id: id,
        project_name: project_name,
        client: client,
        control_code: control_code,
        duration:duration,
        start_date: start_date,
        end_date: end_date,
        task_assignperson: task_assignperson,
        deadline: deadline,
        description: description,
        status:status,
        comments:comments,
      })
      .then((response) => {
        console.log("OK");
      });
  };
  const handleStatus = (status, id) => {
    axios
      .put(Url + "/task_status_update", {
        id: id,
        status: status,
      })
      .then((response) => {
        alert("Status updated");
        // window.location.reload();
        getExperience();
      });
  };

  const tableData = [
    {  status: 'Started' },
    { status: 'Approval' },
    {  status: 'Completed' },
   
  ];
  // Color Code
  const colorCode = {
    Started: '#80FFAD',
    Approval: '#FFAF64',
    Completed: '#FF7F7F',
  };

  
  const data = [
    { status: "Started" },
    {  status: "Approval" },
    {  status: "Completed" },
  ]; // example data to filter and display in table rows

  // handle button clicks to update filter state
//   const handleFilter = (status) => {
//     setFilter(status);
//   };
 // render table rows based on filter state
// const filteredData  = data.filter((row) => {
//   if (filter === "All") {
//     return true; // show all rows
//   } else if (filter === "Started") {
//     return row.status === "Started"; // show only completed rows
//   } else if (filter === "Approval") {
//     return row.status === "Approval"; // show only in-progress rows
//   } else if (filter === "Completed") {
//     return row.status === "Completed"; // show only pending rows
//   } else {
//     return false; // don't show any rows if filter value is invalid
//   }
// });
// const [filter, setFilter] = useState("All");
// const [totalCount, setTotalCount] = useState(0);
// const [pendingCount, setPendingCount] = useState(0);
// const [InProgressCount, setProgressCount] = useState(0); // initialize filter state
// const [completedCount, setCompletedCount] = useState(0);

// useEffect(() => {
//   axios.get(Url+`/task_filter?filter=${filter}`)
//   .then(res => {
//     setRows(res.data);
//     setTotalCount(res.data.length);
//     setPendingCount(res.data.filter(row => row.status !== 'pending').length);
//     setProgressCount(res.data.filter(row => row.status !== 'Inprogress').length);
//     setCompletedCount(res.data.filter(row => row.status !== 'completed').length);
//   })
//   .catch(err => console.log(err));
// }, [filter]);

// const handleFilter = (value) => {
// setFilter(value);
// }
  // Project aproval pending
  const [projectFilter, setProjectFilter] = useState("All");
  const [projectRows, setProjectRows] = useState([]);
  const [projectAllCount, setProjectAllCount] = useState(0);
  const [projectStartedCount, setProjectStartedCount] = useState(0);
  const [projectApprovalCount, setProjectApprovalCount] = useState(0);
  const [projectCompletedCount, setProjectCompletedCount] = useState(0);
  useEffect(() => {
    axios.get(Url+`/project_filter?filter=${projectFilter}`)
    .then(res => {
      setProjectRows(res.data);
      setProjectAllCount(res.data.length);
      setProjectStartedCount(res.data.filter(row => row.status !== 'started').length);
      setProjectApprovalCount(res.data.filter(row => row.status !== 'approval').length);
      setProjectCompletedCount(res.data.filter(row => row.status !== 'completed').length);
    })
    .catch(err => console.log(err));
  }, [projectFilter]);
   
  const handleProjectFilter = (value) => {
    setProjectFilter(value);
  }
  

  return (
    <div className="background-ExperienceHr">
      <div className="container">
        <div className="shedule">
          {/* <HrModule /> */}
          <div className="content container-fluid">
          <div className="row_search">
            <div>
              {/* <h3 className="">Task Details</h3> */}
            </div>
       
            <DownloadTableExcel
              filename="Experience Table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              {" "}
              <Button type="danger"  >
             
                <div className='download' > Download 
                  <DownloadIcon/>
                 
                </div>
              </Button>
             
            </DownloadTableExcel>
            </div>
         
            <>
              <div className="row_search" style={{display:'flex'}}>
              <CButton style={{height:'37px'}}  onClick={() => setVisible(!visible)}>
                Advance Search
              </CButton>
              <div className="filtb">

              <Nav variant="pills" style={{display:'flex'}} className="nav nav-tabs tab-body-header rounded prtab-set w-sm-100">
  <Nav.Item>
    <Nav.Link eventKey="All" onClick={() => handleProjectFilter("All")}>All</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Started" onClick={() => handleProjectFilter("started")}>Started</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Approval" onClick={() => handleProjectFilter("approval")}>Approval</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Completed" onClick={() => handleProjectFilter("completed")}>Completed</Nav.Link>
  </Nav.Item>
</Nav>

             
            </div>
              <div className="Search">
              <Search
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
                  <div className="col-md-4  mt-2">
                    <Search
                      onChange={(searchVal) => requestSearchtaskname(searchVal)}
                      onCancelSearch={() => cancelSearch()}
                      placeholder="Task Name"
                      className="advance-search form-control"
                    />
                  </div>
                  <div className="col-md-2  mt-2 ">
                    <Search
                      onChange={(searchVal) => requestSearchDeadline(searchVal)}
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
<Button style={{marginLeft:'10px',backgroundColor:'#80FFAD',color:'black',fontWeight:'550'}} onClick={() => handleFilter("Started")} >Started({startedCount}) </Button>
<Button severity="warning" style={{marginLeft:'10px',backgroundColor:'#FFAF64',fontWeight:'550',color:'white'}} onClick={() => handleFilter("Approval")} >Approval({approvalCount}) </Button>
<Button style={{marginLeft:'10px',backgroundColor:'#FF7F7F',color:'white',fontWeight:'550'}} onClick={() => handleFilter("Completed")} >Completed({completdCount})</Button> */}

          
            </>
            <div className="flex-row">
            <div className="row_search">
            <p style={{color:'red',paddingTop:'10px'}}>Page:{page}</p>
            <Pagination count={Math.ceil(rows.length / rowsPerPage)} page={page} onChange={handleChangePage} />
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
              <TableContainer>
                <Table
                  className={classes.table}
                  style={{paddingTop:'10px'}}
                  aria-label="caption table"
                  ref={tableRef}
 >
                  {/* <caption>A barbone structure table example with a caption</caption> */}
                  <TableHead >
                    <TableRow>
                      <TableCell >
                      <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <th  className="hrtable table_name">Project_Id</th>
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
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <th className="hrtable table_name">Project_Name</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingpname("project_name")}
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
                          <th className="hrtable table_name">Category</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingpcategory("category")}
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
                          <th className="hrtable table_name">Client</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingclient("client")}
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
                          <th className="hrtable table_name">Duration</th>
                          <i
                            style={{ paddingLeft: 10, color:'#FF7F7F' }}
                            onClick={() => sortingduration("duration")}
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
                          <th className="hrtable ">Start Date</th>
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
                          <th className="hrtable">End Date</th>
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
                          <th className="hrtable">Project Manager<span style={{textAligh:'center'}}> </span></th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingprojectmanager("project_manager")}
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
                          <th className="hrtable">Status</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingstatus("status")}
                           
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
                          <th className="hrtable">Date</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdate("date")}
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
                          <th className="hrtable" style={{borderCollapse:'collapse'}}>Status</th>
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdescription("status")}
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
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <th className="hrtable">Comments</th>
                       
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingcomments("comments")}
                          >
                            <BiSort
                              style={{
                                fontSize: '18px',
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
                          <th className="hrtable" style={{paddingRight:'10px',paddingTop:''}}>Actions</th>
                        </div>
                      </TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {/* .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ) */}
                    {
                      rows.slice((page - 1) * rowsPerPage, page * rowsPerPage)

                    
                     
                     .map((row, index) => (
                      
                        <TableRow key={row.id} style={{ backgroundColor: colorCode[row.status] }}>
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
  {...{ row, name: "start_date", onChange }}
  style={{ borderBottom: "1px solid black" }}
/>
<CustomTableCell
  {...{ row, name: "end_date", onChange }}
  style={{ borderBottom: "1px solid black" }}
/>
<CustomTableCell
  {...{ row, name: "task_assignperson", onChange }}
  style={{ borderBottom: "1px solid black" }}
/>
<Form.Select
                              style={{

                                width: "133px",

                                          
                                backgroundColor:
                                            row.status === "started"
                                            ? "#80FFAD"
                                            : row.status === "approval"
                                            ? "red"
                                            : row.status === "completed"
                                            ? "#FFAF64"
                                              : "grey",
                                        color: "white",
                                        fontWeight: "bold"
                                      }}
                                    id={row.id}
                                    // style={{  }}
                                    value={row.status} 
                                    onChange={(e) => handleStatus(e.target.value, row.id)}>
                                    <option value="">Select</option>
                                    <option value="Started">Started</option>
                                    <option value="Approval">Approval</option>
                                    <option value="Completed">Completed</option>
                                  </Form.Select>
                                
<CustomTableCell
  {...{ row, name: "deadline", onChange }}
  style={{ borderBottom: "1px solid black" }}
/>
<CustomTableCell
                                  {...{ row, name: "comments", onChange 
                                  }}
                                />
                          
                      
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
              
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTable;
