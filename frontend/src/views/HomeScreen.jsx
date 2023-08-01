import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';
import Navbar from './components/Navbar';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-md my-5">
        <div className="row">
          <h3>Latest Products</h3>
        </div>

        <div className="row justify-content-start">
          {products.map(({ _id, ...details }) => (
            <ItemCard key={_id} id={_id} data={details} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
