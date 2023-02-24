import React from "react";
import { Switch, withRouter } from "react-router";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";

class App extends React.Component {
  activekey() {
    var res = window.location.pathname
      var baseUrl = process.env.PUBLIC_URL
      baseUrl = baseUrl.split("/");
      res = res.split("/");
      // res = res.length > 1 ? res[res.length-1] : "/";
      res = res.length>0 ? res[baseUrl.length] : "/";
      res= res ? "/"+res : "/";;
      const activeKey1=res;
      return activeKey1
  }
  render(){
    if(this.activekey() === "/sign-in" || this.activekey() === "/sign-up" || this.activekey() === "/password-reset" || this.activekey() === "/2-step-authentication" || this.activekey() === "/page-404"){
      return(
        <div id="mytask-layout" className="theme-indigo">
          <Switch>
            <AuthIndex />
          </Switch>
        </div>
      )
    }
    return (
      <div id="mytask-layout" className="theme-indigo">
        <Sidebar activekey={this.activekey()} history={this.props.history}/>
        <Switch>
          <MainIndex activekey={this.activekey()}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
