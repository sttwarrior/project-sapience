import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Header.css';

class Header extends React.Component{
    
    render(){
        return(
            <Row className="Header-nav" >
                <Col>[the apps]</Col>
                <Col md="auto">[three icons here]</Col>
            </Row>
        )
    }  
}

export default Header;
