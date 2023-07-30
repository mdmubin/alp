import React from 'react';
import Types from 'prop-types';

function ItemCard({ id, data }) {
  return (
    <div className="card m-3" style={{ width: '18rem' }} id={id}>

      <img src={`${data.image}`} className="card-img-top py-3" alt={data.name} />

      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        {/* <p className="card-text">{data.description}</p> */}
        <p className="card-text">
          <small className="text-muted">
            { /* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Rated {data.rating} : {data.numReviews} Reviews
          </small>
        </p>
        { /* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p><h4>${data.price}</h4></p>
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
