import { configureStore } from '@reduxjs/toolkit';
import Home from '../Page/Home/model';
import Buy from '../Page/Buy/model';
export const store = configureStore({
  reducer: { Home, Buy },
});
// Dispatcher(store);
export default store;
