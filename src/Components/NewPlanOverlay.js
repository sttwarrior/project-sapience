import React from "react";
import '../styles/NewPlanOverlay.css';
import {  
  Row,
  Col, 
  Form, 
  Button, 
} from 'react-bootstrap';
import { addNewPlan } from '../actions'
import store from "../reducers/store"

class NewPlanOverlay extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      validated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const form = e.target.elements
    const formPlanTitle = form.formPlanTitle.value
    const formPlanPrivacy = form.formPlanPrivacy.value
    const planObj = {
      title: formPlanTitle,
      privacy: formPlanPrivacy,
    }
 
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    // this.setState({validateed:true});

    form.formPlanTitle.value = ""
    this.props.toggleNewPlanOverlay()
    store.dispatch(addNewPlan(planObj))
  };
  
  render() {
    return (
      <div className={`${this.props.activated?"": "d-none" }`} >
        <Form
          noValidate
          className="overlay-content p-4"
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Row className="py-2 mb-3 border-bottom">
            <Col fluid>
              <span>New Plan</span>
            </Col>
            <Col md="1">
              <button type="button" className="close pb-1" aria-label="Close" onClick={this.props.toggleNewPlanOverlay}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Col>
          </Row>
          <Row>
            <Form.Group as={Col} fluid controlId="validationCustom02">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                name="formPlanTitle"
                required
                type="text"
                placeholder="Plan Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Label>Privacy</Form.Label>
              <Form.Check 
                type="radio"
                name="formPlanPrivacy"
                value="Public"
                id="default-radio"
                label="Public - Anyone in my organization can see plan contents"
              />
              <Form.Check 
                type="radio"
                name="formPlanPrivacy"
                value="Privacy"
                id="default-radio"
                label="Private - Only members I add can see plan contents"
              />
              <Form.Control.Feedback type="invalid">
                Please fill out required information.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="btn-block">
            Create New Plan
          </Button>
        </Form>
        <div
          className="overlay"
          onClick={this.props.toggleNewPlanOverlay}
        />
      </div>
    );
  }
}

export default NewPlanOverlay;
