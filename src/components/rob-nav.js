import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import RK from '../assets/RK.svg';

export default function RobNav(props) {
    return (
        <div className="top-left">
            <Navbar>
                <Navbar.Brand>
                    <a href="#">
                        <img
                            onClick={(event) => props.selectNavHandler(0, event)}
                            alt="Robert Kozura Logo"
                            width="50"
                            height="50"
                            src={RK}/>
                    </a>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={(event) => props.selectNavHandler(1, event)}>About</Nav.Link>
                    <Nav.Link onClick={(event) => props.selectNavHandler(2, event)}>Skills</Nav.Link>
                    <Nav.Link onClick={(event) => props.selectNavHandler(3, event)}>Projects</Nav.Link>
                    <Nav.Link onClick={(event) => props.selectNavHandler(4, event)}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}