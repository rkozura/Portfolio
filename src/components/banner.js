import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
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
            <h1 className="text-primary display-1"><strong>HELLO!</strong></h1>
            <p class="lead">My name is <span className="text-info">Robert Kozura</span></p>
            <p>I love coding frontend single page applications!</p>
        </div>
    );
}                  

export default class Banner extends React.Component {
    render() {
        return (
            <div className="d-flex flex-grow flex-column">
                <Navbar>
                    <Navbar.Brand>
                        <img width="50" height="50" src={RK}/>
                    </Navbar.Brand>
                    <Nav activeKey="" className="mr-auto">
                        <Nav.Link to="/overview">Overview</Nav.Link>
                        <Nav.Link to="/skills">Skills</Nav.Link>
                        <Nav.Link to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
                <Overview/>
            </div>
        );
    }
}