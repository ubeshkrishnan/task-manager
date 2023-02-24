import React from "react";
import DataTable from "react-data-table-component";
import AddNewUserModal from "../../components/common/AddNewUserModal";
import PageHeader from "../../components/common/PageHeader";
import { LeadersListData } from "../../components/Data/AppData";

class Leaders extends React.Component{
    state={
        isAddUserModa:false
    }
    render(){
        return(
            <div className="container-xxl">
                <PageHeader headerTitle="Leaders"  />
                <div className="row clearfix g-3">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <DataTable
                                title={LeadersListData.title}
                                columns={LeadersListData.columns}
                                data={LeadersListData.rows}
                                defaultSortField="title"
                                pagination
                                selectableRows={false}
                                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                                highlightOnHover={true}
                                onRowClicked={()=>{this.setState({ isAddUserModal:true })}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <AddNewUserModal show={ this.state.isAddUserModal } onClose={()=>{ this.setState({ isAddUserModal:false }) }} />
            </div>
        )
    }
}

export default Leaders;