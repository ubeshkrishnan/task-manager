import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Axios from "axios";

function TicketsView() {
  const [isModal, setIsModal] = useState(false);
  const [siEditModal, setSiEditModal] = useState(null);
  
  const [subject,setSubject] =useState('');
  const [assignname,setAssignName] =useState('');
  const [date,setDate] =useState('');
  const [status,setStatus] =useState('');

const ticket = (e)=>{
    e.preventDefault();
    Axios.post("http://localhost:3005/insert",{
        subject:subject,
        assignname:assignname,
        date:date,
        status:status
    }).then(response=> {
        console.log(response);

    })
    .catch (error=>{
        console.log(error);
    })
    
}


  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Tickets</h3>
        <button className="btn btn-primary" onClick={() => { setIsModal(true); setSiEditModal(""); }}>Add Ticket</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assign Name</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample ticket subject</td>
            <td>John Doe</td>
            <td>2022-02-22</td>
            <td>In Progress</td>
            <td>
              <button className="btn btn-primary me-2" onClick={() => { setIsModal(true); setSiEditModal({ subject: "Sample ticket subject", assigned: "John Doe", createdate: "2022-02-22" }); }}>Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal centered show={isModal} onHide={() => { setIsModal(false); setSiEditModal(""); }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{siEditModal !== "" ? "Edit" : "Add"} Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="sub" className="form-label">Subject</label>
            <input type="text" className="form-control" id="sub" onChange={(e) =>setSubject(e.target.value)} value={siEditModal ?siEditModal.subject:subject} />
          </div>
          <div className="deadline-form">
            <form >
              <div className="row g-3 mb-3">
                <div className="col-lg-6">
                  <label htmlFor="depone" className="form-label">Assign Name</label>
                  <input type="text" className="form-control" id="depone" onChange={(e) => setAssignName(e.target.value)} value={siEditModal ? siEditModal.assignname:assignname} />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="deptwo" className="form-label">Created Date</label>
                  <input type="date" className="form-control" id="deptwo" onChange={(e) =>setDate(e.target.value) } value={siEditModal ? siEditModal.date:date} />
                </div>
              </div>
            </form>
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" onChange={(e) =>setStatus(e.target.value) } >
              <option>In Progress</option>
              <option value="1">Completed</option>
              <option value="2">Wating</option>
              <option value="3">Decline</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false); setSiEditModal(""); }}>Done</button>
          <button type="button" className="btn btn-primary" onClick={ticket}>Sent</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }


export default TicketsView;