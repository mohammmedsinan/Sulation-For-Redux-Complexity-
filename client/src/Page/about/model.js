import { AsyncReducer, slice } from 'API';

const initialState = {
  data: {},
  data1: {},
  data2: {},
  data3: {},
  data4: {},
  data5: {},
  data6: {},
  data7: {},
  status: null,
  loading: '',
};
export default slice('about', initialState, [
  { SpaceName: 'about/Api', data: 'data' },
  { SpaceName: 'about/Api1', data: 'data1' },
  { SpaceName: 'about/Api2', data: 'data2' },
  { SpaceName: 'about/Api3', data: 'data3' },
  { SpaceName: 'about/Api4', data: 'data4' },
  { SpaceName: 'about/Api5', data: 'data5' },
  { SpaceName: 'about/Api6', data: 'data6' },
  { SpaceName: 'about/Api7', data: 'data7' },
]);
