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
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
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
   //Backend API

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
  const sortingclient = (col) => {
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

  const updateExp = ({ id, task_name, client, control_code, start_date,end_date ,task_assignperson,deadline,description,status,comments}) => {
   console.log(comments); 
   console.log(status);
    axios
      .put(Url + "/update_experience", {
        id: id,
        task_name: task_name,
        client: client,
        control_code: control_code,
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
        window.location.reload();
      });
  };

  const tableData = [
    {  status: 'Completed' },
    { status: 'InProgress' },
    {  status: 'Pending' },
    {  status: 'Completed' },
  ];
  // Color Code
  const colorCode = {
    Completed: '#80FFAD',
    InProgress: '#FFAF64',
    Pending: '#F75E60',
  };
  const [filter, setFilter] = useState("All"); // initialize filter state
//   const data = [
//     { status: "Completed" },
//     {  status: "InProgress" },
//     {  status: "Pending" },
//   ]; // example data to filter and display in table rows

//   // handle button clicks to update filter state
//   const handleFilter = (status) => {
//     setFilter(status);
//   };

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
useEffect(() => {
  axios.get(Url+`/task_filter?filter=${filter}`)
    .then(res => setRows(res.data))
    .catch(err => console.log(err));
}, [filter]);

const handleFilter = (value) => {
  setFilter(value);
}

  // Task COunt
  const [data, setData] = useState({
    total: 0,
    completed: 0,
    in_progress: 0,
    pending: 0
  });
  
  const { total, completed, in_progress, pending } = data;
  const [incomplete, setIncomplete] = useState(0);

  useEffect(() => {
    fetch(Url + "/task_count")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
 
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
            <Button style={{marginLeft:'10px',backgroundColor:'grey',color:'white',fontWeight:'550'}} onClick={() => handleFilter("All")} >All</Button>
            <Button style={{marginLeft:'10px',backgroundColor:'#80FFAD',color:'black',fontWeight:'550'}} onClick={() => handleFilter("completed")}  >Completed</Button>
            <Button severity="warning" style={{marginLeft:'10px',backgroundColor:'#FFAF64',fontWeight:'550',color:'white'}} onClick={() => handleFilter("Inprogress")}  >InProgress</Button>
            <Button style={{marginLeft:'10px',backgroundColor:'#DC2626',color:'white',fontWeight:'550'}} onClick={() => handleFilter("pending")} >Pending</Button>
            </div>
            <div style={{marginTop:'15px'}}>
              <Stack direction="row" spacing={2}>
      <Button color="secondary">Total:{total}</Button>
      <Button variant="contained" color="error">
        Completed:{completed}
      </Button>
      <Button variant="outlined" color="error">
        InProgress: {in_progress}
      </Button>
      <Button variant="outlined" color="error">
        Pending:{pending}
      </Button>
    </Stack>

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
                  <div className="col-md-4  mt-2 mb-1">
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
            </div>
            </>
            
            <Typography style={{color:'#F75E60',paddingTop:'25px'}}>Page: {page}</Typography>
            <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 25, 50]}
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
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
                        <th className="hrtable">Task ID</th>
                        <i
                            style={{ paddingLeft: '10px' }}
                            onClick={() => sortingid("id")}
                          >
                            <BiSort
                              style={{
                                fontSize: 18,
                                color: "white",
                                marginBottom: "5px",
                              
                              }}
                            />
                          </i>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <th className="hrtable table_name">Task Name</th>
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
                          <th className="hrtable table_name">Control_Code</th>
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
                          <th className="hrtable table_name">Category</th>
                          <i
                            style={{ paddingLeft: 10, color:'#F75E60' }}
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
                          <th className="hrtable">Assigned<span style={{textAligh:'center'}}> by</span></th>
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
                          <th className="hrtable">Deadline</th>
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
                          <th className="hrtable">Description</th>
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
                          <th className="hrtable">Status</th>
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
                      </TableCell>
                      <TableCell>
                        <div
                          style={{ paddingTop: 15 }}
                          className="d-flex flex-row justify-content-center"
                        >
                          <th className="hrtable">Comments</th>
                       
                          <i
                            style={{ paddingLeft: 10 }}
                            onClick={() => sortingdescription("comments")}
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
                    {rows
                    
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                     .map((row, index) => (
                      
                        <TableRow key={row.id} style={{ backgroundColor: colorCode[row.status] }}>
                          <CustomTableCell
                            {...{ row, name: "id", onChange }}
                          />
                          <CustomTableCell
                            {...{ row, name: "task_name", onChange }}
                          />
                           <CustomTableCell
                            {...{ row, name: "client", onChange }}
                          />
                           <CustomTableCell
                            {...{ row, name: "control_code", onChange }}
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
                          
                          <CustomTableCell
                            {...{ row, name: "description", onChange }}
                          />
                            <Form.Select
                              style={{

                                width: "133px",

                                            backgroundColor:
                                            row.status === "completed"
                                            ? "#80FFAD"
                                            : row.status === "pending"
                                            ? "red"
                                            : row.status === "Inprogress"
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
                                    <option value="Completed">Completed</option>
                                    <option value="InProgress">In Progress</option>
                                    <option value="Pending">Pending</option>
                                  </Form.Select>
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

export default ExpereinceLetter;
