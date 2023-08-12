import {
  configureStore, applyMiddleware, combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartListReducer } from './reducers/cartReducers';
import { userAuthReducer } from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartList: cartListReducer,
  userAuth: userAuthReducer,
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
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
});

export default store;
