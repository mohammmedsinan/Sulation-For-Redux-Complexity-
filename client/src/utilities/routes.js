import { StarFilled, CiCircleFilled, DownSquareFilled, FileAddFilled } from '@ant-design/icons';

// {
//   name: @String &&this name will appear on menu slider
//   parent: @boolean && to know if it had a parent
//   child: @boolean && to know if it had a child
//   model: @boolean && to know if it had a model
//   parentId: @Int && parent id
//   id: @int && his id should be uniq
//   icon: method && should defined as a antd icon
//   pin: @boolean && to know if its ping or not
//   outSide: @boolean && to know if it will be inside the layout or outside the layout
//   url: '/home/create-home' @string path of url
// },

export const Routers = [
  //Pins----------------

  {
    name: 'STAGING',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 1,
    icon: StarFilled,
    outSide: false,
    pin: true,
    url: '/STAGING',
  },
  {
    name: 'PRODUCTION',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 2,
    icon: DownSquareFilled,
    outSide: false,
    pin: true,
    url: '/PRODUCTION',
  },
  {
    name: 'TESTING',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 3,
    icon: CiCircleFilled,
    outSide: false,
    pin: true,
    url: '/TESTING',
  },
  {
    name: 'STAGING v2',
    parent: true,
    child: true,
    model: false,
    parentId: 1,
    id: 4,
    icon: StarFilled,
    outSide: false,
    pin: true,
    url: '/staging/STAGINGv2',
  },
  //Routes----------------
  {
    name: 'comps',
    parent: true,
    child: false,
    model: false,
    parentId: 1,
    id: 10,
    icon: FileAddFilled,
    pin: false,
    outSide: false,
    url: '/staging/comps',
  },
  {
    name: 'home',
    parent: false,
    child: false,
    model: false,
    parentId: '',
    id: 11,
    icon: StarFilled,
    pin: false,
    outSide: false,
    url: '/home',
  },
  //outside the layout------------
];
