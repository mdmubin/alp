import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartView from './views/CartView';
import HomeScreeen from './views/HomeScreen';
import ProductView from './views/ProductView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import CheckoutView from './views/CheckoutView';
import PaymentView from './views/PaymentView';

const router = createBrowserRouter([
  { path: '/', element: <HomeScreeen /> },
  { path: '/home', element: <HomeScreeen /> },
  { path: '/products/:id', element: <ProductView /> },
  { path: '/cart/', element: <CartView /> },
  { path: '/login/', element: <LoginView /> },
  { path: '/register/', element: <RegisterView /> },
  { path: '/checkout/', element: <CheckoutView /> },
  { path: '/payment/', element: <PaymentView /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
