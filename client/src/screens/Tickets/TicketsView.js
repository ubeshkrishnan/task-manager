import React, { useState ,useEffect} from "react";
import DataTable from "react-data-table-component";
import { Modal } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import { TicketsViewData } from "../../components/Data/AppData";
import axios from "axios";
import {Url} from "../../Global_variable/api_link"
import { date } from "yup";

function TicketsView () {
  const [isModal, setIsModal] = useState(false);
  const [siEditModal, setSiEditModal] = useState("");
  const [ticketData, setTicketData] = useState([])
  const [editModeldata, setEditModeldata] = useState({
   

subject:"",
assign_name:"",
created_date:"",
status:"",
  });

const ticket = (e) =>{
  e.preventDefault();
  axios.post(Url+"/ticket_view",{
    subject:editModeldata.subject,
    assign_name:editModeldata.assign_name,
    created_date:editModeldata.created_date,
    status:editModeldata.status,
  })
  .then((response) =>{
    console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  });
};

useEffect(() => {
  axios
    .get(Url+"/getticket")
    .then((response) => {
      if (response && response.data) {
        setTicketData(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const handleInputChange = (e) => {
  setEditModeldata({
    ...editModeldata,
    [e.target.name]: e.target.value,
  });
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};

useEffect(() => {
  axios.get(Url+"/getticket")
    .then(response => {
      const formattedRows = response.data.map(row => ({
      ...row,
      created_date: formatDate(row.created_date)
     
    }));
    
      setTicketData(formattedRows);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


const TicketsView ={
  columnT :[
    {
      name: "TICKET ID",
      selector: () =>{} ,
      sortable: true,
      cell: (row) => (
        <div>
             <div>{row.id}</div>
             
            </div>
      ),
    },
    {
      name: "SUBJECT",
      selector: (row) => row.subject,
      sortable: true,
      cell: (row) => (
        <div>
             <div>{row.subject}</div>
             
            </div>
      )
    },
    {
      name: "ASSIGNED",
      selector: (row) => row.assigned_name,
      sortable: true,
      cell: (row) => (
        <div>
             <div>{row.assign_name}</div>
             
            </div>
      ),
      minWidth: "250px",
    },
    {
      name: "CREATD DATE",
      selector: (row) => row.create_date,
      sortable: true,
      cell: (row) => (
        <div>
             <div>{row.created_date}</div>
             
            </div>
      )
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div>
             <div>{row.status}</div>
             
            </div>
      )
    },
    {
      name: "ACTION",
      selector: (row) => {},
      sortable: true,
      cell: (row) => (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              setSiEditModal(row);
              setIsModal(true);
            }}
          >
            <i className="icofont-edit text-success"></i>
          </button>
          <button type="button" className="btn btn-outline-secondary deleterow">
            <i className="icofont-ui-delete text-danger"></i>
          </button>
        </div>
      ),
    },
  ],
}
  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Tickets"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
             <button className="btn btn-primary" onClick={() => { setIsModal(true); setSiEditModal(""); }}>Add Ticket</button>
            </div>
          );
        }}
      />
      <div className="row clearfix g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <DataTable
                title={TicketsView.title}
                columns={TicketsView.columnT}
                data={ticketData}
                defaultSortField="title"
                pagination
                selectableRows={false}
                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                highlightOnHover={true}
              />
            </div>
          </div>
 </div>
                </div>
                <Modal centered show={isModal} onHide={() => { setIsModal(false); setSiEditModal(""); }}>
       <Modal.Header closeButton>
         <Modal.Title className="fw-bold">{siEditModal !== "" ? "Edit" : "Add"} Ticket</Modal.Title>
       </Modal.Header>
                    <Modal.Body>
                    <div className="mb-3">
      <label  htmlFor="sub" className="form-label">Subject</label>
      <input autoFocus type="text"  className="form-control" id="sub" name="subject" value={editModeldata.subject}
 onChange={handleInputChange} />
    </div>
    <div className="deadline-form">
      <form>
        <div className="row g-3 mb-3">
          <div className="col-lg-6">
            <label htmlFor="depone" className="form-label">Assign Name</label>
            <input type="text" className="form-control" id="depone" name="assign_name" value={editModeldata.assign_name}
 onChange={handleInputChange}/>
          </div>
          <div className="col-lg-6">
            <label htmlFor="deptwo" className="form-label">Created Date</label>
            <input type="date" className="form-control" id="deptwo" name="created_date"  value={editModeldata.created_date} onChange={handleInputChange}/>
          </div>
        </div>
      </form>
    </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="form-select" onChange={handleInputChange}>
                                <option>Select</option>
                                <option value="Completed">Completed</option>
                                <option value="Wating">Wating</option>
                                <option value="Decline">Decline</option>
                            </select>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                       
                        <button type="button" className="btn btn-secondary" onClick={(ticket) => { setIsModal(false); setSiEditModal(""); }}>Done</button>
                        <button type="button" className="btn btn-primary" onClick={ticket} >Sent</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

export default TicketsView;



// import { useState } from 'react';
// import { Modal } from 'react-bootstrap';
// import axios from "axios";
// import {Url} from "../../Global_variable/api_link"
// function TicketsView() {
//   const [isModal, setIsModal] = useState(false);
//   const [siEditModal, setSiEditModal] = useState(null);
  
//   const [subject,setSubject] =useState('');
//   const [assignname,setAssignName] =useState('');
//   const [date,setDate] =useState('');
//   const [status,setStatus] =useState('');

// const ticket = (e)=>{
//     e.preventDefault();
//     axios.post(Url+"/ticket_view",{
//         subject:subject,
//         assignname:assignname,
//         date:date,
//         status:status
//     }).then(response=> {
//         console.log(response);

//     })
//     .catch (error=>{
//         console.log(error);
//     })
    
// }


//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>Tickets</h3>
//         <button className="btn btn-primary" onClick={() => { setIsModal(true); setSiEditModal(""); }}>Add Ticket</button>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Assign Name</th>
//             <th>Created Date</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Sample ticket subject</td>
//             <td>John Doe</td>
//             <td>2022-02-22</td>
//             <td>In Progress</td>
//             <td>
//               <button className="btn btn-primary me-2" onClick={() => { setIsModal(true); setSiEditModal({ subject: "Sample ticket subject", assigned: "John Doe", createdate: "2022-02-22" }); }}>Edit</button>
//               <button className="btn btn-danger">Delete</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <Modal centered show={isModal} onHide={() => { setIsModal(false); setSiEditModal(""); }}>
//         <Modal.Header closeButton>
//           <Modal.Title className="fw-bold">{siEditModal !== "" ? "Edit" : "Add"} Ticket</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="mb-3">
//             <label htmlFor="sub" className="form-label">Subject</label>
//             <input type="text" className="form-control" id="sub" onChange={(e) =>setSubject(e.target.value)} value={siEditModal ?siEditModal.subject:subject} />
//           </div>
//           <div className="deadline-form">
//             <form >
//               <div className="row g-3 mb-3">
//                 <div className="col-lg-6">
//                   <label htmlFor="depone" className="form-label">Assign Name</label>
//                   <input type="text" className="form-control" id="depone" onChange={(e) => setAssignName(e.target.value)} value={siEditModal ? siEditModal.assignname:assignname} />
//                 </div>
//                 <div className="col-lg-6">
//                   <label htmlFor="deptwo" className="form-label">Created Date</label>
//                   <input type="date" className="form-control" id="deptwo" onChange={(e) =>setDate(e.target.value) } value={siEditModal ? siEditModal.date:date} />
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Status</label>
//             <select className="form-select" onChange={(e) =>setStatus(e.target.value) } >
//               <option>In Progress</option>
//               <option value="1">Completed</option>
//               <option value="2">Wating</option>
//               <option value="3">Decline</option>
//             </select>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false); setSiEditModal(""); }}>Done</button>
//           <button type="button" className="btn btn-primary" onClick={ticket}>Sent</button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         )
//     }


// export default TicketsView;