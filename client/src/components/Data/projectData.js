import Thumbnail1 from "../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";
import Avatar8 from "../../assets/images/xs/avatar8.jpg";

import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Url} from "../../Global_variable/api_link";
import DataTable from "react-data-table-component";

function LeadersListData() {
    const[rows,setRows] =useState([])

    useEffect(() => {
        axios
          .get(Url + "/projectcard")
          .then((response) => {
            setRows(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
       []);
      const LeadersListData={
        title:"Leaders List",
        columns:[
            {
                name: "ID",
                selector:()=>{},
                sortable: true,
                cell:(row)=>{
            return(
                <div>
                    <div>{row.id}</div>
                </div>
            )
                }
            },
            {
                name: "PROJECT NAME",
                selector:(row)=>row.project_name,
                sortable: true,
                cell:row=><><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.leadername}</span></>,
                minWidth:"250px"
            },
            {
                name: "CREATED DT",
                selector: (row)=>row.project,
                sortable: true
            },
            {
                name: "CATEGORY",
                selector: (row)=>row.totaltask,
                sortable: true
            },
            {
                name: "CLIENT",
                selector: (row)=>row.email,
                sortable: true
            },
            {
                name: "PROJECT MANAGER",
                selector: (row)=>row.projectassigned,
                sortable: true
            },
            {
                name: "DEADLINE",
                selector: (row)=>{},
                sortable: true,
                cell:(row)=>{
                    return <div className="avatar-list avatar-list-stacked px-3">
                                { row.assignedstaff.map((d,i)=> <img key={"fibd"+i} className="avatar rounded-circle sm" src={d} alt="" />)}
                                <span className="avatar rounded-circle text-center pointer sm" ><i className="icofont-ui-add"></i></span>
                            </div>
                }
            },
            {
                name: "STATUS",
                selector: (row)=>{},
                sortable: true,
                cell:row=><span className="badge bg-success">{row.status}</span>
            },
            {
                name: "DATE",
                selector: (row)=>{},
                sortable: true,
                cell:row=><span className="badge bg-success">{row.status}</span>
            },
            {
                name: "ACTION",
                selector: (row)=>{},
                sortable: true,
                cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
            }
            
        ],
    }
        return(
            <div>
               
                      <div className="card mb-3">
           <DataTable
            title={LeadersListData.title}
            columns={LeadersListData.columns}
            data={rows}
            defaultSortField="title"
            pagination
            subHeader
            selectableRows={false}
            className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
            highlightOnHover={true}
            />
        </div>
            
            </div>
        )
    };

export default LeadersListData;