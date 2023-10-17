import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <>
            <Row className='ms-5' style={{ marginTop: '100px', marginBottom:'50px'}}>
                <Col sm={12} md={6} lg={4} xl={3} className='p-3'>
                    <Card  className='shadow' style={{ width: '18rem',borderColor:'white' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                           <div className='d-flex align-items-center' style={{justifyContent:'space-between'}}>
                           <Button className='btn btn-light'><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
                            <Button className='btn btn-light'><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>

                           </div>
                        </Card.Body>
                    </Card>
                    
                </Col>

                
            </Row></>
    )
}

export default Home