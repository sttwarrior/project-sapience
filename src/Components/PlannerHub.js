import React from "react";
// import './Main.css';
import { PlanDashboard } from "./PlanDashboard";
import PlanTaskBoard from "../containers/PlanTaskBoard"
import history from '../configs/history'
import { Row, Col, Card } from "react-bootstrap";
import {
    Route,
} from "react-router-dom";
import MyTasks from "./MyTasks";


class PlannerHub extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPlanList()
    }

    render(){

        const pid = new URLSearchParams(this.props?.location?.search).get("pid")
        const isDashboard = !pid
        
        return(
            isDashboard ? (
                <PlanDashboard planList={this.props.planList} deletePlan={this.props.deletePlan} />
            ) : (
                <PlanTaskBoard pid={pid} />
            )
        )
    }  
}

export default PlannerHub;
