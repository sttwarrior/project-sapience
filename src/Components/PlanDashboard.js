import React from "react";
// import './Main.css';
import history from '../configs/history'
import { navs } from "../configs"
import { Row, Col, Card } from "react-bootstrap";

export const PlanDashboard = (props) => {

    return(
        <Col>
            <Row className="pt-3 mb-3" fluid="true">
                Welcome, Name!
            </Row>
            <Row fluid="true">
                {props.planList.map( (plan, idx) => {
                    return(
                        <Col md="3 pl-0">
                            <Card key={idx} onClick={()=>{
                                history.push(`${navs.plannerHub.url}?pid=${plan.pid}`)
                            }}>
                                <Card.Header>{plan.title}</Card.Header>
                                {/* <Card.Img variant="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/259px-How_to_use_icon.svg.png" /> */}
                                <Card.Body>
                                    <Card.Text>
                                    Project Details here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                )}
            </Row>
        </Col>
    ) 
}
