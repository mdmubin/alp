import {
  configureStore, applyMiddleware, combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userAuthReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  user: combineReducers({ userAuth: userAuthReducer, userRegister: userRegisterReducer }),
});

const middleware = [
  thunk,
];

const store = configureStore({
  reducer,
  middleware,
  devTools: composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState: {
    cart: {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')) || {},
    },
    user: JSON.parse(localStorage.getItem('user')) || { userAuth: {}, userRegister: {} },
  },
});

export default store;
