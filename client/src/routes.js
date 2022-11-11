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
  // {
  //   name: 'STAGING',
  //   parent: false,
  //   child: true,
  //   model: false,
  //   parentId: 0,
  //   id: 1,
  //   icon: StarFilled,
  //   outSide: false,
  //   pin: true,
  //   url: '/STAGING',
  // },
  // {
  //   name: 'PROD',
  //   parent: true,
  //   child: true,
  //   model: false,
  //   parentId: 1,
  //   id: 2,
  //   icon: StarFilled,
  //   outSide: false,
  //   pin: true,
  //   url: '/STAGING/PROD',
  // },
  // {
  //   name: 'test',
  //   parent: true,
  //   child: true,
  //   model: false,
  //   parentId: 1,
  //   id: 3,
  //   icon: StarFilled,
  //   outSide: false,
  //   pin: true,
  //   url: '/STAGING/test',
  // },
  //Routes----------------
  // {
  //   name: 'comps',
  //   parent: true,
  //   child: false,
  //   model: false,
  //   parentId: 1,
  //   id: 10,
  //   icon: FileAddFilled,
  //   pin: false,
  //   outSide: false,
  //   url: '/staging/comps',
  // },
  {
    name: 'home',
    parent: false,
    child: false,
    model: true,
    parentId: 0,
    id: 10,
    icon: FileAddFilled,
    pin: false,
    outSide: false,
    url: '/home',
  },
  {
    name: 'about',
    parent: false,
    child: false,
    model: true,
    parentId: 0,
    id: 11,
    icon: FileAddFilled,
    pin: false,
    outSide: false,
    url: '/about',
  },
  // {
  //   name: 'about',
  //   parent: false,
  //   child: false,
  //   model: false,
  //   parentId: 0,
  //   id: 11,
  //   icon: FileAddFilled,
  //   pin: false,
  //   outSide: false,
  //   url: '/about',
  // },
  //outside the layout------------
];
