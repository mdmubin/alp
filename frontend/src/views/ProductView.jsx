/* eslint-disable no-underscore-dangle */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Types from 'prop-types';
import Navbar from './components/Navbar';

import products from '../temp/products';
import Rating from './components/Rating';

function ProductView() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <Navbar />

      <div className="container-md my-5">
        <Link className="text-primary" to="/" style={{ textDecoration: 'None' }}>
          <i className="pe-2 bi bi-arrow-left" />
          Back
        </Link>

        <div className="row">

          {/* image */}
          <div className="col-5 my-5 py-2">
            <img src={`${product.image}`} className="img-fluid rounded float-start border border-dark" alt={product.name} />
          </div>

          {/* item info & description */}
          <div className="col-4 my-5 py-3 px-3">
            <h4 className="fw-bold text-primary px-2">{product.name}</h4>
            <hr className="border border-primary border-subtle" />
            <div className="px-2 text-primary tiny">
              <Rating numRatings={product.rating} numReviews={product.numReviews} />
            </div>
            <hr className="border border-primary border-subtle" />
            <p className="px-2 text-start">{product.description}</p>
          </div>

          {/* item pricing and stock */}
          <div className="col-3 py-5 my-3">
            <ul className="list-group">

              <li className="list-group-item bg-light container-fluid">
                <div className="row">
                  <text className="col fw-bold">Price</text>
                  <text className="col">{`$${product.price}`}</text>
                </div>
              </li>

              <li className="list-group-item bg-light container-fluid">
                <div className="row">
                  <text className="col fw-bold">Availability</text>
                  <text className="col">
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </text>
                </div>
              </li>

              <li className="list-group-item active">
                <div className="container-fluid text-center ">
                  <button type="button" className="btn btn-sm btn-success">
                    <i className="bi bi-cart-plus pe-2" />
                    Add to Cart
                  </button>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

ProductView.propTypes = {
  match: Types.shape({
    params: Types.shape({
      id: Types.string,
    }),
  }).isRequired,
};

export default ProductView;
