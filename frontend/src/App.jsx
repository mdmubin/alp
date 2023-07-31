import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
