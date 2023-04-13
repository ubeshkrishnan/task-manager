// import React from "react";
// import { Modal } from "react-bootstrap";
// import DataTable from "react-data-table-component";
// import PageHeader from "../../components/common/PageHeader";
// import { TimesheetListData } from "../../components/Data/AppData";


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


// Function component

import React, { useState ,useEffect} from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { TimesheetListData } from "../../components/Data/AppData";
import {Url} from "../../Global_variable/api_link"
import axios from "axios";

const Timesheet = () => {
  const [isModal, setIsModal] = useState(false);

const[rows,setRows] =useState([])

useEffect(()=>{
  axios.get(Url+'/AdminTimesheet')
  .then((response)=>{
    setRows(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })

})

  const TimesheetListData={

    

    title:"Timesheet List",
    columns:[
      {
        name: "Assignto Person",
        selector: ()=>{},
        sortable: true,
        cell:(row) => {
          return (
            <div>
            {/*  <div>{row.id}</div>*/}
              {row.assignto.split(",").map((assignto, index) => (
                <div key={index}>{assignto.trim()}</div>
              ))}
            </div>
          );
        }
        
      },
        {
            name: "Client Name",
            selector: ()=>{},
            sortable: true,
            cell:(row) => {
              return (
                <div>
                {/*  <div>{row.id}</div>*/}
                  {row.client.split(",").map((client, index) => (
                    <div key={index}>{client.trim()}</div>
                  ))}
                </div>
              );
            }
          
        },
        {
          name: "Task Name",
          selector: ()=>{},
          sortable: true,
          cell:(row) => {
            return (
              <div>
              {/*  <div>{row.id}</div>*/}
                {row.tasks.split(",").map((task, index) => (
                  <div key={index}>{task.trim()}</div>
                ))}
              </div>
            );
          }
          
        },
       
        {
          name: "Employee",
          selector:()=>{},
          sortable: true,
          cell:(row) => {
            return (
              <div>
              {/*  <div>{row.id}</div>*/}
                {row.first_name.split(",").map((first_name, index) => (
                  <div key={index}>{first_name.trim()}</div>
                ))}
              </div>
            );
          }
          
      },
        // {
        //   name: "Employee",
        //   selector: ()=>{},
        //   sortable: true,
        //   cell:(row) => {
        //     return (
        //       <div>
        //       {/*  <div>{row.id}</div>*/}
        //         {row.assignto.split(",").map((assignto, index) => (
        //           <div key={index}>{assignto.trim()}</div>
        //         ))}
        //       </div>
        //     );
        //   }
          
        // },
        
        {
            name: "Task Completed Time",
            selector:()=>{},
            sortable: true,
            cell:(row) => {
              return (
                <div>
                {/*  <div>{row.id}</div>*/}
                  {row.duration.split(",").map((duration, index) => (
                    <div key={index}>{duration.trim()}</div>
                  ))}
                </div>
              );
            }
            
        },
        // {
        //     name: "TUE",
        //     selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.tue} onChange={()=>{}}/>,
        //     sortable: true,
        // },
        // {
        //     name: "WED",
        //     selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.wed} onChange={()=>{}}/>,
        //     sortable: true,
        // },
        // {
        //     name: "THUR",
        //     selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.thur} onChange={()=>{}}/>,
        //     sortable: true,
        // },
        // {
        //     name: "FRI",
        //     selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.fri} onChange={()=>{}}/>,
        //     sortable: true
        // },
        // {
        //     name: "SAT",
        //     selector: (row)=><input type="text" className="form-control" id="timepickerded29" value={row.sat} onChange={()=>{}}/>,
        //     sortable: true
        // },
        // {
        //     name: "TOTAL",
        //     selector: (row)=>row.total,
        //     sortable: true,
        //     cell:row=><button type="button" className="btn light-success-bg">{row.total}</button>
        // },
        // {
        //     name: "",
        //     selector: (row)=>{},
        //     cell:()=>   <div className="btn-group" role="group" aria-label="Basic outlined example">
        //                     <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
        //                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
        //                 </div>
        // }
    ],
   
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
                data={rows}
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
