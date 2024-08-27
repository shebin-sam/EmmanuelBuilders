import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
    { name: 'Project 1', description: 'Description of project 1' },
    { name: 'Project 2', description: 'Description of project 2' },
    // Add more projects as needed
];

function Portfolio() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Our Portfolio</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;
