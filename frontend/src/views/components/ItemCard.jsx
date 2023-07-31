import React from 'react';
import { Link } from 'react-router-dom';
import Types from 'prop-types';
import Rating from './Rating';

function ItemCard({ id, data }) {
  return (
    <div className="card m-3" style={{ width: '18rem' }} id={id}>

      <img src={`${data.image}`} className="card-img-top py-3" alt={data.name} />

      <div className="card-body">
        <Link to={`/products/${id}`} style={{ textDecoration: 'None' }}>
          <h5 className="card-title">{data.name}</h5>
        </Link>

        {/* <p className="card-text">{data.description}</p> */}
        <small className="card-text text-muted">
          <Rating numRatings={data.rating} numReviews={data.numReviews} />
        </small>

        { /* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h4 className="pt-2">${data.price}</h4>
      </div>

    </div>
  );
}

ItemCard.propTypes = {
  id: Types.string.isRequired,
  data: Types.shape({
    name: Types.string.isRequired,
    image: Types.string,
    description: Types.string,
    brand: Types.string,
    category: Types.string,
    price: Types.number,
    countInStock: Types.number,
    rating: Types.number,
    numReviews: Types.number,
  }).isRequired,
};

export default ItemCard;
