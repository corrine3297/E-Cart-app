import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import {addToWishlist} from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Home() {
    const data = useFetch("https://dummyjson.com/products")
    // console.log(data);
    const dispatch=useDispatch()
    return (
        <>
            <Row className='ms-5' style={{ marginTop: '100px', marginBottom: '50px' }}>
                {
                    data?.length > 0 ? data?.map((product, index) =>

                        <Col sm={12} md={6} lg={4} xl={3} className='p-3'>
                            <Card className='shadow' style={{ width: '18rem', borderColor: 'white', height: '33rem'  }}>
                                <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
                                <Card.Body>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title}</Card.Title>
                                    <Card.Text>
                                        <p>{product?.description.slice(0, 55)}..</p>
                                        <h5>$ {product?.price}</h5>
                                    </Card.Text>

                                    <div className='d-flex align-items-center' style={{ justifyContent: 'space-between' }}>
                                        <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
                                        <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>

                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                    ) : <p className='text-danger fw-bolder fs-4'>Nothing to Display!!!</p>

                }

            </Row></>
    )
}

export default Home