import React from "react";
import PageHeader from "../../components/common/PageHeader";
import ChageIMG from "../../assets/images/change-log.svg";

class Changelog extends React.Component{
    render(){
        return(
            <div className="container-xxl">
                <PageHeader headerTitle="Changelog" renderRight={()=>{
                    return <div className="col-auto">
                                <a href="#!" title="" className="btn btn-white border lift me-1">Get Support</a>
                                <a href="#!" title="" className="btn btn-primary border lift">Our Portfolio</a>
                            </div>
                }} />
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body text-center p-5">
                                <img src={ChageIMG} className="img-fluid mx-size" alt="No Data" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="pt-2">
                                    <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.1.3</span></h6>
                                    <span className="text-muted">&nbsp;&nbsp;&nbsp;–-- Oct 25, 2021</span>
                                            
                                    <ul className="ms-5">
                                        <li>Bootstrap 5.1.0 to Latest Update Bootstrap": "^5.1.3"</li>
                                        <li>Apexcharts 3.26.0 to Latest Update Apexcharts": "^3.29.0"</li>
                                        <li>prismjs 1.23.0 to Latest Update Prismjs": "^1.25.0"</li>
                                        <li>Layouts and pages (Add &amp; edit).
                                            <ul>
                                                <li>Add scroll for main page layouts.</li>
                                                <li>Add Scroll for side menu.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-2">
                                    <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.1.2</span></h6>
                                    <span className="text-muted">&nbsp;&nbsp;&nbsp;–-- Aug 20, 2021</span>
                                    <ul className="ms-5">
                                        <li> Bootstrap": "^5.0.2 to Latest Update Bootstrap": "^5.1.0</li>
                                        <li> Add &amp; Edit More Pages.
                                            <ul>
                                                <li>Widgets Page Add</li>
                                                <li>Calander Responsive issue Fixed</li>
                                                <li>Some other Responsive issue Fixed</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-2">
                                    <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.1.0</span></h6>
                                    <span className="text-muted">&nbsp;&nbsp;&nbsp;–-- June 26, 2021</span>
                                    <ul className="ms-5">
                                        <li>Bootstrap 5.0.0-beta3 to Latest Update Bootstrap": "^5.0.2</li>
                                        <li>Add &amp; Edit More Pages.
                                            <ul>
                                                <li>Attendance Employees Page</li>
                                                <li>Attendance Page</li>
                                                <li>Apex charts</li>
                                                <li>Forms Example</li>
                                                <li>Table Example</li>
                                                <li>Reviews Page</li>
                                                <li>Icon Page</li>
                                                <li>Contact Page</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-2">
                                    <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.0.0</span></h6>
                                    <span className="text-muted">&nbsp;&nbsp;&nbsp;–-- May 7, 2021</span>
                                    <ul className="ms-5">
                                        <li>Initial release of my-Task! Lots more coming soon though 😁</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Changelog;