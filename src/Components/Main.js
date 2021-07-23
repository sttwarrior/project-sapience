import React from "react";
import './Main.css';
import PlannerHub from './PlannerHub';
import MyTasks from './MyTasks';
import Menu from './Menu.js';
import { Row } from 'react-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

class Main extends React.Component{

    render(){

        //Delete this one later 
        const menuList = [{title: "New plan", id:1}, {title: "Planner hub", id:2}, {title: "My tasks", id:3}]
        return(
            <Row fluid="true" className="Main">
                <Menu menuList={menuList} />
                <BrowserRouter>
                    <Route exact path="/" render={() => <Redirect to="/PlannerHub"/>} />
                    <Route exact path="/PlannerHub" component={PlannerHub} />
                    <Route exact path="/MyTasks" component={MyTasks} />
                </BrowserRouter>
            </Row>
        )
    }  
}

export default Main;
