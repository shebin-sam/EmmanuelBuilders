import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

function ProjectMonitoring() {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const fetchProgress = async () => {
            const response = await axios.get('/project_progress');
            setProgress(response.data);
        };

        fetchProgress();
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Project Monitoring</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {progress.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.name}</td>
                            <td>{task.status}</td>
                            <td>{task.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ProjectMonitoring;
