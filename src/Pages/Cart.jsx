import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { removeFromCart,emptyCart } from '../Redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }
  }

  const handleCart = () => {
    dispatch(emptyCart())
    alert("order placed")
    navigate('/')
  }
  useEffect(() => {
    getCartTotal()
  }, [cartArray])

  return (
    <>
      <div className='container' style={{ marginTop: '100px' }}>

        {cartArray?.length > 0 ? (
          <div className='row mt-5'>
            <div className='col-lg-7'>
              <Table striped hover className='w-100 shadow'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product?.title}</td>
                      <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                      <td>{product?.price}</td>
                      <td><button className='btn' onClick={() => dispatch(removeFromCart(product.id))}><i class="fa-solid fa-trash fa-2x text-danger"></i></button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className='col-lg-1'>

            </div>
            <div className='col-lg-4'>
              <div className='border p-3 rounded shadow'>
                <h3 style={{ overflowY: 'hidden' }}>Cart summary</h3>
                <h6 style={{ overflowY: 'hidden' }}>Total product: <span>{cartArray.length}</span></h6>
                <h6 style={{ overflowY: 'hidden' }}>Total: $ <span>{total}</span></h6>

                <button onClick={handleCart} className='btn btn-success rounded'>checkout</button>
              </div>
            </div>
          </div>
        )
          : (
            <div className='container d-flex justify-content-center align-items-center flex-column'>
              <img
                src="https://media.giphy.com/media/U8MXoKqFlTtfsOYrnl/giphy.gif"
                alt="empty wish list image"
                className='mb-2'
                height={"200px"}
                style={{ borderRadius: '50%' }}
              />
              <h3 className='text-danger' style={{ overflowY: 'hidden' }}>
                Wish List is empty!!!
              </h3>
              <Link to={"/"}>
                <Button className='btn btn-success mt-2'>Back to Home</Button>
              </Link>
            </div>
          )}

      </div>
    </>
  );
}

export default Cart;
