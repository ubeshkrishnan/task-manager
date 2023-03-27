
import React,{useState,useEffect} from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import CurrentClientProject from "../../../components/Clients/CurrentClientProject";
import AddNewUserModal from "../../../components/common/AddNewUserModal";
import PageHeader from "../../../components/common/PageHeader";
// import { ProjectCardData } from "../../components/Data/AppData";
import axios from "axios";
import Table from './PTable'
import './PTable.css';
import { Url } from "../../../Global_variable/api_link";


function Projects() {
  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAddUserModa, setIsAddUserModa] = useState(false);
  const [modalHeader, setModalHeader] = useState('');
  const [editModeldata, setEditModeldata] = useState({
    // project_name:"", 
    project_name:"",
    category:"",  
    client:"",
     duration:"",
     start_date:"",
      end_date:"",
      project_manager:"",
      task_assignto:"",
      deadline:"",
      status:"",
      date:"",
      priority:"",
      description:"",
  });
  const handleInputChange = (e) => {
    setEditModeldata({
      ...editModeldata,
      [e.target.name]: e.target.value,
    });
  };

  const project =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/project",{
    project_name:editModeldata.project_name,
    client:editModeldata.client,
    category:editModeldata.category,
    duration:editModeldata.duration,
    start_date:editModeldata.start_date,
    end_date:editModeldata.end_date,
    project_manager:editModeldata.project_manager,
    task_assignto:editModeldata.task_assignto,
    deadline:editModeldata.deadline,
    status:editModeldata.status,
    date:editModeldata.date,
    priority:editModeldata.priority,
    description:editModeldata.description,
    
  }) 
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

}
const [rows, setRows] = useState([]);
const[projects,setProject] = useState([])

useEffect(() => {
  axios
    .get("http://localhost:3001/getproject")
    .then((response) => {
      setProject(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const Updateproject = async (project,id) => {
  
    console.log(project, "dahgdsa");
    try {
       const response = await axios.put(`http://localhost:3001/projectupdate/${id}`,project);
  
      if (response) {
        // Handle the successful response
        console.log(response);
      } else {
      }
    } catch (error) {}
  };

  const handleDelete = () => {
    const { id } = editModeldata;
    fetch(`http://localhost:3001/api/project/${id}`, { method: 'DELETE' })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsDeleteModal(false);
        fetchProject(); // Refresh the client list after deletion
      })
      .catch((err) => console.error(err));
  };
  
  const fetchProject = () => {
    fetch('/projects')
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    fetchProject();
  }, []);
  




  return (
    <div className="container-xxl">
      <Tab.Container defaultActiveKey="All">
        <PageHeader
          headerTitle="Project List"
          renderRight={() => (
            <div  className="d-flex py-2 project-tab flex-wrap w-sm-100">
       

              <button
              
                type="button"
                className="btn btn-dark w-sm-100"
                onClick={() => {
                  setIsModal(true);
                  setModalHeader('Create Project');
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>Create Project
              </button>
            </div>
          )}
        />
     <Table />
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 flex-column">
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {projects.map((d, i) => {
                    return(
                    <div key={'ljsdhl' + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <CurrentClientProject
                        // teamImage={d.teamImage}
                        // logo={d.logo}
                        // logoBg={d.logoBg}
                        title={d.category}
                        sl={d.project_name}
                        onClickEdit={() => {
                          setIsModal(true);
                          setModalHeader('Edit Project');
                          setEditModeldata(d);
                        }}
                        onClickDelete={() => {
                            setIsDeleteModal(true);
                            setEditModeldata({id:d.id});
                        }}
                        onClickAdd={() => setIsAddUserModa(true)}
                      />

                    </div>
                    )
                  })}
                </div>
              </Tab.Pane>

            {/*<Tab.Pane eventKey="Started">
            <div className="row g-3 gy-5 py-3 row-deck">
                {ProjectCardData.map((d, i) => (
                <div key={'ljsdhl' + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <CurrentClientProject
                    teamImage={d.teamImage}
                    logo={d.logo}
                    logoBg={d.logoBg}
                    title={d.title}
                    sl={d.sl}
                    onClickEdit={() => {
                        setIsModal(true);
                        setEditModeldata(d);
                    }}
                    onClickDelete={() => setIsDeleteModal(true)}
                    onClickAdd={() => setIsAddUserModa(true)}
                    />
                </div>
                ))}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Approval">
            <div className="row g-3 gy-5 py-3 row-deck">
            {ProjectCardData.map((d, i) => (
                <div key={'ljsdhl' + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <CurrentClientProject
                    teamImage={d.teamImage}
                    logo={d.logo}
                    logoBg={d.logoBg}
                    title={d.title}
                    sl={d.sl}
                    onClickEdit={() => {
                    setIsModal(true);
                    setEditModeldata(d);
                    }}
                    onClickDelete={() => setIsDeleteModal(true)}
                    onClickAdd={() => setIsAddUserModa(true)}
                />
                </div>
            ))}
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="Completed">
            <div className="row g-3 gy-5 py-3 row-deck">
            {ProjectCardData.map((d, i) => (
                <div key={'ljsdhl' + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <CurrentClientProject
                    teamImage={d.teamImage}
                    logo={d.logo}
                    logoBg={d.logoBg}
                    title={d.title}
                    sl={d.sl}
                    onClickEdit={() => {
                    setIsModal(true);
                    setEditModeldata(d);
                    }}
                    onClickDelete={() => setIsDeleteModal(true)}
                    onClickAdd={() => setIsAddUserModa(true)}
                />
                </div>
            ))}
            </div>
                </Tab.Pane>*/}
            </Tab.Content>
            </div>
        </div>
    </Tab.Container>
    
    <Modal
        show={isModal}
        onHide={() => {
          setIsModal(false);
          setEditModeldata("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput77" className="form-label">
              Project Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput77" placeholder="Explain what the Project Name" name="project_name" onChange={handleInputChange} value={editModeldata.project_name} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Project Category</label>
                  <select className="form-select" name="category" onChange={handleInputChange} value={editModeldata.category}>
                  <option >UI/UX Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="App Development">App Development</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Development">Development</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Other">Other</option>
              </select>
          </div>
        
                            <div className="row g-3 mb-3">
                                <div className="col-sm">
                                    <label htmlFor="formFileMultipleone" className="form-label">Client</label>
                                    <input type="text" className="form-control" name="client" onChange={handleInputChange} value={editModeldata.client}/>
                                </div>
                                <div className="col-sm">
                                <div className="col-sm">
                                    <label htmlFor="formFileMultipleone" className="form-label">Duration</label>
                                    <input type="date" className="form-control" name="duration"  onChange={handleInputChange} value={editModeldata.duration}/>
                                </div>
                                </div>
                            </div>
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="datepickerded" className="form-label">Project Start Date</label>
                                    <input type="date" className="form-control" id="datepickerded" name="start_date" onChange={handleInputChange} value={editModeldata.start_date}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="datepickerdedone" className="form-label">Project End Date</label>
                                    <input type="date" className="form-control" id="datepickerdedone" name="end_date" onChange={handleInputChange} value={editModeldata.end_Date}/>
                                </div>
                                </div>
                                <div className="row g-3 mb-3">
                                     <div className="col-sm-6">
                                        <label className="form-label">Task</label> 
                                      <select className="form-select" value={editModeldata.task_assignto} name="task_assignto" onChange={handleInputChange}>
                                            <option >All</option>
                                            <option value="1">Team Leader Only</option>
                                            <option value="2">Team Member Only</option>
                                        </select> 
                                    </div>
                                    <div className="col-sm">
                                    <label htmlFor="formFileMultipleone" className="form-label">Deadline</label>
                                    <input type="date" className="form-control" value={editModeldata.deadline} name="deadline" onChange={handleInputChange}/>
                                </div>


                                    <div className="col-sm-12">
                                        <label htmlFor="formFileMultipleone" className="form-label">Status</label>
                                        <select className="form-select" multiple="" value={editModeldata.status} name="status" onChange={handleInputChange}>
                                            <option >Lucinda Massey</option>
                                            <option value="1">Ryan Nolan</option>
                                            <option value="2">Oliver Black</option>
                                            <option value="3">Adam Walker</option>
                                            <option value="4">Brian Skinner</option>
                                            <option value="5">Dan Short</option>
                                            <option value="5">Jack Glover</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm">
                                    <label htmlFor="formFileMultipleone" className="form-label">Date</label>
                                    <input type="date" className="form-control" name="date" value={editModeldata.date} onChange={handleInputChange}/>
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="formFileMultipleone" className="form-label">Priority</label>
                                    <select className="form-select" name="priority" value={editModeldata.priority} onChange={handleInputChange}>
                                        <option >Highest</option>
                                        <option value="1">Medium</option>
                                        <option value="2">Low</option>
                                        <option value="3">Lowest</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                                <textarea className="form-control" value={editModeldata.description} name="description" onChange={handleInputChange} id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button type="button" className="btn btn-secondary"  onClick={() => {
                        Updateproject(editModeldata,editModeldata.id);
                      }}>Done</button>
                    <button type="button" className="btn btn-primary" onClick={project}>Create</button>
                    
                    </Modal.Footer>
                    </Modal>
                    <Modal show={isDeleteModal} centered onHide={()=>{  setIsDeleteModal(false) }}>
                    <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Delete Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                    <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                    <p className="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                </Modal.Body>
                <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={()=>{  setIsDeleteModal(false) }}>Cancel</button>
                <button type="button" className="btn btn-danger color-fff" onClick={handleDelete}>Create</button>
            </Modal.Footer>
                    </Modal>
                    <AddNewUserModal show={ isAddUserModa } onClose={()=>{ setIsAddUserModa(false) }} />
                                      
                                       </div>
                  
                   )
                }
            
            
            export default Projects; 