import React from "react";
import '../styles/NewPlanOverlay.css';
import {  
  Container,
  Row,
  Col, 
  Form, 
  Button, 
  InputGroup 
} from 'react-bootstrap';

class NewPlanOverlay extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      validated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState({validateed:true});
  };
  
  render() {
    return (
      <div className={`${this.props.activated?"":"invisible"}`} >
        <Form
          noValidate
          className="overlay-content p-4"
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Row className="mb-4">
            <Col fluid>
              New Plan
            </Col>
            <Col md="1" onClick={this.props.toggleNewPlanOverlay}>
              [X]
            </Col>
          </Row>
          <Row>
            <Form.Group as={Col} fluid controlId="validationCustom02">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
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
                name="radio-privacy"
                id="default-radio"
                label="Public - Anyone in my organization can see plan contents"
              />
              <Form.Check 
                type="radio"
                name="radio-privacy"
                id="default-radio"
                label="Private - Only members I add can see plan contents"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
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
