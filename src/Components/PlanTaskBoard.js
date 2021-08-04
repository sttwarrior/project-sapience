import React from "react";
// import './Main.css';
import PlanTask from "./PlanTask"
import { Row, Col, Card } from "react-bootstrap";

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
                <Row className="pt-3 mb-3" fluid="true">
                    <Col md="auto">
                        [planIcon]
                    </Col>
                    <Col>
                        {this.props.planInfo.title}
                    </Col>
                </Row>
                <Row fluid="true">
                    {buckets.map((bucketTitle, idx) => {                        
                        return(
                            <Col md="3">
                                {bucketTitle}
                                <div onClick={() => this.props.addNewTask({
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
