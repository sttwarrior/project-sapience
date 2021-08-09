import React from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "../../styles/PlanTask.css";

const AddNewTask = ({
    idx,
    bucketTitle,
    onClickAddNewTask,
    clickedAddNewTask,
    refInputAddNewTask,
    onSubmitNewTask,
}) => (
    <div>
        <Card 
            className="addNewTask mb-3"
            onClick={() => onClickAddNewTask(idx)}
        >
            <Card.Body className="p-2">
                <i className="bi-plus-lg mx-2" />
                Add task
            </Card.Body>
        </Card>
        {(clickedAddNewTask === idx)
        && <Card className="inputAddNewTask mb-2">
            <Card.Body className="p-3">
                <Form.Control
                    type="text"
                    className="mb-2"
                    name="inputTaskTitle"
                    ref={refInputAddNewTask}
                    autoFocus
                    placeholder="Enter a task name"
                />
                <Button 
                    className="p-0 btn-block"
                    type="button"
                    onClick = {() => onSubmitNewTask(bucketTitle)}
                >
                    Add task
                </Button>
            </Card.Body>
        </Card>}
    </div> 
) 


export default AddNewTask
