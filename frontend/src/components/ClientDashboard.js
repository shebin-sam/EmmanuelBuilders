import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function ClientDashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/projects');
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Client Dashboard</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="success" block>Contact Admin</Button>
                </Col>
                <Col>
                    <Button variant="info" block>AI-based Design Generation</Button>
                </Col>
                <Col>
                    <Button variant="warning" block>AI-based Quote Generation</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ClientDashboard;
