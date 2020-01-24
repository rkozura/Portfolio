import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Hire from './hire';
import InfoCard from './info-card';
import rob from '../assets/rob.jpg';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bcbssc from '../assets/bcbssc.jpg';
import Technica from '../assets/technica.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';
import js from '../assets/js.jpg';
import jmu from '../assets/jmu.jpg';
import java from '../assets/java.jpg';
import RK from '../assets/RK.svg';
import dartflutter from '../assets/dart-flutter.png';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

function Overview() {
    return (
        <div className="d-flex flex-grow flex-column align-items-center justify-content-center">
            <p className="text-primary"><strong>HI!</strong></p>
            <p>My name is Robert Kozura</p>
            <p>I love created frontend code!</p>
        </div>
    );
}                  

export default class Banner extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            selectedNav: '#overview',
            selectedContent: <div></div>
        }
    }

    render() {
        return (
            <Router>
                <Navbar>
                    <Navbar.Brand>
                        <img width="50" height="50" src={RK}/>
                    </Navbar.Brand>
                    <Nav activeKey="" className="mr-auto">
                        <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Hire></Hire>
                </Navbar>
                <Switch>
                    <Route path="/skills" component={InfoCard} />
                    <Route path="/overview" component={Overview} />
                    <Route path="/contact" component={null} />
                    <Redirect from="/" exact to="/overview" />
                </Switch>
            </Router>
        );
    }
}