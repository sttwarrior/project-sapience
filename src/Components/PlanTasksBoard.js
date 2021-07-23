import React from "react";
// import './Main.css';
import { Row, Col, Card } from "react-bootstrap";

class PlannerHub extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            planList: [],
            pid: null
        }
    }

    componentDidMount() {
        this.setState({planList: JSON.parse(sessionStorage.planList)})
    }

    render(){

        //Delete this one later 

        return(
            this.state.pid ? 
                `${this.state.pid}` :
                <Col>
                    <Row fluid="true">
                        Welcome, "Pass the name here"!
                    </Row>
                    <Row fluid="true">
                        {this.state.planList.map( (item, idx) => {
                            return(
                                <Card key={idx} style={{ width: '33%' }} onClick={()=>{this.setState({pid: item.pid})}}>
                                    <Card.Header>{`Project: ${item.title}`}</Card.Header>
                                    <Card.Img variant="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/259px-How_to_use_icon.svg.png" />
                                    <Card.Body>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        )}
                    </Row>
                </Col>
        )
    }  
}

export default PlannerHub;
