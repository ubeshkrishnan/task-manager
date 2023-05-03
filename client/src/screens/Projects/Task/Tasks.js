import React, { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import AllocatedTask from "../../../components/Projects/AllocatedTask";
import RecentActivity from "../../../components/Projects/RecentActivity";
import TaskProgress from "../../../components/Projects/TaskProgress";
import "react-nestable/dist/styles/index.css";
import {Url} from "../../../Global_variable/api_link"
import Form from "react-bootstrap/Form";
import Select from "react-select"

import {
  CompletedData,
  InProgressTaskData,
  needReviewData,
} from "../../../components/Data/AppData";
import TaskNestable1 from "../../../components/Projects/TaskNestable1";
import axios from "axios";
import Table from "./Table";

function Tasks() {
  const [isModal, setIsModal] = useState("");
  const [editModeldata, setEditModelData] = useState({
    task_name: "",
    client: "",
    control_code: "",
    category: "",
    task_assignperson: "",
    deadline: "",
    duration: "",
    description: "",
  });
  const handleSelectChange = (selectedOptions) => {
    const categories = selectedOptions.map((option) => option.value);
    setEditModelData({
      ...editModeldata,
      category: categories,

    });
  };

  // Project
  const[projects,setProjects] = useState([]);
  useEffect(() => {
      axios
        .get(Url+"/projectcard")
        .then((response) => {
          setProjects(response.data);
          console.log(projects);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  
  
  const[tasks,setTasks] = useState([]);
  useEffect(() => {
      axios
        .get(Url+"/worktype_task")
        .then((response) => {
          setTasks(response.data);
          console.log(tasks);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  const handleInputChange = (e) => {
    setEditModelData({
      ...editModeldata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    setIsModal(false);
    event.preventDefault();
    axios
      .post(Url+"/task", {
        task_name: editModeldata.task_name,
        client: editModeldata.client,
        control_code: editModeldata.control_code,
        category: editModeldata.category,
        //  taskImages:editModeldata.taskImages,
        start_date: editModeldata.start_date,
        end_date: editModeldata.end_date,
        //  notificationSent:editModeldata.notificationSent,
        task_assignperson: editModeldata.task_assignperson,
        deadline: editModeldata.deadline,
        //  noOfHours:editModeldata.noOfHours,
        //  priority:editModeldata.priority,
        description: editModeldata.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };
  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Tasks Management"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                className="btn btn-dark btn-set-task w-sm-100"
                onClick={() => {
                  setIsModal(true);
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>Create Task
              </button>
            </div>
          );
        }}
      />

      <div className="">
        <div className="col-lg-12 col-md-12 flex-column">
          <div className="row g-3 row-deck">
            {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <TaskProgress />
                            </div> */}
            {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><RecentActivity /></div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12"><AllocatedTask /></div> */}
          </div>
          {/* <TaskNestable
                        InProgressTaskData={InProgressTaskData}
                        needReviewData={needReviewData}
                        CompletedData={CompletedData}
                         /> */}
          {/* <TaskNestable1
                        InProgressTaskData={InProgressTaskData}
                        needReviewData={needReviewData}
                        CompletedData={CompletedData}
                         /> */}
        </div>
        <Table />
      </div>
      <Modal show={isModal} onHide={() => setIsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput77" className="form-label">
                Task Name
              </label>
              <input
              autoFocus
                type="text"
                className="form-control"
                name="task_name"
                onChange={handleInputChange}
                value={editModeldata.task_name}
                id="exampleFormControlInput77"
                placeholder="Explain what the Project Name"
              />
            </div>
           
            <div className="mb-3 ">
              <label htmlFor="formFileMultipleone" className="form-label">
                Task Images &amp; Document
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultipleone"
                multiple=""
              />
            </div>
            <div className="deadline-form">
              <div className="row g-3 mb-3">
                <div className="col">
                  <label htmlFor="datepickerded" className="form-label">
                    Client
                  </label>
                  <select
                    className="form-select"
                    onChange={handleInputChange}
                    name="client"
                    value={editModeldata.client}
                  >
                    <option>Select</option>
                    <option value="KASC">KASC</option>
                    <option value="SEC">SEC</option>
                    <option value="HRMS">HRMS</option>
                    <option value="KV">KV</option>
                  </select>
                </div>

              

                <div className="col">
                  <label htmlFor="datepickerdedone" className="form-label">
                    Change Control Code
                  </label>
                  <select
                    className="form-select"
                    onChange={handleInputChange}
                    name="control_code"
                    value={editModeldata.control_code}
                  >
                    <option>Select</option>
                    <option value="D001">D001</option>
                    <option value="N002">N002</option>
                    <option value="M002">M002</option>
                  </select>
                </div>
              </div>

 

              <div className="deadline-form">
              <div className="row g-3 mb-3">
                <div className="col">
                <label className="form-label">worktype_task</label>
                   
                   <Form.Group controlId="formPlaintextPassword">
                                   <div>
                                     <Select
                                       isMulti
                                       placeholder="Select category"
                                       name="category"
                                       
                                       onChange={handleSelectChange}
                                      
                                       options={tasks.map((item) => ({
                                         label: item.code,
                                         value: item.code,
                                       }))}
                                       closeMenuOnSelect={false}
                                     />
                                   </div>
                                 </Form.Group>
                </div>
                <div className="col">
                  <label htmlFor="datepickerdedone" className="form-label">
                   Projects
                  </label>
                  <select
                    className="form-select"
                    onChange={handleInputChange}
                    name="control_code"
                    value={editModeldata.control_code}
                  >
                    <option>Select</option>
    {projects.map((project) => (
      <option key={project.project_name} value={project.project_name}>
        {project.project_name}
      </option>
    ))}
                  </select>
                </div>
              </div>
                <div className="row g-3 mb-3">
                  <div className="col-sm-12">
                    <label className="form-label">Notifation Sent</label>
                    <select className="form-select">
                      <option>All</option>
                      <option value="1">Team Leader Only</option>
                      <option value="2">Team Member Only</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="formFileMultipleone" className="form-label">
                      Task Assign Person
                    </label>
                    <select
                      className="form-select"
                      multiple=""
                      onChange={handleInputChange}
                      name="task_assignperson"
                      value={editModeldata.task_assignperson}
                    >
                       <option>Select</option>
                       <option>Satheesh</option>
                       <option>Sanjay</option>
                       <option>Harshanth</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="formFileMultipleone" className="form-label">
                      Deadline
                    </label>
                    {/* <input type="text" className="form-control" onChange={handleInputChange} name="deadline"  value={editModeldata.deadline}/> */}
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleInputChange}
                      name="deadline"
                      value={editModeldata.deadline}
                    />
                  </div>
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Time Estimation
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Priority
                  </label>
                  <select className="form-select">
                    <option>Select</option>
                    <option value="1">Medium</option>
                    <option value="2">Highest</option>
                    <option value="3">Lowest</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea78"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="description"
                  id="exampleFormControlTextarea78"
                  rows="3"
                  value={editModeldata.description}
                  placeholder="Add any extra details about the request"
                ></textarea>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsModal(false)}
          >
            Done
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tasks;
