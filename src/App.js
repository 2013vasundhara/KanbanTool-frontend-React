import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProjectComponent from './components/ListProjectComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
//import UpdateProjectComponent from './components/UpdateProjectComponent';
import Home from './components/Home';
import ViewProjectComponent from './components/ViewProjectComponent';



function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                    <Route path = "/" exact component = {Home}></Route>
                          {/* <Route path = "/" exact component = {ListProjectComponent}></Route> */}
                          <Route path = "/project" component = {ListProjectComponent}></Route>
                          <Route path = "/add-project/:id" component = {CreateProjectComponent}></Route>
                          <Route path = "/view-project/:id" component = {ViewProjectComponent}></Route>
                          {/* <Route path = "/update-project/:id" component = {UpdateProjectComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
