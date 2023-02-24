import React from "react";

class AdvancedValidationForm extends React.Component {
    state = {
        carector: "",
        carector2: "",
        button: false,
        number: "",
        p: "",
        a: false,
        b: false,
        c: false,
        check1: false,
        check2: false,
        check3: false,
    };
    render(){
        return (
            <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Advanced Validation Form</h6> 
                </div>
                <div className="card-body">
                    <form id="advanced-form" data-parsley-validate="">
                        <div className="row g-3 align-items-center">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="text-input1" className="form-label">Min. 8 Characters</label>
                                    <input type="text" id="text-input1" className="form-control" value={this.state.carector} onChange={e => {this.setState({ carector: e.target.value });}} required data-parsley-minlength="8" />
                                    {this.state.carector.length <= 8 && this.state.button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="text-input2" className="form-label">Between 5-10 Characters</label>
                                    <input type="text" id="text-input2" className="form-control" value={this.state.carector2} onChange={e => {this.setState({ carector2: e.target.value });}} required data-parsley-length="[5,10]" />
                                    {this.state.carector2.length <= 5 && this.state.button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="text-input3" className="form-label">Min. Number ( &gt;= 5 )</label>
                                    <input type="text" id="text-input3" className="form-control" value={this.state.number} onChange={e => {this.setState({ number: e.target.value });}} required data-parsley-min="5" />
                                    {this.state.number.length <= 5 && this.state.button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="text-input4" className="form-label">Between 20-30</label>
                                    <input type="text" id="text-input4" className="form-control" value={this.state.number} onChange={e => {this.setState({ p: e.target.value });}} required data-parsley-range="[20,30]" />
                                    {this.state.p.length <= 20 && this.state.button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                    {this.state.p.length >= 30 && this.state.button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Select Min. 2 Options</label>
                                    <br />
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox2" onChange={e => {this.setState({ a: true });}} required data-parsley-mincheck="2" data-parsley-errors-container="#error-checkbox2" data-parsley-multiple="checkbox2" />
                                        <span className="px-2">Option 1</span>
                                    </label>
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox2" onChange={e => {this.setState({ b: true });}} data-parsley-multiple="checkbox2" />
                                        <span className="px-2">Option 2</span>
                                    </label>
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox2" onChange={e => {this.setState({ c: true });}} data-parsley-multiple="checkbox2" />
                                        <span className="px-2">Option 3</span>
                                    </label>
                                    {this.state.a === false && this.state.b === false && this.state.c === false && this.state.button ? (<span className="text-danger d-block"> meximum Any 2 default checked</span>) : ("")}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Select Between 1-2 Options</label>
                                    <br />
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox3" onChange={e => {this.setState({ check1: true });}} required data-parsley-check="[1,2]" data-parsley-errors-container="#error-checkbox3" data-parsley-multiple="checkbox3" />
                                        <span className="px-2">Option 1</span>
                                    </label>
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox3" onChange={e => {this.setState({ check2: true });}} data-parsley-multiple="checkbox3" />
                                        <span className="px-2">Option 2</span>
                                    </label>
                                    <label className="control-inline fancy-checkbox">
                                        <input type="checkbox" name="checkbox3" onChange={e => {this.setState({ check3: true });}} data-parsley-multiple="checkbox3" />
                                        <span className="px-2">Option 3</span>
                                    </label>
                                    {this.state.check1 === false && this.state.check2 === false && this.state.check3 === false && this.state.button ? (<span className="text-danger d-block"> meximum Any 2 default checked</span>) : ("")}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" onClick={() => {this.setState({ button: true });}}>Validate</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AdvancedValidationForm;