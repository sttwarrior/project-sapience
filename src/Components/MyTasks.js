import React from "react";
// import './Main.css';
import { Row, Col } from 'react-bootstrap';

class MyTasks extends React.Component{

    render(){
        
        return(
            <Col className="my-tasks">
                <Row className="pt-3 mb-3" fluid="true">
                    Your tasks:
                </Row>
            </Col>
        )
    }  
}

export default MyTasks;
