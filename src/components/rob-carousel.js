import React from 'react';

import {
    Carousel,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import Skills from '../data/skills';
import Projects from '../data/projects';
import SummaryCards from './summary-cards';

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

export default function RobCarousel(props) {
    return (
        <Container fluid={true}>
            <Carousel
                controls={false}
                indicators={false}
                activeIndex={props.activeIndex}
                onSelect={()=>{}}>
                <Carousel.Item>
                    <Overview/>
                </Carousel.Item>
                <Carousel.Item>
                    <div>TODO ABOUT</div>
                </Carousel.Item>
                <Carousel.Item>
                    <SummaryCards items={Skills}/>
                </Carousel.Item>
                <Carousel.Item>
                    <SummaryCards items={Projects}/>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}
