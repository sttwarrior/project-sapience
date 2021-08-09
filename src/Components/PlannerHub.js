import React from "react";
// import './Main.css';
import { PlanDashboard } from "./PlanDashboard";
import PlanTaskBoard from "../containers/PlanTaskBoard"


class PlannerHub extends React.Component{

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
