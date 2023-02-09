import { configureStore } from '@reduxjs/toolkit';
import { Routers } from '../routes';
import common from '../service/model';

let Reducers = [];
Routers.map(({ name, model }) => {
  if (model) {
    return Reducers.push({ [name]: require('../Page/' + name + '/model').default });
  }
});
export const store = configureStore({
  reducer: {
    common,
    ...Reducers[0],
    ...Reducers[1],
    ...Reducers[2],
    ...Reducers[3],
    ...Reducers[4],
    ...Reducers[5],
    ...Reducers[6],
    ...Reducers[7],
    ...Reducers[8],
    ...Reducers[9],
    ...Reducers[10],
    ...Reducers[11],
    ...Reducers[12],
    ...Reducers[13],
    ...Reducers[14],
    ...Reducers[15],
  },
});
export default store;
