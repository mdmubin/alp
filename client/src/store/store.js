import {
  configureStore, applyMiddleware, combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartListReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartList: cartListReducer,
});

const middleware = [
  thunk,
];

const store = configureStore({
  reducer,
  middleware,
  devTools: composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState: {
    cartList: {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
  },
});

export default store;
