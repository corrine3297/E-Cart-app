import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
    const wishlist =useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)

    console.log(cart)
    return (
        <>
            <Navbar expand="lg" fixed="top" className="bg-white w-100 mb-5 shadow p-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>E-Cart</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='btn border rounded'>
                                <Link to={'/wishlist'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-heart text-danger me-2 mt-1'></i>wishlist
                                    <Badge className='ms-2 rounded' bg='light'>{wishlist.length}</Badge>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className='btn border rounded ms-3'>
                                <Link to={'/cart'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-cart-shopping text-warning me-2 mt-1'></i>Cart
                                    <Badge className='ms-2 rounded' bg='light'>{cart.length}</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            F
        </>
    )
}

export default Header