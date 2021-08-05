import React from "react";
import logo from "../logo.svg"
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';

class Header extends React.Component{
    
    render(){
        return(
            <Navbar className="header border-bottom" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <i
                        className="bi-file-bar-graph align-middle mr-2"
                        style={{"font-size":"1.8rem"}}
                    />
                    <span className="align-middle" style={{"font-size":"1.5rem"}}>
                        Project Sapience
                    </span>
                </Navbar.Brand>
                <Navbar.Brand className="w-100 d-flex justify-content-end">
                    <i
                        className="bi-person-circle align-middle"
                        style={{"font-size":"1.8rem"}}
                    />
                </Navbar.Brand>
            </Navbar>
        )
    }  
}

export default Header;
