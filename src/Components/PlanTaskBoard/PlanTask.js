import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/PlanTask.css";

const PlanTask = (props) => {

    return(
        <Card bg="Light" className="mb-2 planTask">
            <Card.Body className="p-3">
                <Card.Title className="h6">
                    {props.taskTitle}
                    <span style={{float:"right"}} onClick={()=>props.deleteTask(props.tid)}>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
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
