import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';

class UpdateProjectComponent extends Component {
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
        this.updateProject = this.updateProject.bind(this);
    }

    componentDidMount(){
        ProjectService.getProjectById(this.state.id).then( (res) =>{
            let project = res.data;
            this.setState({projectName: project.projectName,
                employeeName: project.employeeName,
                status : project.status
            });
        });
    }

    updateProject = (e) => {
        e.preventDefault();
        let project = {projectName: this.state.projectName, employeeName: this.state.employeeName, status: this.state.status};
        console.log('project => ' + JSON.stringify(project));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProjectService.updateProject(project, this.state.id).then( res => {
            this.props.history.push('/project');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Project</h3>
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

                                        <button className="btn btn-success" onClick={this.updateProject}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProjectComponent
