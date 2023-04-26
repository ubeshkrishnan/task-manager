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


import DataTable from "react-data-table-component";


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
          updateProject (row);
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
        // o.deadline = new Date(el.formatted_deadline).toLocaleDateString();
        // o.created_dt = new Date(el.created_dt).toLocaleDateString("en-GB");
        // o.date = new Date(el.date).toLocaleDateString("en-GB");
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

  const updateProject = ({
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
      .put(Url + `/projectupdate/${id}`, { // update the endpoint
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
      })
      .catch((error) => {
        console.log(error);
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
  
const LeadersListData={
      title:"Leaders List",
      columns:[
          {
              name: " ID",
              selector:(row)=>row.id,
              sortable: true,
              cell:(row)=>{
                return(

                  <div>
                    <div style={{ backgroundColor: colorCode[row.status] }}>{row.id}</div>
                  </div>
                
                )
              }
          },

          {
            name: "PROJECT NAME",
            selector:(row)=>row.project_name,
            sortable: true,
            cell:(row)=>{
              return(
                <div>
                <div style={{ backgroundColor: colorCode[row.status] }}>{row.project_name}</div>
                </div>
              )
            }
        },

        {
          name: "CREATED DATE",
          selector:(row)=>row.created_dt,
          sortable: true,
          cell:(row)=>{
            return(
              <div>
              <div style={{ backgroundColor: colorCode[row.status] }}>{row.created_dt}</div>
              </div>
            )
          }
      },

      {
        name: "CATEGORY",
        selector:(row)=>row.category,
        sortable: true,
        cell:(row)=>{
          return(
            <div>
              <div style={{ backgroundColor: colorCode[row.status] }}>{row.category}</div>
            </div>
          )
        }
    },
    {
      name: "CLIENT",
      selector:(row)=>row.client,
      sortable: true,
      cell:(row)=>{
        return(
          <div>
            <div  style={{ backgroundColor: colorCode[row.status] }}>{row.client}</div>
          </div>
        )
      }
  },

  {
    name: "PROJECT MANAGER",
    selector:(row)=>row.project_manager,
    sortable: true,
    cell:(row)=>{
      return(
        <div>
          <div style={{ backgroundColor: colorCode[row.status] }}>{row.project_manager}</div>
        </div>
      )
    }
},

{
  name: "DEADLINE",
  selector:(row)=>row.deadline,
  sortable: true,
  cell:(row)=>{
    return(
      <div>
      
        <div style={{backgroundColor: colorCode[row.status] }}>{row.deadline}</div>
      </div>
    )
  }
},

{
  name:"STATUS",
  selector: (row) =>row.status,
  sortable: true,
  cell: (row) => {
    return (
      <Form.Select
        style={{
          width: "113px",
          height: "40px",
          paddingTop: "5px",
          backgroundColor:
            row.status === "completed"
              ? "#80FFAD"
              : row.status === "pending"
              ? "red"
              : row.status === "InProgress"
              ? "#FFAF64"
              : "grey",
          color: "white",
          fontWeight: "bold",
 }}
        value={row.status}
        onChange={(e) => handleStatus(e.target.value, row.id)}
        disabled={!row.isEditMode}
      >
        <option value="">Select</option>
        <option value="Completed">Completed</option>
        <option value="InProgress">In Progress</option>
        <option value="Pending">Pending</option>
      </Form.Select>
    );
  },
},
{
  name: "DATE",
  selector:(row)=>row.date,
  sortable: true,
  cell:(row)=>{
    return(
      <div>
        <div style={{ backgroundColor: colorCode[row.status] }}>{row.date}</div>
      </div>
    )
  }
},
{
  name: "ACTION",
  selector: (row)=>{},
  sortable: true,
  cell: (row) => (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-secondary" onClick={() => onToggleEditDone(row.id)}>
        <i className="icofont-edit text-success"></i>
      </button>
      <button type="button" className="btn btn-outline-secondary deleterow" onClick={() => deleteExperience(row.id)}>
        <i className="icofont-ui-delete text-danger"></i>
      </button>
    </div>
  )
}
     ],
    }
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
             
                <div className="row_search">
                  <p style={{ color: "red"}}>
                    Page:{page}
                  </p>
                  <Pagination
                    count={Math.ceil(rows.length / rowsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                  />
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
      
                  <div >
                  <DataTable
                    title={LeadersListData.title}
                    columns={LeadersListData.columns}
                    data={rows}
                    defaultSortField="title"
                    pagination
                    subHeader
                    selectableRows={false}
                    className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                    highlightOnHover={true}
                   />
                    </div>


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



