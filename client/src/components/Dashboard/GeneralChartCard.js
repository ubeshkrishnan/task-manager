import React from "react";
import Chart from 'react-apexcharts';

class GeneralChartCard extends React.Component{
    state={
        option:this.props.data.options,
        series:this.props.data.options.series
    }
    componentDidMount(){
       
    }
    render(){
        const{identity,Title,TitleRight,extraDivBody} = this.props;
        return(
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">{Title}</h6>
                    {TitleRight?<h4 className="mb-0 fw-bold">{TitleRight}</h4>:null}
                </div>
                <div className="card-body" >
                    {extraDivBody?extraDivBody():null}
                    <div ac-chart="'donut'" id={"SimpleCahrt"+identity}>
                        <Chart 
                            options={this.state.option} 
                            series={this.state.series} 
                            type={this.state.option?this.state.option.chart.type:"bar"} 
                            height={this.state.option?this.state.option.chart.height:320} 
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default GeneralChartCard;