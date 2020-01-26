import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function buttonClick(item) {
    if(item.button && item.button.action && item.button.action.type === 'external') {
        window.open(item.button.action.location);
    }
}

export default function Skills(props) {
    const items = props.items.map((item) => {
        let picture = "";
        if(item.thumbnail) {
            picture = require(`../assets/${item.thumbnail}`);
        }
        let text = "";
        if(item.button) {
            text = item.button.text;
        }

        return (
            <Col key={item.title} md="auto" className="d-flex align-items-stretch mt-4">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.text}
                        </Card.Text>
                        <Button variant="primary" onClick={() => buttonClick(item)}>{text}</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <Container className="center-container">
            <Row className="justify-content-md-center">
                {items}
            </Row>
        </Container>
    );
}
