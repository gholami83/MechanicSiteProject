import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function CarComponent() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'input1':
                setInput1(event.target.value);
                break;
            case 'input2':
                setInput2(event.target.value);
                break;
            case 'input3':
                setInput3(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:8000/admin/car', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input1: input1,
                input2: input2,
                input3: input3,
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Container>
            <Card className="mb-3 custom-shadow p-3 bg-white rounded">
                <Card.Header>Car</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formInput1">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" name="input1" value={input1} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput2">
                            <Form.Label>Car Name</Form.Label>
                            <Form.Control type="text" name="input2" value={input2} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput3">
                            <Form.Label>Services</Form.Label>
                            <Form.Control type="text" name="input3" value={input3} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CarComponent;
