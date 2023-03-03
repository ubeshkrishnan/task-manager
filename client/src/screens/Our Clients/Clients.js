import React, { useState,useEffect } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import OurClients from "../../components/Clients/OurClients";
import PageHeader from "../../components/common/PageHeader";
// import { OurClientsData} from "../../components/Data/AppData";
import axios from "axios";
// import College from "../../assets/images/gct.jpg";
import {useHistory} from "react-router-dom"
// import {File_url , Url} from "../Global_variable/"


function Clients() {
  const [isModal, setIsModal] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [modalheader, setModalHeader] = useState(null);
  const [editModeldata, setEditModelData] = useState("");

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

//FETCHING THE DATA

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [clientname,setClientName] =useState('');
  const [clientshortcode,setClientShortCode] =useState('');
  const [verticalid,setVertical_Id] =useState('');
  const [ownername,setOwnerName] =useState('');
  const [ownerphone,setOwnerPhone] =useState('');
  const [owneremail,setOwnerEmail] =useState('');
  const [accountscontact,setAccountsContact] =useState('');
  const [accountsphone,setAccountsPhone] =useState('');
  const [accountsemail,setAccountsEmail] =useState('');
  const [description,setDescription]=useState('');
  const [gstnumber,setGstNumber] =useState('');
  const [address1,setAddress1] =useState('');
  const [address2,setAddress2] =useState('');
  const [city,setCity] =useState('');
  const [state,setState] =useState('');
  const [pincode,setPincode] =useState('');
  const [file,setFile] = useState("");

// IMAGE
// const File_url = "http://localhost:3000/uploads/";
  
var formData = new  FormData();
  formData.append("photo",file)
  
  const config = {
    headers:{
        "Content-Type":"multipart/form-data"
    }
  }

  try {
    const res =  axios.post("/upload", formData, config);
console.log(res)
    if(res.data.status === 201){
      // history("/")
    } else {
      console.log("error")
    }
  } catch (error) {
    console.log(error);
  }



//INSERTING THE DATA
const clients = (e) => {
  e.preventDefault();

  const formData = new FormData();
  const data = {
    photo: file,
    clientname,
    clientshortcode,
    verticalid,
    ownername,
    ownerphone,
    owneremail,
    accountscontact,
    accountsphone,
    accountsemail,
    description,
    gstnumber,
    address1,
    address2,
    city,
    state,
    pincode
  };
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  axios
    .post("http://localhost:3001/client", formData)
    .then((response) => {
      console.log(response);
      if (response.data.status === 201) {
        // history("/")
      } else {
        console.log("error");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const setimgfile = (e) => {
  setFile(e.target.files[0]);
};

//UPDATING THE DATA
const updateClient = (id) => {
  const data = {
    client_name: clientname,
    clientshortcode:clientshortcode,
    verticalid:verticalid,
    ownername:ownername,
    ownerphone:ownerphone,
    owneremail:owneremail,
    accountscontact:accountscontact,
    accountsphone:accountsphone,
    accountsemail:accountsemail,
    // file:file,
    description:description,
    gstnumber:gstnumber,
    address1:address1,
    address2:address2,
    city:city,
    state:state,
    pincode:pincode
  };

  axios
    .put(`http://localhost:3001/update/${id}`, data)
    .then((response) => {
      console.log(response.data);
      // Update the client name in the users state variable
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, client_name: clientname } : user
      );
      setUsers(updatedUsers);
    })
    .catch((error) => {
      console.log(error);
    });
};






// const handleupdate =() =>{
//   const data ={
//   clientname,
//   clientshortcode,
//   verticalid,
//   ownername,
//   ownerphone,
//   owneremail,
//   accountscontact,
//   accountsphone,
//   accountsemail,
//   gstnumber,
//   address1,
//   address2,
//   city,
//   state,
//   pincode

// }
// axios.put('http://localhost:3001/update', data)
//     .then(response => {
//       // Handle the success response from the server
//       console.log('Data updated successfully!');
//       setIsModal(false);
//       setEditModelData("");
//     })
//     .catch(error => {
//       // Handle the error response from the server
//       console.error('Error updating data:', error);
//     });
//   }
// delete the fields
const demoFun=(e)=>{
  setIsModalDelete(true);
  // console.log(e.client_id)
  let empid=e.client_id
  let dataString={
    id:empid
  }
  axios.post('http://localhost:3001/deleteDemo',dataString)
  .then(response => {
    console.log('Data deleted successfully!');
    setIsModalDelete(false);
    // Update the list of data after deletion
    // fetchData();
  })
  .catch(error => {
    console.error('Error deleting data:', error);
  });
}
const history = useHistory();
const handleDelete = () => {
  const data ={
    clientname,
    clientshortcode,
    verticalid,
    ownername,
    ownerphone,
    owneremail,
    accountscontact,
    description,
    accountsphone,
    accountsemail,
    gstnumber,
    address1,
    address2,
    city,
    state,
    pincode
  
  }
  
  
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/delete")
      const data = await response.json()
      setUsers(data)
    }

  axios.delete(`http://localhost:3001/delete/${data.id}`)
    .then(response => {
      console.log('Data deleted successfully!');
      setIsModalDelete(false);
      history.push('/clients');
      // Update the list of data after deletion
      fetchData();
      // Redirect to the homepage
     
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
    // console.log("Delete Is Working")
}


  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Clients"
        renderRight={() => {
          return (
            <div className="col-auto d-flex">
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
                      Macrosoft
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Google
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Pixelwibes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Deltasoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Design Tech
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
              <button
                type="button"
                className="btn btn-dark ms-1"
                onClick={() => {
                  setIsModal(true);
                  setModalHeader("Add Client");
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6" ></i>Add Client
              </button>
            </div>
          );
        }}
      />
    {/* <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
     {/*  {OurClientsData.map((data, i) => {
          return (
            <div key={"skhd" + i} className="col">
              <OurClients
                avatar={data.avatar}
                post={data.clie}
                name={data.name}
                Companyname={data.Companyname}
                onClickEdit={() => {
                  setIsModal(true);
                  setModalHeader("Edit Client");
                  setEditModelData(data);
                }}
                onClickDelete={() => {
                  setIsModalDelete(true);
                }}
              />
            </div>
          );
        })}
      </div>*/}

        <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
        {users.map((data, i) => {
          return (
            <div key={"skhd" + i} className="col">
              <div>
             
              <OurClients
              
                avatar ={data.file_name}
                 post={data.owner_name}
                 name={data.client_shortcode}
                 Companyname={data.client_name}
                 details={data.description}
                onClickEdit={() => {
                  setIsModal(true);
                  setModalHeader("Edit Client");
                  setEditModelData(data);
                }}
                onClickDelete={() => {(demoFun(data))
                  setIsModalDelete(true);


                }}
                />
                
              </div>
            </div>
          );
        })}
      </div>
      
<Modal
        size="xl"
        centered
        show={isModal}
        onHide={() => {
          setIsModal(false);
          setEditModelData("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{modalheader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Client Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" value={editModeldata.client_name}  onChange={(e) =>setClientName(e.target.value) } placeholder="Client Name" />
                                    
                                </div>
                                
                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Client ShortCode</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput277" value={editModeldata.client_shortcode} onChange={(e) =>setClientShortCode(e.target.value) } placeholder="Client ShortCode" />
                                </div>
                                <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">Vertical ID</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" value={editModeldata.vertical_id} onChange={(e) =>setVertical_Id(e.target.value) } placeholder="Vertical ID" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">OwnerName</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" name="clientname" value={editModeldata.owner_name} onChange={(e) =>setOwnerName(e.target.value) } placeholder="OwnerName" />
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">Owner Phone</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" value={editModeldata.owner_phone} onChange={(e) =>setOwnerPhone(e.target.value) } placeholder="Owner Phone" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">OwnerEmail</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777"  value={editModeldata.owner_email} onChange={(e) =>setOwnerEmail(e.target.value) } placeholder="OwnerEmail" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">Accounts contact</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" value={editModeldata.accounts_contact} onChange={(e) =>setAccountsContact(e.target.value) } placeholder="Accounts contact" />
                                    </div>
                                    <div className=" col-lg-6"  >
                
              <label
                htmlFor="exampleFormControlInput877" className="form-label">
                Accounts Phone</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput877"
                value={editModeldata.accounts_phone}
                onChange={(e) =>setAccountsPhone(e.target.value) } 
                placeholder="Accounts Phone"
              />
                </div>
                                </div>
                                
                            </form>
                        </div>
          <div className="modal-body">
     
          <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                <div className=" col-lg-6 ">
                <label htmlFor="exampleFormControlInput977" className="form-label">Accounts Email</label>
                <input type="text" className="form-control" id="exampleFormControlInput977" value={editModeldata.accounts_email} onChange={(e) =>setAccountsEmail(e.target.value) } placeholder="Accounts Email" />
            </div>
            
            <div className="mb-3 col-lg-6">
  <label htmlFor="formFileMultipleoneone" className="form-label">Profile Image</label>   
  <div className="input-group">
    <input className="form-control" type="file" onChange={setimgfile} id="formFileMultipleoneone" name="photo" accept="image/*" />
    {/* <button className="btn btn-primary" type="button" onClick={uploadFile}>Upload</button> */}
    
  </div>
</div>

                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Gst Number</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" value={editModeldata.gst_no} onChange={(e) =>setGstNumber(e.target.value) } placeholder="Gst Number" />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Address 1</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput277" value={editModeldata.address_line_1} onChange={(e) =>setAddress1(e.target.value) } placeholder="Address 1" />
                                </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">Address 2</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" value={editModeldata.address_line_2} onChange={(e) =>setAddress2(e.target.value) } placeholder="Address 2" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">City</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" value={editModeldata.city} onChange={(e) =>setCity(e.target.value) } placeholder="City" />
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">State</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" value={editModeldata.state} onChange={(e) =>setState(e.target.value) } placeholder="State" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">Pincode</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" value={editModeldata.pin_code} onChange={(e) =>setPincode(e.target.value) } placeholder="Enter Phone" />
                                    </div>
                                    <div className="mb-3">          
                            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request" value={editModeldata.description} onChange={(e) =>setDescription(e.target.value) }></textarea>
                        </div> 
                                </div>
                            </form>
                        </div>
                        {/* <div className="mb-3">          
                            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                        </div>  */}
                        <div className="table-responsive">
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
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"  checked={isChecked}
                                            onChange={handleCheckboxChange} />
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
                                    </tr>
                                    <tr>
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
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button type="button" className="btn btn-secondary" >Done</button>
                    <button type="button" className="btn btn-primary"  onClick={clients} >Savee</button>
                </Modal.Footer>
            </Modal>
            <Modal show={isModalDelete} centered onHide={() => { setIsModalDelete(false) }}>
                <Modal.Header closeButton>
                <Modal.Title className="fw-bold">Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center flex-column d-flex">
                    <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                    <p className="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                </Modal.Body>
                <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={() => ({ setIsModalDelete:false })}>Cancel</button>
                    <button type="button" className="btn btn-danger color-fff" onClick={handleDelete}>Delete</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Clients;