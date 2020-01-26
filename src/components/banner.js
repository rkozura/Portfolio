import React from 'react';
import {
    Navbar,
    Nav,
    Carousel,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import RK from '../assets/RK.svg';

function Overview() {
    return (
        <Container className="center-container">
            <Row>
                <Col>
                    <h1 className="text-primary display-1"><strong>HELLO</strong></h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>My name is <a href="#">Robert Kozura</a></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>I am a web developer who loves clean code</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>VueJs - ReactJs - ES6 - Java</h3>
                </Col>
            </Row>
        </Container>
    );
}

function Skills() {
    return (
        <Container className="center-container">
            <Row>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
                <Col>
                    <h1 className="text-primary display-1"><strong>SKILLS</strong></h1>
                </Col>
            </Row>
        </Container>
    );
}

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};

        this.changeActiveIndex = this.changeActiveIndex.bind(this);
    }

    changeActiveIndex(index, event) {
        event.preventDefault();
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div>
                <div className="top-left">
                    <Navbar>
                        <Navbar.Brand>
                            <a href="#"><img onClick={(event) => this.changeActiveIndex(0, event)} width="50" height="50" src={RK}/></a>
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link onClick={(event) => this.changeActiveIndex(1, event)}>Overview</Nav.Link>
                            <Nav.Link onClick={(event) => this.changeActiveIndex(2, event)}>Skills</Nav.Link>
                            <Nav.Link onClick={(event) => this.changeActiveIndex(3, event)}>Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <Container fluid={true}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        defaultActiveIndex={0}
                        activeIndex={this.state.activeIndex}
                        onSelect={()=>{}}>
                        <Carousel.Item>
                            <Overview></Overview>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Skills></Skills>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        );
    }
}