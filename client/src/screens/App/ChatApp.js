import React from "react";
import { chatAppData } from "../../components/Data/AppData";
import Chattile from "../../components/Pages/Chattile";

class ChatApp extends React.Component{
    render(){
        return(
            <div className="container-xxl">
                <div className="row clearfix g-3">
                    <Chattile data={chatAppData} />
                </div>
            </div>
        )
    }
}

export default ChatApp;