import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactAdmin() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send message to admin
        console.log("Message Sent: ", message);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Contact Admin</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Send Message
                </Button>
            </Form>
        </Container>
    );
}

export default ContactAdmin;
