import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AdminDashboard() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Admin Dashboard</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <Button variant="primary" block>Add New Project</Button>
                </Col>
                <Col md={4} className="mb-4">
                    <Button variant="secondary" block>Manage Projects</Button>
                </Col>
                <Col md={4} className="mb-4">
                    <Button variant="danger" block>Client Management</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="info" block>AI-based Quote Generation</Button>
                </Col>
                <Col>
                    <Button variant="warning" block>AI-based Design Generation</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminDashboard;
