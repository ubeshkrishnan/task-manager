import React from "react";
import Chart from "react-apexcharts";

class ApexSparkTile extends React.Component {
    state = {
        options: this.props.data.chartData?this.props.data.chartData.options:"",
        series:this.props.data.chartData?this.props.data.chartData.series:"",
      };
  render(){
    return (
        <div className="card mb-4">
            <div className="card-body">
            {this.state.options?<Chart
                    options={this.state.options}
                    series={this.state.series}
                    type={this.state.options?this.state.options.chart.type:"bar"}
                    height={this.state.options?this.state.options.chart.height:315}
                    />:null}
            </div>
        </div>
    );
  }
}

export default ApexSparkTile;