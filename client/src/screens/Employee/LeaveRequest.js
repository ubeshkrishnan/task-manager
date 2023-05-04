// import React,{useState} from "react";
// import { Modal } from "react-bootstrap";
// import DataTable from "react-data-table-component";
// import PageHeader from "../../components/common/PageHeader";
// import { LeaveRequestData } from "../../components/Data/AppData";

// var columnT="";
// class LeaveRequest extends React.Component{
//     state={
//         isModal:false,
//         isEditModal:false,
//         isDeleteModal:false
//     }
//     componentWillMount(){
//         columnT=[
//             {
//                 name: "EMPLOYEE ID",
//                 selector: row=>row.employeeId,
//                 sortable: true,
//                 cell:row=><a href="members-profile" className="fw-bold text-secondary">{row.employeeId}</a>
//             },
//             {
//                 name: "EMPLOYEE NAME",
//                 selector: row=>{},
//                 sortable: true,
//                 cell:row=><> <img className="avatar rounded-circle" src={row.image} alt=""></img> 
//                             <span className="fw-bold ms-1">{row.employeeName}</span>
//                         </>
//             },
//             {
//                 name: "LEAVE TYPE",
//                 selector: row=>row.leavetype,
//                 sortable: true
//             },
//             {
//                 name: "FROM",
//                 selector: row=>row.from,
//                 sortable: true
//             },
//             {
//                 name: "TO",
//                 selector: row=>row.to,
//                 sortable: true
//             },
//             {
//                 name: "REASON",
//                 selector: row=>row.reason,
//                 sortable: true
//             },
//             {
//                 name: "ACTION",
//                 selector: row=>{},
//                 sortable: true,
//                 cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
//                             <button type="button" className="btn btn-outline-secondary" onClick={()=>{ this.setState({ isEditModal:true }) }}><i className="icofont-check-circled text-success"></i></button>
//                             <button type="button" className="btn btn-outline-secondary deleterow" onClick={()=>{ this.setState({ isDeleteModal:true }) }}><i className="icofont-close-circled text-danger"></i></button>
//                         </div>
//             }
    
//         ]
//     }
//     render(){
//         const {isModal,isEditModal,isDeleteModal} = this.state;
//         return(
//             <div className="container-xxl">
//                 <PageHeader headerTitle="Leave Request" renderRight={()=>{
//                     return <div className="col-auto d-flex w-sm-100">
//                                 <button className="btn btn-dark btn-set-task w-sm-100" onClick={()=>{ this.setState({isModal:true}) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Leave</button>
//                             </div>
//                 }}/>
//                 <div className="row clearfix g-3">
//                     <div className="col-sm-12">
//                         <DataTable
//                             title={LeaveRequestData.title}
//                             columns={columnT}
//                             data={LeaveRequestData.rows}
//                             defaultSortField="title"
//                             pagination
//                             selectableRows={false}
//                             className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
//                             highlightOnHover={true}
//                             />
//                     </div>
//                 </div>
//                 <Modal centered show={isModal} onHide={()=>{this.setState({isModal:false}) }}>
//                     <Modal.Header closeButton>
//                      <Modal.Title className="fw-bold">Add Leave</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div className="mb-3">
//                             <label className="form-label">Select Leave type</label>
//                             <select className="form-select">
//                                 <option >Medical Leave</option>
//                                 <option value="1">Casual Leave</option>
//                                 <option value="2">Maternity Leave</option>
//                             </select>
//                         </div>
//                         <div className="deadline-form">
//                             <form>
//                                 <div className="row g-3 mb-3">
//                                 <div className="col-sm-6">
//                                     <label htmlFor="datepickerdedass" className="form-label">Leave From Date</label>
//                                     <input type="date" className="form-control" id="datepickerdedass"/>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <label htmlFor="datepickerdedoneddsd" className="form-label">Leave to Date</label>
//                                     <input type="date" className="form-control" id="datepickerdedoneddsd" />
//                                 </div>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="exampleFormControlTextarea78d" className="form-label">Leave Reason</label>
//                             <textarea className="form-control" id="exampleFormControlTextarea78d" rows="3"></textarea>
//                         </div>

//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({isModal:false}) }}>Done</button>
//                         <button type="button" className="btn btn-primary">Save</button>
//                     </Modal.Footer>
//                 </Modal>
//                 <Modal centered show={isEditModal} onHide={()=>{this.setState({isEditModal:false}) }}>
//                     <Modal.Header closeButton><h5 className="modal-title  fw-bold" id="dremovetaskLabel"> Leave Approve</h5></Modal.Header>
//                     <Modal.Body className="justify-content-center flex-column d-flex">
//                         <i className="icofont-simple-smile text-success display-2 text-center mt-2"></i>
//                         <p className="mt-4 fs-5 text-center">Leave Approve Successfully</p>
//                     </Modal.Body>
//                 </Modal>
//                 <Modal centered show={isDeleteModal} onHide={()=>{this.setState({isDeleteModal:false}) }}>
//                     <Modal.Header closeButton><h5 className="modal-title  fw-bold" id="leaverejectLabel"> Leave Reject</h5></Modal.Header>
//                     <Modal.Body className="justify-content-center flex-column d-flex">
//                         <i className="icofont-sad text-danger display-2 text-center mt-2"></i>
//                         <p className="mt-4 fs-5 text-center">Leave Reject</p>
//                     </Modal.Body>
//                 </Modal>
//             </div>
//         )
//     }
// }

// export default LeaveRequest; 

import React,{useState,useEffect} from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { LeaveRequestData } from "../../components/Data/AppData";
import axios from "axios";
import {Url} from "../../Global_variable/api_link"


const LeaveRequest = () => {
    const [isModal, setModal] = useState(false);
    const [isEditModal, setEditModal] = useState(false);
    const [isDeleteModal, setDeleteModal] = useState(false);
    // const [editModeldata, setEditModelData] = useState({
    //     leave_type: "",
    //    from_date: "",
    //     to_date: "",
    //     reason: "",
        
        
    //   });
    //   const handleInputChange = (e) => {
    //     setEditModelData({
    //       ...editModeldata,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    //   // INSERTING DATA
    
    //   const leaves =(e)=>{
    //     e.preventDefault();
    //     axios.post("http://localhost:3001/leave",{
    //     leave_type:editModeldata.leave_type,
    //     from_date:editModeldata.from_date,
    //     to_date:editModeldata.to_date,
    //     reason:editModeldata.reason,
       
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    
    //   }

   
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      };
      const [leaves, setLeaves] = useState([]);
      useEffect(() => {
        axios.get(Url+'/leavecard')
          .then(response => {
            const formattedRows = response.data.map(row => ({
            ...row,
            from_date: formatDate(row.from_date),
            to_date: formatDate(row.to_date)
          }));
          
            setLeaves(formattedRows);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      

      const LeaveRequestData = 
      {
          columns:[
              {
                  name: " ID",
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
                name: "EMP ID",
                selector: (row) => row.emp_id,
                sortable: true,
                cell:(row) => {
                  return (
                    <div>
                      <div>{row.emp_id}</div>
                     
                    </div>
                  );
                }
              },
              {
                name: "EMP NAME",
                selector: (row) => row.emp_name,
                sortable: true,
                cell:(row) => {
                  return (
                    <div>
                      <div>{row.emp_name}</div>
                     
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
            selector: (row) =>row.action,
            sortable: true,
            cell:(row) => {
                return(
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                          {/*  <button type="button" className="btn btn-outline-secondary"onClick={() => { setEditModal(true); handleRowClick(row) }}><i className="icofont-check-circled text-success"></i></button>
                <button type="button" className="btn btn-outline-secondary deleterow" onClick={()=>{ setDeleteModal(true) }}><i className="icofont-close-circled text-danger"></i></button>*/}
                <select value={row.action} onChange={(event) => handleActionChange(row, event)}>
                <option value="Pending" style={{backgroundColor:"red"}}>Pending</option>
                <option value="Approved" className="approved-option">Approved</option>
                <option value="Declined" className="declined-option">Declined</option>
              </select>     
                </div>
                )
             
          }
        },
         
        ]
      }
       
      
       
      const handleActionChange = (row, event) => {
        const newAction = event.target.value;
        axios.put(Url+`/api/leaves/${row.id}`, { action: newAction })
          .then(response => {
            if (response.status === 200) {
              setLeaves(prevRows => prevRows.map(prevRow => prevRow.id === row.id ? { ...prevRow, action: newAction } : prevRow));
              console.log(response);
              // success
              console.log(response);
            } else {
              // handle error
            }
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      };
      
  
    return (
      <div className="container-xxl">
        <PageHeader headerTitle="Leave Request" renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
             {/* <button className="btn btn-dark btn-set-task w-sm-100" onClick={() => { setModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Leave</button>*/}
            </div>
          );
        }} />
        <div className="row clearfix g-3">
          <div className="col-sm-12">
            <DataTable
              title={LeaveRequestData.title}
              columns={LeaveRequestData.columns}
              data={leaves}
              defaultSortField="title"
              pagination
              selectableRows={false}
              className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
              highlightOnHover={true}
            />
          </div>
        </div>
    {/*<Modal centered show={isModal} onHide={() => { setModal(false) }}>
        <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
            <label className="form-label">Select Leave type</label>
            <select className="form-select" name="leave_type" onChange={handleInputChange} value={editModeldata.leave_type}>
            <option >Select Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Permission">Permission</option>
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
    </Modal>*/}
                <Modal centered show={isEditModal} onHide={()=>{setEditModal(false) }}>
                    <Modal.Header closeButton><h5  style={{backgroundColor:'green'}}   className="modal-title  fw-bold" id="dremovetaskLabel"> Leave Approve</h5></Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                        <i className="icofont-simple-smile text-success display-2 text-center mt-2"></i>
                        <p className="mt-4 fs-5 text-center">Need to accept Leave</p>
                        {/*<button onClick={handleApprove}>Yes</button>*/}
                        <button onClick={() => setEditModal(false)}>NO</button>
                    </Modal.Body>
                </Modal>
                <Modal centered show={isDeleteModal} onHide={()=>{setDeleteModal(false) }}>
                    <Modal.Header closeButton><h5 style={{backgroundColor:'red'}} className="modal-title  fw-bold" id="leaverejectLabel"> Leave Reject</h5></Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                        <i className="icofont-sad text-danger display-2 text-center mt-2"></i>
                        <p className="mt-4 fs-5 text-center">Leave Reject</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

              
export default LeaveRequest; 
