/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../store/actions/cartActions';
import Navbar from './components/Navbar';

function CheckoutView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const [city, setCity] = useState(shippingAddress.city);
  const [address, setAddress] = useState(shippingAddress.address);
  const [postCode, setPostCode] = useState(shippingAddress.postCode);

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postCode }));
    navigate('/payment');
  };

  useEffect(() => {
    if (Object.keys(shippingAddress).length !== 0) {
      navigate('/payment');
    }
  }, [shippingAddress]);

  return (
    <>
      <Navbar activeTab="CART" />

      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-6 form-group-sm card p-5">
            <h3 className="me-3">Shipping Address</h3>
            <form onSubmit={handleCheckout}>

              <div className="mb-3">
                <label htmlFor="NameInputField" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  id="AddressInputField"
                  className="form-control"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="UsernameInputField" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="CityInputField"
                  className="form-control"
                  placeholder="City Name"
                  onChange={(e) => setCity(e.target.value)}
                  pattern="[A-Za-z0-9]+"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="PasswordInputField" className="form-label">
                  PostCode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="PostCodeInputField"
                  placeholder="PostCode"
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>

              <div className="container text-center">
                <button type="submit" className="my-3 btn btn-success">
                  {/* <span className="spinner-border spinner-border-sm me-2" /> */}
                  <i className="me-2 bi bi-cart-check-fill" />
                  Checkout
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutView;
