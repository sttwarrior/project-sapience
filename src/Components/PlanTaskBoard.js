import React from "react";
import PlanTask from "./PlanTask"
import { Row, Col, Card } from "react-bootstrap";
import "../styles/planTaskBoard.css";

class PlanTaskBoard extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPlanInfo()
    }

    render(){

        const buckets = this.props?.planInfo?.buckets || []
        const tasks = this.props?.planInfo?.tasks || []

        // Move below to filter/sorting function
        // The function should be inherited from props
        const taskSorted = buckets.reduce((acc,cur) => (acc[cur]=[], acc), {})
        for (let task of tasks) {
            if(taskSorted[task.bucket]) taskSorted[task.bucket].push(task)
        }

        return(
            <Col>
                <Row className="pt-3 mb-3 taskHeader" fluid="true">
                    <Col md="auto">
                        <i class="bi-app mr-3" />
                        <span>{this.props.planInfo.title}</span>
                    </Col>
                </Row>
                <Row fluid="true">
                    {buckets.map((bucketTitle, idx) => {                        
                        return(
                            <Col md="3">
                                {bucketTitle}
                                <div
                                    onClick={() => this.props.addNewTask({
                                        bucket: bucketTitle,
                                        taskTitle: "New Task"
                                })}
                                    >[+]
                                </div>
                                {taskSorted[bucketTitle].map((task, idx) => <PlanTask {...task} deleteTask={this.props.deleteTask} />)}
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        )
    }  
}

export default PlanTaskBoard;
