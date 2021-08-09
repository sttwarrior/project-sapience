import React from "react";
import '../styles/PlanDashboard.css';
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
                        <Col sm="6" md="4" lg="3" className="pl-0">
                            <Card 
                                key={idx}
                                className="planCard mb-3" 
                                onClick={()=>{
                                    history.push(`${navs.plannerHub.url}?pid=${plan.pid}`)
                            }}>
                                <Card.Header>
                                    <Row>
                                        <Col fluid>
                                            <i className="bi-app mr-3" />
                                            {plan.title}
                                        </Col>
                                        <Col md="1" onClick={
                                            (e)=> {
                                                e.stopPropagation()
                                                props.deletePlan(plan.pid)
                                        }}>
                                            <button type="button" className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>                                       
                                        </Col>
                                    </Row>
                                </Card.Header>
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
