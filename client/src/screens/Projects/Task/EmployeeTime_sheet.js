// import React, { useState, useEffect } from "react";
// import { Modal } from "react-bootstrap";
// import DataTable from "react-data-table-component";
// import PageHeader from "../../../components/common/PageHeader";
// import { TimesheetListData } from "../../../components/Data/AppData";

// const Timesheet = () => {
//     const [isModal, setIsModal] = useState(false);
//     const [timesheets, setTimesheets] = useState([]);
  
//     useEffect(() => {
//       const fetchTimesheets = async () => {
//         try {
//           const res = await fetch("/api/timesheets");
//           const data = await res.json();
//           setTimesheets(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchTimesheets();
//     }, []);
  
//   return (
//     <div className="container-xxl">
//       <PageHeader
//         headerTitle="Project Timesheet"
//         renderRight={() => (
//           <div className="col-auto d-flex w-sm-100">
//             <button
//               type="button"
//               className="btn btn-dark btn-set-task w-sm-100"
//               onClick={() => setIsModal(true)}
//             >
//               <i className="icofont-file-spreadsheet me-2 fs-6"></i>
//               Sheets Sent
//             </button>
//           </div>
//         )}
//       />
//       <div className="row clearfix g-3">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <DataTable
//                 title={TimesheetListData.title}
//                 columns={TimesheetListData.columns}
//                 data={timesheets.rows}
//                 defaultSortField="title"
//                 pagination
//                 selectableRows={false}
//                 className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
//                 highlightOnHover={true}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal show={isModal} centered onHide={() => setIsModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title className="fw-bold">Sheets Sent</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//             />
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => setIsModal(false)}
//           >
//             Done
//           </button>
//           <button type="button" className="btn btn-primary">
//             Sent
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Timesheet;


// import React from "react";
// import { Modal } from "react-bootstrap";
// import DataTable from "react-data-table-component";
// import PageHeader from "../../../components/common/PageHeader";
// import { TimesheetListData } from "../../../components/Data/AppData";

// class Timesheet extends React.Component{
//     state={
//         isModal:false
//     }
//     render(){
//         const {isModal} = this.state;
//         return(
//             <div className="container-xxl">
//                 <PageHeader headerTitle="Project Timesheet"  renderRight={()=>{ 
//                             return <div className="col-auto d-flex w-sm-100">
//                                 <button type="button" className="btn btn-dark btn-set-task w-sm-100"  onClick={()=>{ this.setState({isModal:true}) }} ><i className="icofont-file-spreadsheet me-2 fs-6"></i>Sheets Sent</button>
//                             </div> }}/>
//                 <div className="row clearfix g-3">
//                     <div className="col-md-12">
//                         <div className="card">
//                             <div className="card-body">
//                                 <DataTable
//                                 title={TimesheetListData.title}
//                                 columns={TimesheetListData.columns}
//                                 data={TimesheetListData.rows}
//                                 defaultSortField="title"
//                                 pagination
//                                 selectableRows={false}
//                                 className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
//                                 highlightOnHover={true}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Modal show={isModal} centered onHide={()=>{this.setState({isModal:false}) }}>
//                     <Modal.Header closeButton>
//                     <Modal.Title className="fw-bold">Sheets Sent</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div className="mb-3">
//                             <label for="exampleFormControlInput1" className="form-label">Email address</label>
//                             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//                         </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({isModal:false}) }}>Done</button>
//                         <button type="button" className="btn btn-primary">Sent</button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         )
//     }
// }

// export default Timesheet;


// update function code

import React, { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../../components/common/PageHeader";
import { TimesheetListData } from "../../../components/Data/AppData";
import axios from "axios";
import {Url} from "../../../Global_variable/api_link"

const Timesheet = () => {
  const [isModal, setIsModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    project: "",
    task: "",
    day: "",
    hours: "",
  });

  const myTask = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios.get(Url+`/gettask/${user.user_id}`).then((response) => {
      const taskData = response.data.map((task) => ({
        title: task.project_name,
        task: task.task_name,
        duration: `${task.hours} hours`,
      }));
      setTimesheetData(taskData);
    });
  };

  useEffect(() => {
    myTask();
  }, []);
  const [timesheetData, setTimesheetData] = useState([
    {
      project: "Project A",
      task: "Task 1",
      day: "Monday",
      hours: "8",
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddEntry = () => {
    const { project, task, day, hours } = newEntry;
    const updatedTimesheetData = [
      ...timesheetData,
      { project, task, day, hours },
    ];
    setTimesheetData(updatedTimesheetData);
    setIsModal(false);
  };
  const[project,setProject]=useState([]);

  useEffect(()=>{
    axios.get(Url+'/project')
    .then((response)=>{
      setProject(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  })

const[rows,setRows] =useState([])
const Task = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  axios.get(Url +`/gettask/${user.user_id}`).then((response) => {
    setRows(response.data);
  });
};
useEffect(() => {
  Task();
}, []);


  const TimesheetListData={

    

    title:"Timesheet List",
    columns:[
        {
            name: "PROJECT NAME",
            selector: ()=>{},
            sortable: true,
            cell:()=>
            <select className="form-select" >
            {project.map((data,index)=>(
                            <option >{data.project_name}</option>
                            ))}       
                           
                        </select>
          
        },
        {
            name: "Task NAME",
            selector: ()=>{},
            sortable: true,
            cell:()=><select className="form-select" >
             {rows.map((data,index)=>(
                            <option >{data.task_name}</option>
                            ))}   
                           
                        </select>
        },
        {
            name: "MON",
            selector: row=><input type="text" className="form-control" id="timepickerded29" value={row.mon} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "TUE",
            selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.tue} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "WED",
            selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.wed} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "THUR",
            selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.thur} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "FRI",
            selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.fri} onChange={()=>{}}/>,
            sortable: true
        },
        {
            name: "SAT",
            selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.sat} onChange={()=>{}}/>,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row)=>row.total,
            sortable: true,
            cell:row=><button type="button" className="btn light-success-bg">{row.total}</button>
        },
        {
            name: "",
            selector: (row)=>{},
            cell:()=>   <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
        }
    ],
    // rows:[
    //     {
    //         projectname:"Box of Crayons",
    //         mon:"08:00:00",
    //         tue:"08:00:00",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"50"
    //     },
    //     {
    //         projectname:"Fast Cad",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"48"
    //     },
    //     {
    //         projectname:"Gob Geeklords",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"56"
    //     },
    //     {
    //         projectname:"Java Dalia",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"56"
    //     },
    //     {
    //         projectname:"Practice to Perfect",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"54.2"
    //     },
    //     {
    //         projectname:"",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"00:00"
    //     },
    //     {
    //         projectname:"",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"00"
    //     },
    //     {
    //         projectname:"Rhinestone",
    //         mon:"08:00:00PM",
    //         tue:"08:00:00PM",
    //         wed:"08:00:00PM",
    //         thur:"08:00:00PM",
    //         fri:"08:00:00PM",
    //         sat:"08:00:00PM",
    //         total:"56"
    //     },
        
    // ]
    
}
  return (
    <div className="container-xxl">
      <PageHeader
        headerTitle="Weekly Timesheet Management"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                type="button"
                className="btn btn-dark btn-set-task w-sm-100"
                onClick={() => {
                  setIsModal(true);
                }}
              >
                <i className="icofont-file-spreadsheet me-2 fs-6"></i>Sheets Sent
              </button>
            </div>
          );
        }}
      />
      <div className="row clearfix g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <DataTable
                title={TimesheetListData.title}
                columns={TimesheetListData.columns}
                data={timesheetData}
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
      <Modal show={isModal} centered onHide={() => setIsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Sheets Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsModal(false);
            }}
          >
            Done
          </button>
          <button type="button" className="btn btn-primary">
            Sent
          </button>
        </Modal.Footer>
      </Modal>
</div>
);
};

export default Timesheet;
