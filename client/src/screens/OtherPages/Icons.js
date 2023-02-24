import React from "react";
import PageHeader from "../../components/common/PageHeader";
import IconFontsCard from "../../components/Pages/IconFontsCard";

class Icons extends React.Component{
    render(){
        return(
            <div className="container-xxl">
                <PageHeader headerTitle="Fonts Icons"  />
                <div className="row align-item-center">
                    <div className="col-md-12">
                        <IconFontsCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Icons;