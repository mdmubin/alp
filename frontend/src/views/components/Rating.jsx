/* eslint-disable no-nested-ternary */

import React from 'react';
import Types from 'prop-types';

function Rating({ numRatings, numReviews }) {
  return (
    <>
      <span className="rating">
        <i className={(numRatings >= 1) ? 'bi bi-star-fill' : (numRatings > 0) ? 'bi bi-star-half' : 'bi bi-star'} />
        <i className={(numRatings >= 2) ? 'bi bi-star-fill' : (numRatings > 1) ? 'bi bi-star-half' : 'bi bi-star'} />
        <i className={(numRatings >= 3) ? 'bi bi-star-fill' : (numRatings > 2) ? 'bi bi-star-half' : 'bi bi-star'} />
        <i className={(numRatings >= 4) ? 'bi bi-star-fill' : (numRatings > 3) ? 'bi bi-star-half' : 'bi bi-star'} />
        <i className={(numRatings >= 5) ? 'bi bi-star-fill' : (numRatings > 4) ? 'bi bi-star-half' : 'bi bi-star'} />
      </span>
      <div>{`${numReviews} Reviews`}</div>
    </>
  );
}

Rating.propTypes = {
  numRatings: Types.number,
  numReviews: Types.number,
};

Rating.defaultProps = {
  numRatings: 0,
  numReviews: 0,
};

export default Rating;
