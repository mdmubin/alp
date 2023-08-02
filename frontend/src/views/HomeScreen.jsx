import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from './components/ItemCard';
import Navbar from './components/Navbar';
import { getProductList } from '../store/actions/productActions';
import Spinner from './components/Spinner';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container-md my-5">
        <div className="row">
          <h3>Latest Products</h3>
        </div>

        <div className="row justify-content-start">
          {/* if loading, show spinner, else show product list */}
          {loading ? <Spinner text="Loading" />
            : products.map(({ _id, ...details }) => (
              <ItemCard key={_id} id={_id} data={details} />
            ))}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
