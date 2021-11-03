import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
               
        }
    }
    Project(){
        this.props.history.push('/project');
    }
    render() {
        return (
            <div className="addIcon">
                  <br></br>
                 <br></br>
                <div className = "row ">
                 <div className="col-md-12 text-center">
                                <h1 className="display-2 mb-4 bold">Kanban Tool</h1>
                                <br></br>
                                <h4 className=" bold">
                            Tool to create and  manage your projects
                            </h4> 
                            <br></br>
                               <button onClick={ () => this.Project()} className="btn btn-lg btn-dark mr-2">Project </button>
                            </div>


                 <table className = " table-striped table-bordered table1" align="center">

                            
                            <tbody>
                               
                                        <tr>
                                             {/* <td><button onClick={ () => this.Project()} className=" hbutton ">Project </button>  </td>    */}
                                             {/* <td><button style={{marginLeft: "10px"}} onClick={ () => this.Driver()} className=" hbutton" >Driver </button>  </td>  */}
                                             
                                        </tr>
                                    
                                
                            </tbody>
                        </table>
                 </div>
            
            </div>
        );
    }
}

export default Home;