import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';
import { GoProject } from "react-icons/go";
class ListProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                project: []
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(id){
        ProjectService.deleteProject(id).then( res => {
            this.setState({project: this.state.project.filter(project => project.id !== id)});
        });
    }
    viewProject(id){
        this.props.history.push(`/view-project/${id}`);
    }
    editProject(id){
        this.props.history.push(`/add-project/${id}`);
    }

    componentDidMount(){
        ProjectService.getProject().then((res) => {
            this.setState({ project: res.data});
        });
    }

    addProject(){
        this.props.history.push('/add-project/_add');
    }

    render() {
        return (
<div className="container customerList" style={{marginBottom: "100px"}}>
<h2 className="text-center"><u>Projects List</u></h2>
<div className = "row">
 
    <button className="btn btn-dark"style={{marginLeft: "20px"}} onClick={this.addProject}> Add Project</button>
 </div>
 <br></br>
 <div className = "row">
        {
            this.state.project.map(
                project => 

                <div class="card" style={{width: "25rem", margin:"20px  20px"}}>
                    

                    <div class="card-body" key = {project.id}>
                        <h4 class="card-title"> <u>{ project.projectName}</u> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <GoProject size="50px" color="33CCFF"/> </h4>
                        <h6 class="card-subtitle mb-2">Name:&nbsp;&nbsp; {project.employeeName}</h6>
                        <h6 class="card-subtitle mb-2">Status:&nbsp;&nbsp;  {project.status}</h6>

                        <button onClick={ () => this.editProject(project.id)} className="btn-success button5">Revise </button>
                        <button style={{marginLeft: "30px"}} onClick={ () => this.deleteProject(project.id)} className=" btn-danger button5">Drop</button>
                        <button style={{marginLeft: "30px"}} onClick={ () => this.viewProject(project.id)} className=" btn-info button5">Details </button>
                    </div>
                </div>
            )
        }
       

 </div>

</div>

        )
    }
}

export default ListProjectComponent
