import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Routers } from '../utilities/routes';

let Reducers = [];
Routers.map(({ tag, model }) => {
  if (model) {
    return Reducers.push({ [tag]: require('../Page/' + tag + '/model').default });
  }
});
export const store = configureStore({
  reducer: {
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
    ...Reducers[16],
    ...Reducers[17],
    ...Reducers[18],
    ...Reducers[19],
    ...Reducers[20],
    ...Reducers[21],
    ...Reducers[22],
    ...Reducers[23],
    ...Reducers[24],
    ...Reducers[25],
    ...Reducers[26],
  },
});
export default store;
