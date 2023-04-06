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

import React, { Component } from "react";
import { Switch, withRouter, Redirect } from "react-router";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";
import Sidebar1 from "./components/common/Sidebar1";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.activekey = this.activekey.bind(this);
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  

  activekey() {
    const { location } = this.props;
    let res = location.pathname;
    let baseUrl = process.env.PUBLIC_URL;
    baseUrl = baseUrl.split("/sign-in");
    res = res.split("/");
    res = res.length > 0 ? res[baseUrl.length] : "/";
    res = res ? `/${res}` : "/";
    return res;
  }

  render() {
    
    const { history, location } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (location.pathname === "/" || location.pathname === "/index.html") {
      return <Redirect to="/sign-in" />;
      
    }
    if (
      this.activekey() === "/sign-in" ||
      this.activekey() === "/sign-up" ||
      this.activekey() === "/password-reset" ||
      this.activekey() === "/2-step-authentication" ||
      this.activekey() === "/page-404"
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
      this.activekey() === "/Employeetask" ||
      this.activekey() === "/Taskdetails" ||
      this.activekey() === "/holidays" ||
      this.activekey() === "/attendance-employees" ||
      this.activekey() === "/attendance" ||
      this.activekey() === "/leave-request" ||
      this.activekey() === "/calander"
    ) {
      return (
        <div id="mytask-layout" className="theme-indigo">
          <Sidebar1 activekey={this.activekey()} history={history} />
          <Switch>
            <MainIndex activekey={this.activekey()} />
          </Switch>
        </div>
      );
    }

    return (
      <div id="mytask-layout" className="theme-indigo">
        {/* <NavigationBar />*/}
        <Sidebar activekey={this.activekey()} history={history} />
        <Switch>
          <MainIndex activekey={this.activekey()} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

