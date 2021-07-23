import React from "react";
// import './Main.css';
import { Row, Col } from 'react-bootstrap';

class MyTasks extends React.Component{

    render(){

        //Delete this one later 
        const menuList = [{title: "New Plan", id:1}, {title: "Plan Hub", id:2}, {title: "My Task", id:3}]
        return(
            <Col>
                <Row fluid="true">
                    My Tasks
                </Row>
            </Col>
        )
    }  
}

export default MyTasks;
