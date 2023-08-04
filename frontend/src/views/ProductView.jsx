import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import { getProductDetails } from '../store/actions/productActions';
import Spinner from './components/Spinner';
import { addToCart } from '../store/actions/cartActions';

function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    dispatch(addToCart(id, Number(quantity)));
    navigate('/cart/');
  };

  return (
    <>
      <Navbar />

      <div className="container-md my-5">
        <Link className="text-primary" to="/" style={{ textDecoration: 'None' }}>
          <i className="pe-2 bi bi-arrow-left" />
          Back
        </Link>

        {loading ? (
          <Spinner text="Loading" />
        ) : (
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
                    <div className="col fw-bold">Price</div>
                    <div className="col">{`$${product.price}`}</div>
                  </div>
                </li>

                <li className="list-group-item bg-light container-fluid">
                  <div className="row">
                    <div className="col fw-bold">Availability</div>
                    <div className="col">
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                </li>

                {product.countInStock > 0 && (
                  <li className="list-group-item bg-light container-fluid">
                    <div className="row">
                      <div className="col fw-bold">Quantity</div>
                      <div className="col input-group-sm">
                        <input
                          type="number"
                          id="typeNumber"
                          className="form-control"
                          min={1}
                          max={product.countInStock}
                          defaultValue={1}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </li>
                )}

                <li className="list-group-item active">
                  <div className="container-fluid text-center ">
                    <button
                      type="button"
                      className="btn btn-sm btn-success"
                      disabled={product.countInStock <= 0}
                      onClick={handleAddToCart}
                    >
                      <i className="bi bi-cart-plus pe-2" />
                      Add to Cart
                    </button>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductView;
