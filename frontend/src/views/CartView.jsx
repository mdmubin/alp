import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import CartItem from './components/CartItem';

function CartView() {
  const cartList = useSelector((state) => state.cartList.cartItems);
  const [total, setTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);

  const updateCostAndCount = () => {
    let totalCost = 0;
    let itemCount = 0;
    cartList.forEach((i) => {
      itemCount += i.qty;
      totalCost += (i.price * i.qty);
    });
    setTotal(Math.round(totalCost * 100) / 100);
    setNumItems(itemCount);
  };

  useEffect(() => {
    updateCostAndCount();
  }, [updateCostAndCount, setTotal, setNumItems]);

  const checkOut = () => { };

  return (
    <>
      <Navbar activeTab="CART" />
      <div className="container-md my-5">
        <h3>Your Cart</h3>
        {cartList.length > 0
          ? (
            <div className="row">
              <div className="col-md-8 text-center my-5">
                <ul className="list-group">
                  {cartList.map((item, i) => <CartItem key={`cart-item-${i + 1}`} itemData={item} />)}
                </ul>
              </div>

              <div className="col-md-4 my-5 px-2">

                <ul className="list-group">

                  <li className="list-group-item active">
                    <h5 className="text-light fw-bold">Cart Summary</h5>
                  </li>

                  <li className="list-group-item bg-light container-fluid">
                    <div className="row">
                      <div className="col fw-bold">Total Item(s)</div>
                      <div className="col">{numItems}</div>
                    </div>
                  </li>

                  <li className="list-group-item bg-light container-fluid">
                    <div className="row">
                      <div className="col fw-bold">Total Cost</div>
                      <div className="col">{`$${total}`}</div>
                    </div>
                  </li>

                  <li className="list-group-item active">
                    <div className="container-fluid text-center ">
                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={checkOut}
                      >
                        <i className="bi bi-cart-plus pe-2" />
                        Checkout
                      </button>
                    </div>
                  </li>

                </ul>

              </div>
            </div>
          ) : (
            // empty cart
            <div className="row">
              <div className="col card m-5 text-center bg-light">
                <div className="card-body">
                  <h5 className="card-title">Your cart is Empty :(</h5>
                  <p className="card-text">Continue shopping and add items to cart.</p>
                  <a className="btn btn-primary" href="/">Go Shopping!</a>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default CartView;
