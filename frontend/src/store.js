import {
  configureStore, applyMiddleware, combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productDetailReducer, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  // productDetail: productDetailReducer,
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
