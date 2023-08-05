import React from 'react';
import Types from 'prop-types';

function Spinner({ text }) {
  return (
    <div className="row py-5">
      <div className="text-center">
        <div className="spinner-border text-success" role="status" />
        <h5 className="text-success">{text}</h5>
      </div>
    </div>
  );
}

Spinner.propTypes = {
  text: Types.string,
};

Spinner.defaultProps = {
  text: '',
};

export default Spinner;
