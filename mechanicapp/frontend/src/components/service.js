import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function FiveInputForm() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');

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
            case 'input4':
                setInput4(event.target.value);
                break;
            case 'input5':
                setInput5(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Input 1: ${input1}, Input 2: ${input2}, Input 3: ${input3}, Input 4: ${input4}, Input 5: ${input5}`);
    };

    return (
        <Container>
            <Card className="mb-3 custom-shadow p-3 bg-white rounded">
                <Card.Header>Repair Car</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formInput1">
                            <Form.Label>Mechanic Name</Form.Label>
                            <Form.Control type="text" name="input1" value={input1} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput2">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="text" name="input2" value={input2} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" name="input3" value={input3} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput4">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="input4" value={input4} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Form.Group controlId="formInput5">
                            <Form.Label>Car</Form.Label>
                            <Form.Control type="text" name="input5" value={input5} onChange={handleChange} placeholder="Enter something..." maxLength="50" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default FiveInputForm;
