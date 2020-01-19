import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
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
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

function RobJumboTron() {
    return (
        <div>
        <Jumbotron className="p-3 mb-2">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto" lg="9" align="center" className="align-self-center">
                        <h1 className="mb-4">Robert Kozura</h1>
                        <h3>Frontend Software Developer that enjoys writing clean, testable code.  Strong emphasis on Javascript and Java.</h3>
                    </Col>
                    <Col>
                        <Image rounded src={rob} fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Container>
            <p className="lead">I am currently a senior web developer at Bluecross Blueshield of South Carolina. I went to James Madison University for computer science and started my career in Dulles, VA. My current position is coding Vuejs, Javascript and Java web applications. Outside of work I attend hackathons and create cool apps using different technologies.</p>
            <br/>
            <Row className="justify-content-md-center">
                <Col align="center">
                    <h3>Work</h3>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img src={bcbssc} />
                        <Card.Body>
                            <Card.Title><p className="lead">BlueCross BlueShield of South Carolina</p></Card.Title>
                            <Card.Text>
                                <div>Senior Web Developer</div>
                                <strong>2012-current</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={Technica} />
                        <Card.Body>
                            <Card.Title><p className="lead">Technica Corporation</p></Card.Title>
                            <Card.Text>
                                <div>Java Developer</div>
                                <strong>2010-2012</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <h3>Education</h3>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={jmu} />
                        <Card.Body>
                            <Card.Title><p className="lead">James Madison University</p></Card.Title>
                            <Card.Text>
                                <div>Bachelors in Computer Science</div>
                                <strong>2010</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <h3>Skills</h3>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={js} />
                        <Card.Body>
                            <Card.Title><p className="lead">ES6 JavaScript</p></Card.Title>
                            <Card.Text>
                                <strong>Fluent</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={vue} />
                        <Card.Body>
                            <Card.Title><p className="lead">VueJs</p></Card.Title>
                            <Card.Text>
                                <strong>Fluent</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={java} />
                        <Card.Body>
                            <Card.Title><p className="lead">Java</p></Card.Title>
                            <Card.Text>
                                <strong>Fluent</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2" style={{ width: '12rem' }}>
                        <Card.Img src={react} />
                        <Card.Body>
                            <Card.Title><p className="lead">React</p></Card.Title>
                            <Card.Text>
                                <strong>Proficient</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
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
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">
                        Robert Kozura
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
                    <Route path="/overview" component={RobJumboTron} />
                    <Route path="/contact" component={null} />
                    <Redirect from="/" exact to="/overview" />
                </Switch>
            </Router>
        );
    }
}