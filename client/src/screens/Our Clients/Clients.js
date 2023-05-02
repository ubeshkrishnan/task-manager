import React, { useState, useEffect } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import OurClients from "../../components/Clients/OurClients";
import PageHeader from "../../components/common/PageHeader";
// import { OurClientsData} from "../../components/Data/AppData";
import axios from "axios";
// import College from "../../uploads";
import { useHistory, useParams } from "react-router-dom";
import {Url} from "../../Global_variable/api_link"

function Clients() {
  const [isModal, setIsModal] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [modalheader, setModalHeader] = useState(null);
  const [file,setFile] =useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editModeldata, setEditModelData] = useState({
    client_name: "",
    client_shortcode: "",
    vertical_id: "",
    owner_name: "",
    owner_phone: "",
    owner_email: "",
    accounts_contact: "",
    accounts_phone: "",
    accounts_email: "",
    profileImage:{},
    gst_no: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    pin_code: "",
  });

  const handleInputChange = (e) => {
    setEditModelData({
      ...editModeldata,
      [e.target.name]: e.target.value,
    });
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //FETCHING THE DATA

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
const getUsers = () =>{
  axios
  .get(Url+"/users")
  .then((response) => {
    setUsers(response.data);

  })
  .catch((error) => {
    console.log(error);
  });
}

  // const [clientname,setClientName] =useState('');
  // const [clientshortcode,setClientShortCode] =useState('');
  // const [verticalid,setVertical_Id] =useState('');
  // const [ownername,setOwnerName] =useState('');
  // const [ownerphone,setOwnerPhone] =useState('');
  // const [owneremail,setOwnerEmail] =useState('');
  // const [accountscontact,setAccountsContact] =useState('');
  // const [accountsphone,setAccountsPhone] =useState('');
  // const [accountsemail,setAccountsEmail] =useState('');
  // // const [profileimage,setProfileImage] =useState('');
  // const [gstnumber,setGstNumber] =useState('');
  // const [address1,setAddress1] =useState('');
  // const [address2,setAddress2] =useState('');
  // const [city,setCity] =useState('');
  // const [state,setState] =useState('');
  // const [pincode,setPincode] =useState('');

  //INSERTING THE DATA
  const clients = (e) => {
    const{profileImage,client_name,client_shortcode,vertical_id,owner_name,owner_phone,owner_email,accounts_contact,accounts_phone,accounts_email,gst_no,address_line_1,address_line_2,city,state,pin_code} = editModeldata
    console.log(editModeldata);
  //   {
  //     "client_name": "tTtT",
  //     "client_shortcode": "T",
  //     "vertical_id": "T",
  //     "owner_name": "T",
  //     "owner_phone": "T",
  //     "owner_email": "TT",
  //     "accounts_contact": "T",
  //     "accounts_phone": "T",
  //     "accounts_email": "T",
  //     "profileImage": {},
  //     "gst_no": "T",
  //     "address_line_1": "T",
  //     "address_line_2": "T",
  //     "city": "T",
  //     "state": "T",
  //     "pin_code": "T"
  // }
  const fileInput = document.querySelector("input[type='file']");
    const fromData = new FormData()
  
    fromData.append("profileImage",fileInput.files[0]);
    fromData.append("client_name",client_name);
    fromData.append("client_shortcode",client_shortcode);
    fromData.append("vertical_id",vertical_id);
    fromData.append("owner_name",owner_name);
    fromData.append("owner_phone",owner_phone);
    fromData.append("owner_email",owner_email);
    fromData.append("accounts_contact",accounts_contact);
    fromData.append("accounts_phone",accounts_phone);
    fromData.append("accounts_email",accounts_email);
    fromData.append("gst_no",gst_no);
    fromData.append("address_line_1",address_line_1);
    fromData.append("address_line_2",address_line_2);
    fromData.append("city",city);
    fromData.append("state",state);
    fromData.append("pin_code",pin_code);


    e.preventDefault();
    axios
      .post(Url+"/client", fromData)
      .then((response) => {
        console.log(response,'res');
        setIsModal(!isModal);
        setModalHeader("")
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(editModeldata.client_name)
  };

  const Updateclient = async (client,id) => {
    console.log(client, "dahgdsa");
    try {
       const response = await axios.put(Url+`/update/${id}`,client);

      if (response) {
        // Handle the successful response
        console.log(response);
      } else {
      }
    } catch (error) {}
  };

  // const updateClient = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.put(`http://181.215.78.5:3004/update/${clientId}`, {
  //       client_name: editModeldata.client_name,
  //       client_shortcode: editModeldata.client_shortcode,
  //       vertical_id: editModeldata.vertical_id,
  //       owner_name: editModeldata.owner_name,
  //       owner_phone: editModeldata.owner_phone,
  //       owner_email: editModeldata.owner_email,
  //       accounts_contact: editModeldata.accounts_contact,
  //       accounts_phone: editModeldata.accounts_phone,
  //       accounts_email: editModeldata.accounts_email,
  //       gst_no: editModeldata.gst_no,
  //       address_line_1: editModeldata.address_line_1,
  //       address_line_2: editModeldata.address_line_2,
  //       city: editModeldata.city,
  //       state: editModeldata.state,
  //       pin_code: editModeldata.pin_code
  //     });

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //UPDATING THE DATA
  // const Updateclient = (client_id) => {
  //   const data = {
  //     clientname: clientname,

  //     clientshortcode:clientshortcode,
  //     verticalid:verticalid,
  //     ownername:ownername,
  //     ownerphone:ownerphone,
  //     owneremail:owneremail,
  //     accountscontact:accountscontact,
  //     accountsphone:accountsphone,
  //     accountsemail:accountsemail,
  //     // profileimage:profileimage,
  //     gstnumber:gstnumber,
  //     address1:address1,
  //     address2:address2,
  //     city:city,
  //     state:state,
  //     pincode:pincode
  //   };
  //   console.log(data);

  //   axios
  //     .put(`http://181.215.78.5:3004/update/${client_id}`, data)
  //     .then((response) => {
  //       console.log(response.data);
  //       // Update the client name in the users state variable
  //       const updatedUsers = users.map((user) =>
  //         user.client_id === client_id ? { ...user, data } : user
  //       );
  //       setUsers(updatedUsers);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const {client_id} = useParams();

  // useEffect(() => {
  // axios.get('http://181.215.78.5:3004/users/'+client_id)
  // .then((response) => response.json())
  //   .then((response) => {
  //   setClientName(response[0].client_name);
  //   setClientShortCode(response[0].client_shortcode);
  //   setVertical_Id(response[0].vertical_id);
  //   setOwnerName(response[0].owner_name);
  //   setOwnerPhone(response[0].owner_phone);
  //   setOwnerEmail(response[0].owner_email);
  //   setAccountsContact(response[0].accounts_contact);
  //   setAccountsPhone(response[0].accounts_phone);
  //   setAccountsEmail(response[0].accounts_email);
  //   setGstNumber(response[0].gst_no);
  //   setAddress1(response[0].address_line_1);
  //   setAddress2(response[0].address_line_2);
  //   setCity(response[0].city);
  //   setState(response[0].state);
  //   setPincode(response[0].pin_code);

  //   })
  // },[]);

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
  // axios.put('http://181.215.78.5:3004/update', data)
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
  // const demoFun=(e)=>{
  //   setIsModalDelete(true);
  //   // console.log(e.client_id)
  //   let empid=e.client_id
  //   let dataString={
  //     id:empid
  //   }
  //   axios.post('http://181.215.78.5:3004/deleteDemo',dataString)
  //   .then(response => {
  //     console.log('Data deleted successfully!');
  //     setIsModalDelete(false);
  //     // Update the list of data after deletion
  //     // fetchData();
  //   })
  //   .catch(error => {
  //     console.error('Error deleting data:', error);
  //   });
  // }
  // const history = useHistory();
  // const handleDelete = () => {
  //   const data ={
  //     clientname,
  //     clientshortcode,
  //     verticalid,
  //     ownername,
  //     ownerphone,
  //     owneremail,
  //     accountscontact,
  //     accountsphone,
  //     accountsemail,
  //     gstnumber,
  //     address1,
  //     address2,
  //     city,
  //     state,
  //     pincode

  //   }

  //     const fetchData = async () => {
  //       const response = await fetch("http://181.215.78.5:3004/deleteDemo")
  //       const data = await response.json()
  //       setUsers(data)
  //     }

  //   axios.delete(`http://181.215.78.5:3004/deleteDemo/${data.id}`)
  //     .then(response => {
  //       console.log('Data deleted successfully!');
  //       setIsModalDelete(false);
  //       history.push('clients');
  //       // Update the list of data after deletion
  //       fetchData();
  //       // Redirect to the homepage

  //     })
  //     .catch(error => {
  //       console.error('Error deleting data:', error);
  //     });
  //     // console.log("Delete Is Working")
  // }
  // Function to handle DELETE request

  const handleDelete = () => {
    const { client_id } = editModeldata;
    fetch(Url+`/api/clients/${client_id}`, { method: 'DELETE' })
      .then((res) => res.text())
      .then((data) => {
        console.log(data,"delete");
        setIsModalDelete(false);
        getUsers();
        // fetchClients(); // Refresh the client list after deletion?
      })
      .catch((err) => console.error(err));
  };
  
  const fetchClients = () => {
    fetch('/clients')
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"getclinet");
        setUsers(data);
      })
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    fetchClients();
  }, []);


  // img
  const [viewphoto, setViewphoto] = useState([]);

  // useEffect(() => {
  //   fetch("http://181.215.78.5:3004/viewfile")
  //     .then((response) => response.json())
  //     .then((json) => setViewphoto(json));
  // }, []);
  

//   useEffect(()=>{
//     fetch('http://181.215.78.5:3004/Viewfile/')
//     .then(response=>response.json())
//     .then(json=>setViewphoto(json));
// },[]);

const uploadImage = (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("profileImage", file);

  // Send the image data to the server using a POST request
  fetch("/client", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server, if needed
      console.log(data);
    })
    .catch(error => console.error(error));
};


const handlesubmit = (event) => {
    event.preventDefault();
    var datastring = new FormData(event.target);
    var config = {headers:{"enctype":"multipart/form-data"}};

    axios.post(Url+'/Addfile',datastring,config)
    .then(function(response){
        if(response.data.status === 'error'){
            alert('Error');
            window.location.reload();
        }
        else if(response.data.status === 'uploaded'){
            alert('File Uploaded');
            window.location.reload();
        }
        else{
            alert('Contact Admin');
            window.location.reload();
        }
    })
    .catch(function(error){
        alert(error);
        window.location.reload();
    })

}


  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Clients"
        renderRight={() => {
          return (
            <div className="col-auto d-flex">
              {/* <Dropdown>
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
              </Dropdown> */}
              <button
                type="button"
                className="btn btn-dark ms-1"
                onClick={() => {
                  setIsModal(true);
                  setModalHeader("Add Client");
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>Add Client
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
                  avatar={data.profileImage}
                  post={data.owner_name}
                  name={data.client_shortcode}
                  Companyname={data.client_name}
                  onClickEdit={() => {
                    setIsModal(true);
                    setModalHeader("Edit Client");
                    setEditModelData(data);
                  }}
                  onClickDelete={() => {
                    setIsModalDelete(true);
                    setEditModelData({ client_id: data.client_id });
                    
                  }}
                  id={data.client_id}
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
            <form   onSubmit={handlesubmit}>
              <div className="row g-3 mb-3">
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput177"
                    className="form-label"
                  >
                    Client Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="client_name"
                    id="exampleFormControlInput177"
                    value={editModeldata.client_name}
                    onChange={handleInputChange}
                    placeholder="Client Name"
                  />
                </div>

                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput277"
                    className="form-label"
                  >
                    Client ShortCode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="client_shortcode"
                    id="exampleFormControlInput277"
                    value={editModeldata.client_shortcode}
                    onChange={handleInputChange}
                    placeholder="Client ShortCode"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput477"
                    className="form-label"
                  >
                    Vertical ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="vertical_id"
                    id="exampleFormControlInput477"
                    value={editModeldata.vertical_id}
                    onChange={handleInputChange}
                    placeholder="Vertical ID"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput477"
                    className="form-label"
                  >
                    OwnerName
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput477"
                    name="owner_name"
                    value={editModeldata.owner_name}
                    onChange={handleInputChange}
                    placeholder="OwnerName"
                  />
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput477"
                    className="form-label"
                  >
                    Owner Phone
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="owner_phone"
                    id="exampleFormControlInput477"
                    value={editModeldata.owner_phone}
                    onChange={handleInputChange}
                    placeholder="Owner Phone"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput777"
                    className="form-label"
                  >
                    OwnerEmail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="owner_email"
                    id="exampleFormControlInput777"
                    value={editModeldata.owner_email}
                    onChange={handleInputChange}
                    placeholder="OwnerEmail"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput777"
                    className="form-label"
                  >
                    Accounts contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="accounts_contact"
                    id="exampleFormControlInput777"
                    value={editModeldata.accounts_contact}
                    onChange={handleInputChange}
                    placeholder="Accounts contact"
                  />
                </div>
                <div className=" col-lg-6">
                  <label
                    htmlFor="exampleFormControlInput877"
                    className="form-label"
                  >
                    Accounts Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput877"
                    name="accounts_phone"
                    value={editModeldata.accounts_phone}
                    onChange={handleInputChange}
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
                    <label
                      htmlFor="exampleFormControlInput977"
                      className="form-label"
                    >
                      Accounts Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput977"
                      name="accounts_email"
                      value={editModeldata.accounts_email}
                      onChange={handleInputChange}
                      placeholder="Accounts Email"
                    />
                  </div>

                  <div className="mb-3 col-lg-6">
  <label htmlFor="formFileMultipleoneone" className="form-label">
    Profile Image
  </label>
  <input
    className="form-control"
    type="file"
    id="formFileMultipleoneone"
    alt="no"
    onChange={uploadImage}
  />
  {/* Render the uploaded image on the frontend */}
  {viewphoto.map((fileInput) => (
    <img
      key={fileInput.id}
      src={Url+`/uploads/${fileInput.profileImage}`}
      alt="No ---"
      width="200px"
      height="200px"
    />
  ))}
</div>


                  
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput177"
                      className="form-label"
                    >
                      Gst Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="gst_no"
                      id="exampleFormControlInput177"
                      value={editModeldata.gst_no}
                      onChange={handleInputChange}
                      placeholder="Gst Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput277"
                      className="form-label"
                    >
                      Address 1
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address_line_1"
                      id="exampleFormControlInput277"
                      value={editModeldata.address_line_1}
                      onChange={handleInputChange}
                      placeholder="Address 1"
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput477"
                      className="form-label"
                    >
                      Address 2
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="address_line_2"
                      id="exampleFormControlInput477"
                      value={editModeldata.address_line_2}
                      onChange={handleInputChange}
                      placeholder="Address 2"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput777"
                      className="form-label"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      id="exampleFormControlInput777"
                      value={editModeldata.city}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput477"
                      className="form-label"
                    >
                      State
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="state"
                      id="exampleFormControlInput477"
                      value={editModeldata.state}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      htmlFor="exampleFormControlInput777"
                      className="form-label"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="pin_code"
                      id="exampleFormControlInput777"
                      value={editModeldata.pin_code}
                      onChange={handleInputChange}
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="mb-3">          
                            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                        </div>  */}
            {/* <div className="table-responsive">
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
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault1"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault3"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault4"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault5"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault6"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Tasks</td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault7"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault8"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault9"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault10"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault11"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault12"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Chat</td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault13"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault14"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault15"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault16"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault17"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault18"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Estimates</td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault19"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault20"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault21"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault22"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault23"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault24"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Invoices</td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault25"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault26"
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault27"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault28"
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault29"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault30"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Timing Sheets</td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault31"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault32"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault33"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault34"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault35"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault36"
                        checked={true}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              Updateclient(editModeldata,editModeldata.client_id);
            }}
          >
            Done
          </button>
          <button type="button" className="btn btn-primary" onClick={clients}>
            Save
          </button>
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
          <button type="button" onClick={handleDelete} className="btn btn-danger color-fff">
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Clients;