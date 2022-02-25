import { configureStore } from '@reduxjs/toolkit';
import Home from '../Page/Home/model';

const store = configureStore({
  reducer: { Home },
});

export default store;
