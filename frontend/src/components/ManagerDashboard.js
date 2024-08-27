import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ManagerDashboard() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Manager Dashboard</h2>
            <Row>
                <Col md={6} className="mb-4">
                    <Button variant="primary" block>Manage Projects</Button>
                </Col>
                <Col md={6} className="mb-4">
                    <Button variant="secondary" block>Client Management</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="warning" block>Add Daily Updates</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ManagerDashboard;
