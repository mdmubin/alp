import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartView from './views/CartView';
import HomeScreeen from './views/HomeScreen';
import ProductView from './views/ProductView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreeen />,
  },
  {
    path: '/home',
    element: <HomeScreeen />,
  },
  {
    path: '/products/:id',
    element: <ProductView />,
  },
  {
    path: '/cart/',
    element: <CartView />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
