import React from "react";
import history from '../configs/history'
import { Row, Col, Card } from "react-bootstrap";
import "../styles/PlanTask.css";

const PlanTask = (props) => {

    return(
        <Card bg="Light" className="PlanTaskCard">
            <Card.Body>
                <Card.Title className="h6">
                    {props.taskTitle}
                    <span style={{float:"right"}} onClick={()=>props.deleteTask(props.tid)}>
                        [x]
                    </span>
                </Card.Title>
                <Card.Text>
                    Task details
                </Card.Text>
            </Card.Body>
        </Card>
    ) 
}

export default PlanTask
