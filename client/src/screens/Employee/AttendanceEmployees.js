import React,{useState,useRef,useEffect} from "react";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { TimeAttandanceData } from "../../components/Data/AppData";
import { EmployessYearlyStatusData, TodayTimeUtilisationData } from "../../components/Data/ChartData";
import RecentActivityCard from "../../components/Employees/RecentActivityCard";
import StatisticsCard from "../../components/Employees/StatisticsCard";
import GeneralChartCard from "../../components/Employees/TodayTimeUtilisation";
import axios from "axios";
import moment from "moment";



function AttendanceEmployees() {

    const [punchInTime, setPunchInTime] = useState(null);
    const [punchOutTime, setPunchOutTime] = useState(null);

    const breakHours = punchInTime && punchOutTime ? ((punchOutTime - punchInTime) / (1000 * 60 * 60)) - 8 : 0;
    const overtimeHours = punchInTime && punchOutTime ? (punchOutTime - punchInTime) / (1000 * 60 * 60) - breakHours : 0;

    const [elapsedTime, setElapsedTime] = useState(0);
    const timerRef = useRef(null);
    
    
    useEffect(() => {
      console.log("Punch in time:", punchInTime);
      console.log("Punch out time:",punchOutTime);
      console.log("Elapsed time:",elapsedTime);
    }, [punchInTime,punchOutTime,elapsedTime]);

    const handlePunchIn = () => {
    
        setPunchInTime(new Date());
        // console.log("bhsgdhgs",punchInTime);
        setElapsedTime(0);
        timerRef.current = setInterval(() => {
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
        }, 1000);
      
      };
    
      const handlePunchOut = () => {
        // console.log('punchInTime:', punchInTime);
        // console.log('punchOutTime:', punchOutTime);
        const punchOutTime = new Date();
        setPunchOutTime(punchOutTime);
        clearInterval(timerRef.current);

        const formattedPunchInTime = moment(punchInTime).format('YYYY-MM-DD HH:mm:ss');
        const formattedPunchOutTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

        const workHours =calculateWorkHours(punchInTime, punchOutTime);
       console.log(workHours);
        axios.post('http://localhost:3001/punch', {
          punchInTime: formattedPunchInTime,
          punchOutTime: formattedPunchOutTime,
          workHours: workHours
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        
      };
    
      // const calculateWorkHours = () => {
      //   if (!punchInTime || !punchOutTime) {
      //     return 0;
      //   }
      //   const diff = punchOutTime.getTime() - punchInTime.getTime();
      //   const diffInMinutes = diff / (1000 * 60);
      //   if (diffInMinutes < 60) {
      //     const workHours =diffInMinutes.toFixed(0) + " minutes";
      //     return (workHours);
      //   }
      //   const diffInHours = diffInMinutes / 60;
      //   const workHours=Math.floor(diffInHours) + " hours";
      //   return (workHours);
      // };

      // const calculateWorkHours = () => {
      //   if (!punchInTime || !punchOutTime) {
      //     return 0;
      //   }
      //   const diff = punchOutTime.getTime() - punchInTime.getTime();
      //   const diffInMinutes = diff / (1000 * 60);
      //   const diffInHours = Math.floor(diffInMinutes / 60);
      //   const diffInMinutesRemainder = Math.round(diffInMinutes % 60);
      //   const workHours = `${diffInHours} hours, ${diffInMinutesRemainder} minutes`;
      //   console.log(workHours);
      //   return workHours;
        
      // };
      const calculateWorkHours = (punchInTime, punchOutTime) => {
        console.log('punchInTime:', punchInTime);
        console.log('punchOutTime:', punchOutTime);
        if (!punchInTime || !punchOutTime) {
          return '00:00:00';
        }
        const diff = punchOutTime.getTime() - punchInTime.getTime();
        const diffInMinutes = diff / (1000 * 60);
        const diffInHours = diffInMinutes / 60;
        const diffInTime = moment().startOf('day').add(diffInHours, 'hours').format('HH:mm:ss');
        return diffInTime;
      };
    
      const workHours = punchInTime && punchOutTime ? calculateWorkHours(punchInTime, punchOutTime) : '00:00:00';
      console.log(workHours);
    return (
      <div className="container-xxl">
        <PageHeader headerTitle="Attendance Employees" />
        <div className="row align-item-center row-deck g-3 mb-3">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <GeneralChartCard
              Title="Today Time Utilisation"
              extraDivBody={() => (
                <div className="timesheet-info d-flex align-items-center justify-content-between flex-wrap">
                  {/*<div className="intime d-flex align-items-center mt-2">
                    <i className="icofont-finger-print fs-4 color-light-success"></i>
                    <span className="fw-bold ms-1">Punching: 10:00 Am</span>
                  </div>
                  <div className="outtime mt-2 w-sm-100">
                <button type="button" className="btn btn-dark w-sm-100">
                    <i className="icofont-foot-print me-2"></i>Punch Out
                </button>
                  </div>*/}
                  <div className="intime d-flex align-items-center mt-2">
  {/*<i className="icofont-finger-print fs-4 color-light-success"></i>*/}
  {!punchInTime && (
    <button className="btn btn-dark w-sm-100" style={{marginLeft:"85px",fontWeight:"bold"}} onClick={handlePunchIn}>Punch In</button>
  )}
  {punchInTime && !punchOutTime && (
    <div>
    <button className="btn btn-dark w-sm-100" style={{marginLeft:"85px",fontWeight:"bold"}} onClick={handlePunchOut}>Punch Out</button>
    <div className="text-center">
    <p style={{marginLeft:"55px",marginTop:"5px"}}><b>Punch In Time</b>: {punchInTime.toLocaleTimeString()}</p>
    <p style={{
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        border: "5px solid #e3e3e3",
        borderRadius: "50%",
        display: "flex",
        fontSize: "18px",
        height: "120px",
        justifyContent: "center",
        margin: "0 auto",
        width: "120px",
        marginLeft: "65px"

    }}>  {new Date(elapsedTime).toISOString().substr(11, 8)}</p>
  </div>
    
    </div>
  )}
  {punchInTime && punchOutTime && (
    <div style={{marginLeft:"45px"}}>
      <p style={{marginTop:'30px'}}><b>Punch In Time</b>: {punchInTime.toLocaleTimeString()}</p>
      <p><b>Punch Out Time</b>: {punchOutTime.toLocaleTimeString()}</p>
      <p><b>Work Hours</b>: {calculateWorkHours(punchInTime, punchOutTime)}</p>
    </div>
  )}
  </div>

{/*<div className="outtime mt-2 w-sm-100">
  {punchOutTime ? (
    <span className="fw-bold">{`Punch Out: ${punchOutTime.toLocaleTimeString()}`}</span>
  ) : (
    <button className="btn btn-dark w-sm-100" onClick={() => setPunchOutTime(new Date())}>
      Punch Out
    </button>
  )}
  </div>*/}

              </div>
              )}
              identity="todaytimeutl"
            //   data={TodayTimeUtilisationData}
             footerBody={
                <div style={{marginTop:10,marginRight:25}} className="timesheet-info d-flex align-items-center justify-content-around flex-wrap">
    <div className="intime d-flex align-items-center">
      <i className="icofont-lunch fs-3 color-lavender-purple"></i>
      <span className="fw-bold ms-1">{`Break: ${breakHours.toFixed(2)} Hr`}</span>
    </div>
    <div className="intime d-flex align-items-center">
      <i className="icofont-ui-timer fs-4 color-light-success"></i>
      <span className="fw-bold ms-1">{`Overtime: ${overtimeHours.toFixed(2)} Hr`}</span>
    </div>
  </div>
              }
            />
            
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                    <GeneralChartCard Title="Employess Yearly Status" identity="Employessyearlystatus" data={EmployessYearlyStatusData}/>
            </div>

                </div>
                <div className="row clearfix g-3 mb-3">
                    <div className="col-lg-12 col-md-12 flex-column">
                        <div className="row g-3 row-deck">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <StatisticsCard />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <RecentActivityCard />
                            </div>
                        </div>
                    </div>
        </div> 
                <div className="row clearfix g-3">
                    <div className="col-sm-12">
                        <DataTable
                            title={TimeAttandanceData.title}
                            columns={TimeAttandanceData.columns}
                            data={TimeAttandanceData.rows}
                            defaultSortField="title"
                            pagination
                            selectableRows={false}
                            className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                            highlightOnHover={true}
                            />
                    </div>
                </div>
            </div>
        )
    }


export default AttendanceEmployees;
