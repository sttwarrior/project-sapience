import React from "react";
import '../styles/Main.css';
import PlannerHub from '../containers/PlannerHub';
import MyTasks from './MyTasks';
import NewPlanOverlay from './NewPlanOverlay';
import Menu from './Menu.js';
import { Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { navs } from "../configs"

class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            newPlanOverlay: false
        }
    }

    toggleNewPlanOverlay = () => {

        this.setState({
            newPlanOverlay: !this.state.newPlanOverlay
        })
    }

    render(){

        return(
            <Row fluid="true" className="Main mx-auto">
                <NewPlanOverlay activated={this.state.newPlanOverlay} toggleNewPlanOverlay={this.toggleNewPlanOverlay} />
                <Menu toggleNewPlanOverlay={this.toggleNewPlanOverlay} />
                <Switch>
                    <Route path={navs.plannerHub.url} component={PlannerHub} />
                    {/* <Route path={`${navs.plannerHub.url}/:pid`} component={MyTasks}/> */}
                    <Route exact path={navs.myTasks.url} component={MyTasks} />
                    <Route exact path="/" render={() => <Redirect to={navs.plannerHub.url} />} />
                    {/* <Redirect from="*" to='/' /> */}
                </Switch>
            </Row>
        )
    }  
}

export default Main;
