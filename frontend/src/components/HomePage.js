import React from 'react';
import CustomNavBar from '../components/CustomNavBar';
import { Container, Jumbotron } from 'react-bootstrap';

function HomePage() {
    return (
        <>
            <CustomNavBar />
            
                <Container>
                    <h1>Welcome to Emmanuel Builders</h1>
                    <p>Building your dreams into reality.</p>
                </Container>
            
        </>
    );
}

export default HomePage;
