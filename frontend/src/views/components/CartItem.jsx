import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

function CartItem({ itemData }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(itemData.qty);

  useEffect(() => {
    setPrice(itemData.price);
  }, [itemData]);

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-start align-items-center">

        <img src={itemData.image} className="img-thumbnail" alt={itemData.name} width={76} height={76} />

        <div className="flex-grow-1 text-start px-4">
          <h5 className="fw-medium">{itemData.name}</h5>
        </div>

        <div className="px-2 input-group-sm">
          <input
            type="number"
            id="typeNumber"
            className="form-control"
            min={1}
            max={itemData.countInStock}
            defaultValue={itemData.qty}
            onChange={(e) => dispatch(addToCart(itemData._id, Number(e.target.value)))}
          />
        </div>

        <div className="text-danger">
          <button type="button" className="btn btn-sm btn-outline-danger">
            <i className="bi bi-trash-fill" />
          </button>
        </div>

      </div>
    </li>
  );
}

CartItem.propTypes = {
  itemData: Types.shape({
    _id: Types.string.isRequired,
    name: Types.string.isRequired,
    image: Types.string.isRequired,
    price: Types.number.isRequired,
    countInStock: Types.number.isRequired,
    qty: Types.number.isRequired,
  }).isRequired,
};

export default CartItem;
