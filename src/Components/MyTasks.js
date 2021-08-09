import React from "react";
// import './Main.css';
import { Row, Col } from 'react-bootstrap';

class MyTasks extends React.Component{

    render(){
        
        return(
            <Col>
                <Row fluid="true">
                    <h6> My Tasks </h6>
                </Row>
            </Col>
        )
    }  
}

export default MyTasks;
