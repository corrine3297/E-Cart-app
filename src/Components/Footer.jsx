import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-2 shadow w-100'>
            <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap mt-5'>
                <div className='website d-flex flex-column'>
                    <div style={{ fontWeight: 'bold'}}>{' '}E-cart</div>
                    <div>
                        Designed and built with all the love in the world by the Media team with the help of our contributors.</div>
                    <div>Code licensed Media, docs CC BY 3.0.</div>
                    <div>Currently v1.0.0.</div>
                </div>
                <div className='links d-flex flex-column'>
                    <div style={{ fontWeight: 'bold'}}>Links</div>
                    <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>Home</Link>
                    <Link to={'/cart'} style={{ textDecoration: 'none', color:'black' }}>Cart</Link>
                    <Link to={'/wishlist'} style={{ textDecoration: 'none', color:'black' }}>Wishlist</Link>
                </div>
                <div className='guides d-flex flex-column'>
                    <div style={{ fontWeight: 'bold'}}>Guides</div>
                    <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color:'black' }}>React</Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color:'black' }}>React Bootstrap</Link>
                    <Link to={'https://reactrouter.com/en/main'} style={{ textDecoration: 'none', color:'black' }}>Routing</Link>
                </div>
                <div className='contact d-flex flex-column'>
                    <div style={{ fontWeight: 'bold'}}>Contact Us</div>
                    <div>

                    </div>
                    <div>
                        {/* <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color:'black' }}><i class="fa-brands fa-linkedin" style={{ color: '#ffffff' }}></i></Link> */}
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color:'black' }}><i class="fa-brands fa-twitter" style={{ textDecoration: 'none', color:'black' }}></i></Link>
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color:'black' }}><i class="fa-brands fa-facebook-f" style={{ textDecoration: 'none', color:'black' }}></i></Link>
                        <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color:'black' }}><i class="fa-regular fa-envelope" style={{ textDecoration: 'none', color:'black' }}></i></Link>

                    </div>
                </div>

            </div>
            <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>
        </div>
    )
}

export default Footer