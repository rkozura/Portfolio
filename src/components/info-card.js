import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Skills from '../skills/skills';

export default class InfoCard extends React.Component {
    constructor(props) {
        super(props);

        this.items = Skills.map((item) => {
            return (
                <Col key={item.title} md="auto" className="d-flex align-items-stretch mt-4">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body className={item.backgroundClass}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            <Button variant="primary">{item.buttonText}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
    }
    render() {
        return (
            <Container fluid style={{overflow: "hidden"}}>
                <Row className="justify-content-md-center">
                    {this.items}
                </Row>
            </Container>
        );
    }
}