import React from "react";
import './Menu.css';
import { Row, Col, Image } from 'react-bootstrap';

class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            expanded: true
        }
        this.expand_menu = this.expand_menu.bind(this)
    }

    expand_menu() {

        this.setState({
            expanded: !this.state.expanded
        })
    }

    render(){
        return(
            <Col className="Menu" md={this.state.expanded ? 2 : 1}>
                <Row onClick={this.expand_menu}>
                    [Icon]
                </Row>
                {this.props.menuList.map( (item, idx) => {
                    return(
                        <Row key={idx}>
                            <Image />
                            {item.title}
                        </Row>
                    )
                })}
            </Col>
        )
    }  
}

export default Menu;
