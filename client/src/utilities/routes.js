import { StarFilled, CiCircleFilled } from '@ant-design/icons';

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
// },

export const Routers = [
  //Pins----------------
  {
    name: 'feed',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 5,
    icon: StarFilled,
    outSide: false,
    pin: true,
    url: '/feed',
  },
  //Routes----------------
  {
    name: 'Home',
    parent: false,
    child: false,
    model: true,
    parentId: '',
    id: 1,
    icon: StarFilled,
    pin: false,
    outSide: false,
    url: '/home',
  },
  {
    name: 'Buy',
    parent: false,
    child: false,
    model: true,
    parentId: '',
    id: 2,
    icon: StarFilled,
    pin: false,
    outSide: false,
    url: '/buy',
  },
  {
    name: 'About',
    parent: false,
    child: false,
    model: true,
    parentId: '',
    id: 3,
    icon: StarFilled,
    pin: false,
    outSide: false,
    url: 'about',
  },
  {
    name: 'Contact',
    parent: true,
    child: false,
    model: false,
    parentId: 5,
    id: 4,
    icon: CiCircleFilled,
    pin: false,
    outSide: false,
    url: '/contact',
  },
  //outside the layout
  {
    name: 'create-home',
    parent: true,
    child: false,
    model: false,
    parentId: 1,
    id: 6,
    icon: CiCircleFilled,
    pin: false,
    outSide: true,
    url: '/home/create-home',
  },
];
