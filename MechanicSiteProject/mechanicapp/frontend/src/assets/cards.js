import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from  "../assets/images/card1.jpg";
import card2 from  "../assets/images/card2v2.jpg";
import card3 from  "../assets/images/card3.jpg";


function Cards() {
    return (
        <Row className="justify-content-center gap-5 my-5">
            <Card style={{ width: '18rem', padding:'0', }}>
            <Card.Img  variant="top" src={card1} />
            <Card.Body>
                <Card.Title>Our Personnel</Card.Title>
                <Card.Text >
                    Only the Most skilled individuals work in our enviroment.
                     
                </Card.Text>
                
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', padding:'0', textAlign:'center' }}>
            <Card.Img variant="top"  src={card2} />
            <Card.Body>
                <Card.Title>Parts used</Card.Title>
                <Card.Text>
                    We Only use Car parts of the Highest Grade in our services
                </Card.Text>
                
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', padding:'0', textAlign:'center' }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
                <Card.Title>Contact us</Card.Title>
                <Card.Text>
                    You can read more about us
                </Card.Text>
                <Button href="/about" style={{}} variant="dark">About us</Button>
                
            </Card.Body>
            </Card>
        </Row>

    );
}

export default Cards;