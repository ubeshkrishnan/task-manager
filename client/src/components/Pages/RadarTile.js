import React from "react";
import Chart from "react-apexcharts";
import { Dropdown } from "react-bootstrap";

class RadarTile extends React.Component {
    state = {
        options: this.props.data.chartData?this.props.data.chartData.options:"",
        series:this.props.data.chartData?this.props.data.chartData.series:"",
      };
  render(){
     const {data} = this.props;
    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0">{data.title}</h6>
                <Dropdown drop="left">
                        <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link"></i></button>
                        <Dropdown.Toggle variant="" className="btn btn-sm btn-link text-muted">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#!">Action</Dropdown.Item>
                            <Dropdown.Item href="#!">Another action</Dropdown.Item>
                            <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
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

export default RadarTile;