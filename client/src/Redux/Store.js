import { configureStore } from '@reduxjs/toolkit';
import Home from '../Page/Home/model';
export const store = configureStore({
  reducer: { Home },
});
// Dispatcher(store);
export default store;
