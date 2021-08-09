import React from "react";
import '../styles/Menu.css';
import { navs } from "../configs"
import { Row, Col } from 'react-bootstrap';
import history from '../configs/history'

class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            expanded: true
        }
        this.expandMenu = this.expandMenu.bind(this)
    }

    expandMenu() {

        this.setState({
            expanded: !this.state.expanded
        })
    }

    genMenuList = () => {
        const navKeys = Object.keys(navs)
        // const history = createBrowserHistory()
        const menuList = navKeys.map( (navKey, idx) => {
            const callback = () => navs[navKey].url ? history.push(navs[navKey].url) : this.props.toggleNewPlanOverlay()
            return(
                <Row className="px-3 py-2 mx-0 navs" key={idx} onClick={callback}>
                    <i className={`${navs[navKey].icon} px-1`} />
                    {this.state.expanded && 
                        <span className="mx-2">{navs[navKey].label}</span>}
                </Row>
            )
        })

        return menuList
    }

    render(){
        return(
            <Col className="mr-4 border-right menu bg-light" md="fluid">
                <Row className="px-3 py-2 mx-0 border-bottom" onClick={this.expandMenu}>
                    {this.state.expanded
                        ? <i className="bi bi-arrow-bar-left" />
                        : <i className="bi bi-arrow-bar-right" />
                    }
                </Row>
                <div className="mt-3">
                    {this.genMenuList()}
                </div>
            </Col>
        )
    }  
}

export default Menu;
