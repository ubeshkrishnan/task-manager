import React from "react";
import ApexCharts from "apexcharts"

class GeneralChartCard extends React.Component{
    componentDidMount(){
        const{identity,data} = this.props;
        if(data){
                var opt = data.options;
                
                var chart = new ApexCharts(
                    document.getElementById("SimpleCahrt"+identity),
                opt  
                );
                chart.render();
        }
    }
    render(){
        const{identity,Title,TitleRight,extraDivBody,footerBody} = this.props;
        return(
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">{Title}</h6>
                    {TitleRight?<h4 className="mb-0 fw-bold">{TitleRight}</h4>:null}
                </div>
                <div className="card-body" >
                    {extraDivBody?extraDivBody():null}
                    <div id={"SimpleCahrt"+identity}></div>
                    {footerBody?footerBody:null}
                    
                </div>
            </div>
        )
    }
}

export default GeneralChartCard;