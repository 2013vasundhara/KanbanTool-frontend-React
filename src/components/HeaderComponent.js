import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    // BackHome(){
    //     this.props.history.push('/');
    // }
    render() {
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <span><a href="https://javaguides.net" className="navbar-brand">Project Management Application</a></span>
                   <br></br>
                    <ul>
                            <li className="list"><a href="/">Home</a></li>
                            {/* <li><a href="/customers">Customers</a></li>
                            <li><a href="/movies">Movies</a></li>
                            <li><a href="#">Blog</a></li> */}
                        </ul>
                  
                    {/* <div class="text-left"> */}
                    {/* <button onClick={ () => this.BackHome()} className="btn btn-dark mr-2 float-right ml-2">Home </button> */}
                {/* </div> */}
                </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
