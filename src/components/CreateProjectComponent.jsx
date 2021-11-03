import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';
import { GrDocumentUpdate } from "react-icons/gr";

class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            projectName: '',
            employeeName: '',
            status: ''
        }
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.saveOrUpdateProject = this.saveOrUpdateProject.bind(this);
    }

   
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            ProjectService.getProjectById(this.state.id).then( (res) =>{
                let project = res.data;
                this.setState({projectName: project.projectName,
                    employeeName: project.employeeName,
                    status : project.status
                });
            });
        }        
    }
    saveOrUpdateProject = (e) => {
        e.preventDefault();
        let project = {projectName: this.state.projectName, employeeName: this.state.employeeName, status: this.state.status};
       

     
        if(this.state.id === '_add'){
            ProjectService.createProject(project).then(res =>{
                this.props.history.push('/project');
            });
        }else{
            ProjectService.updateProject(project, this.state.id).then( res => {
                this.props.history.push('/project');
            });
        }
    }
    
    changeProjectNameHandler= (event) => {
        this.setState({projectName: event.target.value});
    }

    changeEmployeeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/project');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center"><u>Add Project</u> &nbsp; &nbsp;&nbsp;
            <GrDocumentUpdate  size="50px" color="33CCFF"/></h3>
        }else{
            return <h3 className="text-center"><u>Update Project</u>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <GrDocumentUpdate  size="50px" color="33CCFF"/></h3>
        }
    }
    render() {
        return (
            <div className="dashbg">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 border border-secondary">

                                {
                                    this.getTitle()
                                }
                                
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Project Name: </label>
                                            <input placeholder="Project Name" name="projectName" className="form-control" 
                                                value={this.state.projectName} onChange={this.changeProjectNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Employee Name: </label>
                                            <input placeholder="Employee Name" name="employeeName" className="form-control" 
                                                value={this.state.employeeName} onChange={this.changeEmployeeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <button className=" btn-success button5" onClick={this.saveOrUpdateProject}>Save</button>
                                        <button className=" btn-danger button5" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProjectComponent
