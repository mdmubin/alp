import React from 'react';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';

import data from '../temp/products';

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="container-md my-5">
        <div className="row">
          <h3>Latest Products</h3>
        </div>

        <div className="row justify-content-start">
          {data.map(({ _id, ...details }) => <ItemCard key={_id} id={_id} data={details} />)}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
