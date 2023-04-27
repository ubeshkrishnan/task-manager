import React, { useState,useEffect } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import OurClients from "../../components/Clients/OurClients";
import PageHeader from "../../components/common/PageHeader";
// import { MembersData } from "../../components/Data/AppData";
import axios from "axios";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import {Url} from "../../Global_variable/api_link"

function Members(){
  const [isModal, setIsModal] = useState(false);
  const [modalheader, setModalHeader] = useState(null);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [editModeldata, setEditModelData] = useState({
    user_role_id: "",
    user_group_id: "",
    first_name: "",
    last_name: "",
    email: "",
   designation: "",
    phone: "",
    password: "",
    address: "",
    
  });
  const handleInputChange = (e) => {
    setEditModelData({
      ...editModeldata,
      [e.target.name]: e.target.value,
    });
  };

  // INSERTING DATA

  const members =(e)=>{
    e.preventDefault();
    axios.post(Url +"/member",{
    userId:editModeldata.user_role_id,
    userGroup:editModeldata.user_group_id,
    firstname:editModeldata.first_name,
    lastname:editModeldata.last_name,
    email:editModeldata.user_email,
    designation:editModeldata.designation,
    phone:editModeldata.phone,
    password:editModeldata.password,
    address:editModeldata.address

    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  }

  // GETTING DATA
const[membersData,setMembersData] = useState([])

useEffect(() => {
  axios
    .get(Url +"/getmembers")
    .then((response) => {
      setMembersData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const Updatemember = async (member,id) => {
  
  console.log(member, "dahgdsa");
  try {
     const response = await axios.put(Url +`/memberupdate/${id}`,member);

    if (response) {
      // Handle the successful response
      console.log(response);
    } else {
    }
  } catch (error) {}
};
const handleDelete = () => {
  const { user_id } = editModeldata;
  fetch(Url +`/delete_member/${user_id}`, { method: 'DELETE' })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      setIsModalDelete(false);
      fetchMember(); // Refresh the client list after deletion
    })
    .catch((err) => console.error(err));
};

const fetchMember = () => {
  fetch('/members')
    .then((res) => res.json())
    .then((data) => {
      setMembersData(data);
    })
    .catch((err) => console.error(err));
};

useEffect(() => {
  fetchMember();
}, []);


const [roles, setRoles] = useState([]);
useEffect(() => {
  axios.get(Url +'/roles')
    .then(response => {
      setRoles(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

const[groups,setGroup] = useState([]);
useEffect(() => {
  axios.get(Url +'/groups')
  .then(response => {
    setGroup(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}, []);

  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Employee"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                className="btn btn-dark btn-set-task w-sm-100 me-2"
                onClick={() => {
                  setIsModal(true);
                  setModalHeader("Add Employee");
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>Add Employee
              </button>
              <Dropdown>
                <Dropdown.Toggle as="button" className="btn btn-primary ">
                  Status
                </Dropdown.Toggle>
                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      AgilSoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Design Tech
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        }}
      />
      <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
        {membersData.map((data, i) => {
          return (
            <div key={"skhd" + i} className="col">
              <OurClients
                avatar={Avatar3}
               name={data.designation}
                Companyname={data.first_name}
                isMember={true}
                onClickEdit={() => {
                  setIsModal(true);
                  setModalHeader("Edit Member");
                  setEditModelData(data);
                }}
                onClickDelete={() => {
                  setIsModalDelete(true);
                  setEditModelData({ user_id: data.user_id });
                }}
                id={data.user_id}
              />
            </div>
          );
        })}
      </div>
      <Modal
        centered
        show={isModal}
        size="lg"
        onHide={() => {
          setIsModal(false);
          setEditModelData("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{modalheader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
           {/* <div className="mb-3">
              <label htmlFor="exampleFormControlInput877" className="form-label">
                 First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput877"
                placeholder="Explain what the Project Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput977" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput977"
                placeholder="Explain what the Project Name"
              />
            </div>
           <div className="mb-3">
              <label htmlFor="formFileMultipleoneone" className="form-label">
                Employee Profile Image
              </label>
              <input className="form-control" type="file" id="formFileMultipleoneone" />
      </div>*/}
            <div className="deadline-form">
              <form>
                <div className="row g-3 mb-3">
                
                <div className="col-sm-6">
                                      <label htmlFor="exampleFormControlInput1778" className="form-label">Role ID</label>
                                      <select className="form-select" name="user_role_id" onChange={handleInputChange} value={editModeldata.user_role_id} id="exampleFormControlInput1778">
                                      <option value="">Select a role</option>
                                      {roles.map(role => (
                                        <option key={role.id} value={role.id}>{role.user_role_id}</option>
                                      ))}
                                    </select>
                                     </div>
                                     <div className="col-sm-6">
                                         <label htmlFor="exampleFormControlInput2778" className="form-label">Group ID</label>
                                         <select className="form-select" name="user_group_id" onChange={handleInputChange} value={editModeldata.user_group_id} id="exampleFormControlInput1778">
                                      <option value="">Select a group</option>
                                      {groups.map(group => (
                                        <option key={group.id} value={group.id}>{group.user_group_id}</option>
                                      ))}
                                    </select>
                                         </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-lg-6">
                                         <label htmlFor="exampleFormControlInput177" className="form-label">First Name</label>
                                        <input type="text" className="form-control"  name="first_name" onChange={handleInputChange} value={editModeldata.first_name} id="exampleFormControlInput177" placeholder="First Name" />                                     </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput277" className="form-label">Last Name</label>
                                        <input type="text" className="form-control"  name="last_name" onChange={handleInputChange} value={editModeldata.last_name} id="exampleFormControlInput277" placeholder="Last Name" />
                                     </div>
                                 </div>
                                 <div className="row g-3 mb-3">
                                     <div className="col-lg-6">
                                         <label htmlFor="exampleFormControlInput477" className="form-label">Email ID</label>
                                         <input type="email" className="form-control"  name="user_email" onChange={handleInputChange} value={editModeldata.user_email} id="exampleFormControlInput477" placeholder="Email ID" />
                                     </div>
                                     <div className="col-lg-6">
                                         <label htmlFor="exampleFormControlInput777" className="form-label">Designation</label>
                                         <select className="form-select" name="designation" onChange={handleInputChange} value={editModeldata.designation} id="exampleFormControlInput1778">
                                         <option value="">Select a designation</option>
                                         {roles.map(role => (
                                           <option key={role.id} value={role.id}>{role.user_role}</option>
                                         ))}
                                       </select>
                                     </div>
                                 </div>

                                 <div className="row g-3 mb-3">
                                 <div className="col-lg-6">
                                     <label htmlFor="exampleFormControlInput477" className="form-label">Password</label>
                                     <input type="password" className="form-control"  name="password" onChange={handleInputChange} value={editModeldata.password} id="exampleFormControlInput477" placeholder="Password" />
                                 </div>
                                 <div className="col-lg-6">
                                     <label htmlFor="exampleFormControlInput777" className="form-label">Phone</label>
                                     <input type="text" className="form-control"  name="phone" onChange={handleInputChange} value={editModeldata.phone} id="exampleFormControlInput777" placeholder="User Phone" />
                                 </div>
                             </div>
                             <div className="mb-3">          
                             <label htmlFor="exampleFormControlTextarea78" className="form-label">Address</label>
                             <textarea className="form-control"  name="address" onChange={handleInputChange} value={editModeldata.address} id="exampleFormControlTextarea78" rows="3" placeholder="User Address"></textarea>
                         </div> 
                         </div>
                         </form>
                         </div>

                                {/*<div className="row g-3 mb-3">
                                    <div className="col">
                                        <label className="form-label">Department</label>
                                        <select className="form-select" >
                                            <option >Web Development</option>
                                            <option value="1">It Management</option>
                                            <option value="2">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Designation</label>
                                        <select className="form-select" >
                                            <option >UI/UX Design</option>
                                            <option value="1">Website Design</option>
                                            <option value="2">App Development</option>
                                            <option value="3">Quality Assurance</option>
                                            <option value="4">Development</option>
                                            <option value="5">Backend Development</option>
                                            <option value="6">Software Testing</option>
                                            <option value="7">Website Design</option>
                                            <option value="8">Marketing</option>
                                            <option value="9">SEO</option>
                                            <option value="10">Other</option>
                                        </select>
                                    </div>
    </div>*/}
                         
                       {/*  <div className="table-responsive">
                             <table className="table table-striped custom-table">
                                 <thead>
                                     <tr>
                                         <th>Project Permission</th>
                                         <th className="text-center">Read</th>
                                         <th className="text-center">Write</th>
                                         <th className="text-center">Create</th>
                                         <th className="text-center">Delete</th>
                                         <th className="text-center">Import</th>
                                         <th className="text-center">Export</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td className="fw-bold">Projects</td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={true} onChange={()=>{}} />
                                         </td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked={true} onChange={()=>{}} />
                                         </td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={true} onChange={()=>{}} />
                                         </td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" checked={true} onChange={()=>{}} />
                                         </td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" checked={true} onChange={()=>{}} />
                                         </td>
                                         <td className="text-center">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" checked={true} onChange={()=>{}} />
                                         </td>
                                     </tr>
                                     <tr>
                                         <td className="fw-bold">Tasks</td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                     </tr>
                                     <tr>
                                         <td className="fw-bold">Chat</td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                     </tr>                                     <tr>
                                         <td className="fw-bold">Estimates</td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                       <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault21" checked={true} onChange={()=>{}} />
                                            </td>
                        
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault23" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault24" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                     </tr>
                                     <tr>
                                         <td className="fw-bold">Invoices</td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault25" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault26" />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault28" />
                        
                                         </td>
                                         <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault29" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault30" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                     </tr>
                                     <tr>
                                         <td className="fw-bold">Timing Sheets</td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault31" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                        <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault32" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                        <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault34" checked={true} onChange={()=>{}} />
                        
                                         </td>
                                         <td className="text-center">
                        
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault35" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault36" checked={true} onChange={()=>{}} />
                        
                                      </td>
                                    </tr>
                               </tbody>
                             </table>
      </div>*/}
                     </div>
                     </Modal.Body>                     
                     <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={() =>{Updatemember(editModeldata,editModeldata.user_id)}}>Done</button>
                        <button type="button" className="btn btn-primary" onClick={members}>Sent</button>
                    </Modal.Footer>
                </Modal>
                <Modal
                show={isModalDelete}
                centered
                onHide={() => {
                  setIsModalDelete(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fw-bold">Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center flex-column d-flex">
                  <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                  <p className="mt-4 fs-5 text-center">
                    You can only delete this item Permanently
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsModalDelete(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger color-fff" onClick={handleDelete}>
                    Delete
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }
 

export default Members;