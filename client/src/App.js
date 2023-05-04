// import React from "react";
// import { Switch, withRouter } from "react-router";
// import Sidebar from "./components/common/Sidebar";
// import AuthIndex from "./screens/AuthIndex";
// import MainIndex from "./screens/MainIndex";
// // import NavigationBar from "./components/common/NavigationBar";
// // import EmployeeIndex from "./screens/EmployeeIndex";
// import Sidebar1 from "./components/common/Sidebar1";
// import { useHistory } from "react-router-dom";

// class App extends React.Component {

//   activekey() {
//     var res = window.location.pathname
//       var baseUrl = process.env.PUBLIC_URL
//       baseUrl = baseUrl.split("/sign-in");
//       res = res.split("/");
//       // res = res.length > 1 ? res[res.length-1] : "/";
//       res = res.length>0 ? res[baseUrl.length] : "/";
//       res= res ? "/"+res : "/";;
//       const activeKey1=res;
//       return activeKey1
//   }
//   render(){
//     if(this.activekey() === "/sign-in" || this.activekey() === "/sign-up" || this.activekey() === "/password-reset" || this.activekey() === "/2-step-authentication" || this.activekey() === "/page-404"){
//       return(
//         <div id="mytask-layout" className="theme-indigo">
//           <Switch>
//             <AuthIndex />
//           </Switch>
//         </div>
//       )
//     }
//     if (this.activekey() === "/Employeetask" || this.activekey() === "/Taskdetails" ||this.activekey() === "/holidays"
//     ||this.activekey() === "/attendance-employees" || this.activekey() === "/attendance" || this.activekey() === "/leave-request"
//     ||this.activekey() === "/calander"){
//       return (
//         <div id="mytask-layout" className="theme-indigo">
//           <Sidebar1 activekey={this.activekey()} history={this.props.history} />
//           <Switch>
//             <MainIndex activekey={this.activekey()} />
//           </Switch>
//         </div>
//       )
//     }
//     return (
//       <div id="mytask-layout" className="theme-indigo">
//      {/* <NavigationBar />*/}
      
//          <Sidebar activekey={this.activekey()} history={this.props.history}/>
//         <Switch>
//           <MainIndex activekey={this.activekey()}/>
//         </Switch>
        
//       </div>
//     );
//   }
  
// }

// export default withRouter(App);

// FUNCTION COMPONENT //

// import React from "react";
// import { Switch, withRouter } from "react-router";
// import Sidebar from "./components/common/Sidebar";
// import AuthIndex from "./screens/AuthIndex";
// import MainIndex from "./screens/MainIndex";
// // import NavigationBar from "./components/common/NavigationBar";
// // import EmployeeIndex from "./screens/EmployeeIndex";
// import Sidebar1 from "./components/common/Sidebar1";
// import { useHistory, useLocation , Redirect  } from "react-router-dom";

// function App(props) {
//   const history = useHistory();
//   const location = useLocation();

//   const activekey = React.useCallback(() => {
//     let res = location.pathname;
//     let baseUrl = process.env.PUBLIC_URL;
//     baseUrl = baseUrl.split("/sign-in");
//     res = res.split("/");
//     res = res.length > 0 ? res[baseUrl.length] : "/";
//     res = res ? `/${res}` : "/";
//     return res;
//   }, [location.pathname]);
  
//   if (location.pathname === "/" || location.pathname === "/index.html") {
//     return <Redirect to="/sign-in" />;
//   }
//   if (
//     activekey() === "/sign-in" ||
//     activekey() === "/sign-up" ||
//     activekey() === "/password-reset" ||
//     activekey() === "/2-step-authentication" ||
//     activekey() === "/page-404"
//   ) {
//     return (
//       <div id="mytask-layout" className="theme-indigo">
//         <Switch>
//           <AuthIndex />
//         </Switch>
//       </div>
//     );
//   }

//   if (
//     activekey() === "/Employeetask" ||
//     activekey() === "/Taskdetails" ||
//     activekey() === "/holidays" ||
//     activekey() === "/attendance-employees" ||
//     activekey() === "/attendance" ||
//     activekey() === "/leave-request" ||
//     activekey() === "/calander"
//   ) {
//     return (
//       <div id="mytask-layout" className="theme-indigo">
//         <Sidebar1 activekey={activekey()} history={history} />
//         <Switch>
//           <MainIndex activekey={activekey()} />
//         </Switch>
//       </div>
//     );
//   }

//   return (
//     <div id="mytask-layout" className="theme-indigo">
//       {/* <NavigationBar />*/}
//       <Sidebar activekey={activekey()} history={history} />
//       <Switch>
//         <MainIndex activekey={activekey()} />
//       </Switch>
//     </div>
//   );
// }

// export default withRouter(App);

// Class Component

import React, { useState, useEffect } from "react";
import { Switch, withRouter, Redirect } from "react-router";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";
import Sidebar1 from "./components/common/Sidebar1";
import { Button } from 'react-bootstrap';
import { PacmanLoader } from 'react-spinners';
import "./App.css";
import "./spinner.css";

function App(props) {
  const { history, location } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timerId);
  }, []);

  const activeKey = () => {
    const res = location.pathname.split("/");
    return res.length > 1 ? `/${res[1]}` : "/";
  }

  if (isLoading) {
    return (
      <div className="pos-center">
        <PacmanLoader color="#350977" loading size={30} speedMultiplier={2} />
        <span style={{ paddingTop: '30px' }}>Loading...</span>
      </div>
    );
  }

  if (location.pathname === "/" || location.pathname === "/index.html") {
    return <Redirect to="/sign-in" />;
  }

  if (
    [
      "/sign-in",
      "/sign-up",
      "/password-reset",
      "/2-step-authentication",
      "/page-404",
    ].includes(activeKey())
  ) {
    return (
      <div id="mytask-layout" className="theme-indigo">
        <Switch>
          <AuthIndex />
        </Switch>
      </div>
    );
  }

  if (
    [
      "/Employeetask",
      "/Taskdetails",
      "/holidaysEmp",
      "/attendance-employeesEmp",
      "/attendanceEmp",
      "/leave-requestEmp",
      "/calanderEmp",
    ].includes(activeKey())
  ) {
    return (
      <div id="mytask-layout" className="theme-indigo">
        <Sidebar1 activekey={activeKey()} history={history} />
        <Switch>
          <MainIndex activekey={activeKey()} />
        </Switch>
      </div>
    );
  }

  return (
    <div id="mytask-layout" className="theme-indigo">
      <Sidebar activekey={activeKey()} history={history} />
      <Switch>
        <MainIndex activekey={activeKey()} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

