import React from "react";
import { Navbar } from 'react-bootstrap';
import '../styles/Header.css';

class Header extends React.Component{
    
    render(){
        return(
            <Navbar className="header border-bottom" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <i
                        className="bi-file-bar-graph align-middle mr-2"
                        style={{"fontSize":"1.8rem"}}
                    />
                    <span className="align-middle" style={{"fontSize":"1.5rem"}}>
                        Project Sapience
                    </span>
                </Navbar.Brand>
                <Navbar.Brand className="w-100 d-flex justify-content-end">
                    <i
                        className="bi-person-circle align-middle"
                        style={{"fontSize":"1.8rem"}}
                    />
                </Navbar.Brand>
            </Navbar>
        )
    }  
}

export default Header;
