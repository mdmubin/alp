import {
  configureStore, applyMiddleware, combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [
  thunk,
];

const store = configureStore({
  reducer,
  middleware,
  devTools: composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState: {},
});

export default store;
