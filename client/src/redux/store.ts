import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/reducer';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
})