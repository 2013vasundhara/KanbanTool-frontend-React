import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'
import { BiDetail } from "react-icons/bi";

class ViewProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            project: {}
        }
    }

    componentDidMount(){
        ProjectService.getProjectById(this.state.id).then( res => {
            this.setState({project: res.data});
        })
    }

    render() {
        return (
            <div className="dashbg">
                <br></br>
                <div className = "card col-md-6 offset-md-3 border border-secondary">
                    <h3 className = "text-center"> View Project Details&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    <BiDetail size="50px" color="33CCFF"/></h3>
                    <div className = "card-body">
                        <div className = "row">
                            <h4><u> Project Name:</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            { this.state.project.projectName }</h4>
                        </div>
                        <div className = "row">
                        <h4><u> Employee Name:</u>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            { this.state.project.employeeName }</h4>
                        </div>
                        <div className = "row">
                        <h4><u>  Project Status: </u>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             { this.state.project.status }</h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProjectComponent
