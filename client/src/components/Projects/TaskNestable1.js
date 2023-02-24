import React from "react";
import NestableCard from "./NestableCard";
import { Draggable, Droppable } from "react-drag-and-drop";

class TaskNestable1 extends React.Component{
    state = {
        dropable:[...this.props.InProgressTaskData],
        gragable:[...this.props.needReviewData],
        Copmplete: [...this.props.CompletedData],
    };

    onDropT = data => {
    var dropabl = this.state.dropable;
    var dropablOnly = this.state.gragable;
    var dropablComplete = this.state.Copmplete;
    dropabl = dropabl.filter(item => item.Data !== data.grag);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        dropabl.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        dropabl.push(dropablComplete[0]);
    }

    const filtereddropable = this.state.gragable.filter(
        item => item.Data !== data.grag
    );
    const filteredCopmplete = this.state.Copmplete.filter(
        item => item.Data !== data.grag
    );

    this.setState({
        dropable: [...dropabl],
        gragable: [...filtereddropable],
        Copmplete: [...filteredCopmplete],
    });
    };
    
    onDrop = data => {
    var dropabl = this.state.gragable;
    var dropablOnly = this.state.dropable;
    var dropablComplete = this.state.Copmplete;
    console.log("Drop",data.grag);
    dropabl = dropabl.filter(item => item.Data !== data.grag);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        dropabl.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        dropabl.push(dropablComplete[0]);
    }
    

    const filteredgragable = this.state.dropable.filter(
        item => item.Data !== data.grag
    );
    const filteredCopmplete = this.state.Copmplete.filter(
        item => item.Data !== data.grag
    );

    this.setState({
        gragable: [...dropabl],
        dropable: [...filteredgragable],
        Copmplete: [...filteredCopmplete],
    });
    };
    
    onDropCompete = data => {
    var Comp = this.state.Copmplete;
    var dropablOnly = this.state.dropable;
    var dropablComplete = this.state.gragable;
    console.log("Complete",data.type);
    Comp = Comp.filter(item => item.Data !== data.fruit);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        Comp.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        Comp.push(dropablComplete[0]);
    }

    const filteredgragable = this.state.gragable.filter(
        item => item.Data !== data.fruit
    );
    const filtereddropable = this.state.dropable.filter(
        item => item.Data !== data.fruit
    );

    this.setState({
        gragable: [...filteredgragable],
        dropable: [...filtereddropable],
        Copmplete: [...Comp],
    });
    };

    render(){
        const {dropable,gragable,Copmplete} = this.state;
        return(
            <div className="row taskboard g-3 py-xxl-4">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">In Progress</h6>
                    <Droppable
                        key={"1"}
                        onDragExit={data => {}}
                        onDrop={this.onDropT.bind(this)}
                        types={["grag"]}
                        className=""
                    >
                        {
                            dropable.map((data,i)=>{
                                return <Draggable
                                        type={data.type}
                                        data={data.Data}
                                        key={"gragglkasej" + i}
                                    >
                                        <NestableCard data={data}/>
                                    </Draggable>
                            })
                        }
                        <div className="p-5">

                        </div>
                    </Droppable>    
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
                        <Droppable
                            key={"1"}
                            onDragExit={data => {}}
                            onDrop={this.onDrop.bind(this)}
                            types={["grag"]}
                            className=""
                        >
                            {
                                gragable.map((data,i)=>{
                                    return <Draggable
                                            type={data.type}
                                            data={data.Data}
                                            key={"gragglkasej" + i}
                                        >
                                            <NestableCard data={data}/>
                                        </Draggable>
                                })
                            }
                            <div className="p-5">

                            </div>
                        </Droppable>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">Completed</h6>
                        <Droppable
                                key={"1"}
                                onDragExit={data => {}}
                                onDrop={this.onDropCompete.bind(this)}
                                types={["grag"]}
                                className=""
                            >
                                {
                                    Copmplete.map((data,i)=>{
                                        return <Draggable
                                                type={data.type}
                                                data={data.Data}
                                                key={"gragglkasej" + i}
                                            >
                                                <NestableCard data={data}/>
                                            </Draggable>
                                    })
                                }
                                <div className="p-5">

                            </div>
                        </Droppable>
                </div>
            </div>
        )
    }
}

export default TaskNestable1;