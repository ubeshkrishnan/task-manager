import React,{useState,useEffect} from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
// import { LeaveRequestData } from "../../components/Data/AppData";
import axios from "axios";
import { Url } from "../../Global_variable/api_link";

const LeaveRequest = () => {
    const [isModal, setModal] = useState(false);
    const [isEditModal, setEditModal] = useState(false);
    const [isDeleteModal, setDeleteModal] = useState(false);
    const [editModeldata, setEditModelData] = useState({
        emp_id:"",
        emp_name:"",
        leave_type: "",
       from_date: "",
        to_date: "",
        reason: "",
        
        
      });
      const handleInputChange = (e) => {
        setEditModelData({
          ...editModeldata,
          [e.target.name]: e.target.value,
        });
      };
    
      // INSERTING DATA
    
      const leaves =(e)=>{
        e.preventDefault();
        axios.post(Url+"/leave",{
        emp_id:editModeldata.emp_id,
        emp_name:editModeldata.emp_name,
        leave_type:editModeldata.leave_type,
        from_date:editModeldata.from_date,
        to_date:editModeldata.to_date,
        reason:editModeldata.reason,
       
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    
      }
  
    const[rows,setRows] = useState([]);

    //for the from_date and to_date
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    };
    
    const myTask = async() => {
      console.log("myTask function is called");
      setRows([]);
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      axios.get(Url+`/getleave/${user.user_id}`)
        .then((response) => {
          const formattedRows = response.data.map(row => ({
            ...row,
            from_date: formatDate(row.from_date),
            to_date: formatDate(row.to_date)
          }));
          setRows(formattedRows);
        });
    };
    
    useEffect(() => {
      myTask();
    }, []);
    
    const [leaveRequest, setLeaveRequest] = useState([]);

    useEffect(() => {
      axios
        .get(Url+"/leave_users")
        .then((response) => {
          if (response && response.data) {
            setLeaveRequest(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
  

const LeaveRequestData = 
{
    columns:[
        {
            name: "TASK ID",
            selector: (row)=>row.id,
            sortable: true,
            cell:(row) => {
              return (
                <div>
                  <div>{row.id}</div>
                 
                </div>
              );
            }
          
        },
    
    {
      name: "LEAVE TYPE",
      selector: (row) => row.leave_type,
      sortable: true,
      cell:(row) => {
        return (
          <div>
            <div>{row.leave_type}</div>
           
          </div>
        );
      }
    },
    {
      name: "FROM",
      selector: (row) => row.from_date,
      sortable: true,
      cell:(row) => {
        return (
          <div>
            <div>{row.from_date}</div>
           
          </div>
        );
      }
    },
    {
      name: "TO",
      selector: (row) => row.to_date,
      sortable: true,
      cell:(row) => {
        return (
          <div>
            <div>{row.to_date}</div>
           
          </div>
        );
      }
    },
    {
      name: "REASON",
      selector: (row) => row.reason,
      sortable: true,
      cell:(row) => {
        return (
          <div>
            <div>{row.reason}</div>
           
          </div>
        );
      }
    },
    {
      name: "ACTION",
      selector: (row) => row.action,
      sortable: true,
      cell:(row) => {
        let color;
        let backgroundColor;
        switch (row.action) {
          case "Approved":
            color = "green";
            backgroundColor = "green";
            break;
          case "Declined":
            color = "red";
            break;
          case "Pending":
          default:
            color = "brown";
            break;
        }
        return (
          <div>
            <div style={{color}}>{row.action}</div>
          </div>
        );
      }
       
    },
   
  ]
}
  

  
    return (
      <div className="container-xxl">
        <PageHeader headerTitle="Leave Request" renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button className="btn btn-dark btn-set-task w-sm-100" onClick={() => { setModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Leave</button>
            </div>
          );
        }} />
        <div className="row clearfix g-3">
          <div className="col-sm-12">
            <DataTable
              title={LeaveRequestData.title}
              columns={LeaveRequestData.columns}
              data={rows}
              defaultSortField="title"
              pagination
              selectableRows={false}
              className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
              highlightOnHover={true}
            />
          </div>
        </div>
        <Modal centered show={isModal} onHide={() => { setModal(false) }}>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Add Leave</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
            <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="datepickerdedass" className="form-label">Employee ID</label>
                                    {/* <input type="text" className="form-control" id="datepickerdedass" name="emp_id" onChange={handleInputChange} value={editModeldata.emp_id}/> */}
                                    <select
             className="form-control"
             id="datepickerdedass"
             name="emp_id"
             onChange={handleInputChange} value={editModeldata.emp_id}
            >
              <option disabled>Select</option>
    {leaveRequest.map((leave_id) => (
      <option key={leave_id.user_id} value={leave_id.user_id}>
        {leave_id.user_id}
      </option>
    ))}
            </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="datepickerdedoneddsd" className="form-label">Employee Name</label>
                                    {/* <input type="text" className="form-control" id="datepickerdedoneddsd" name="emp_name" onChange={handleInputChange} value={editModeldata.emp_name}/> */}
                                    <select
             className="form-control"
             id="datepickerdedass"
             name="emp_name"
             onChange={handleInputChange} value={editModeldata.emp_name}
            >
              <option disabled>Select</option>
    {leaveRequest.map((leave_id) => (
      <option key={leave_id.first_name} value={leave_id.first_name}>
        {leave_id.first_name}
      </option>
    ))}
            </select>
                                
                                
                                </div>
                                </div>
              <label  className="form-label">Select Leave type</label>
              <select className="form-select" name="leave_type" onChange={handleInputChange} value={editModeldata.leave_type}>
                <option disabled>Select Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Permission">Permission</option>
                <option value="Sick Leave">Sick Leave</option>
              </select>
              </div>
                <div className="deadline-form">
                        <form>
                                <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="datepickerdedass" className="form-label">Leave From Date</label>
                                    <input type="date" className="form-control" id="datepickerdedass" name="from_date" onChange={handleInputChange} value={editModeldata.from}/>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="datepickerdedoneddsd" className="form-label">Leave to Date</label>
                                    <input type="date" className="form-control" id="datepickerdedoneddsd" name="to_date" onChange={handleInputChange} value={editModeldata.to}/>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea78d" className="form-label">Leave Reason</label>
                            <textarea className="form-control" id="exampleFormControlTextarea78d" rows="3" name="reason" onChange={handleInputChange} value={editModeldata.reason}></textarea>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={()=>{ setModal(false) }}>Done</button>
                        <button type="button" className="btn btn-primary" onClick={leaves}>Save</button>
                    </Modal.Footer>
                </Modal>
                <Modal centered show={isEditModal} onHide={()=>{setEditModal(false) }}>
                    <Modal.Header closeButton><h5 className="modal-title  fw-bold" id="dremovetaskLabel"> Leave Approve</h5></Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                        <i className="icofont-simple-smile text-success display-2 text-center mt-2"></i>
                        <p className="mt-4 fs-5 text-center">Leave Approved Successfully</p>
                    </Modal.Body>
                </Modal>
                <Modal centered show={isDeleteModal} onHide={()=>{setDeleteModal(false) }}>
                    <Modal.Header closeButton><h5  style={{backgroundColor:'red'}}  className="modal-title  fw-bold" id="leaverejectLabel"> Leave Reject</h5></Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                        <i className="icofont-sad text-danger display-2 text-center mt-2"></i>
                        <p className="mt-4 fs-5 text-center">Leave Reject</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

              
export default LeaveRequest; 