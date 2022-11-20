import { UserOutlined, HddOutlined, StarFilled } from '@ant-design/icons';

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
  {
    name: 'Analytics',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 1,
    icon: StarFilled,
    outSide: false,
    pin: true,
    url: '/Analytics',
  },
  //Routes----------------
  {
    name: 'Users',
    parent: false,
    child: false,
    model: true,
    parentId: 0,
    id: 10,
    icon: UserOutlined,
    pin: false,
    outSide: false,
    url: '/users',
  },
  {
    name: 'Products',
    parent: false,
    child: false,
    model: true,
    parentId: 0,
    id: 11,
    icon: HddOutlined,
    pin: false,
    outSide: false,
    url: '/products',
  },
  {
    name: 'Events',
    parent: false,
    child: false,
    model: true,
    parentId: 0,
    id: 12,
    icon: HddOutlined,
    pin: false,
    outSide: false,
    url: '/events',
  },

  //outside the layout------------
  {
    name: 'create-product',
    parent: true,
    child: false,
    model: false,
    parentId: 11,
    id: 100,
    icon: HddOutlined,
    pin: false,
    outSide: true,
    url: '/products/create-product/:id',
  },
  {
    name: 'create-event',
    parent: true,
    child: false,
    model: false,
    parentId: 12,
    id: 100,
    icon: HddOutlined,
    pin: false,
    outSide: true,
    url: '/events/create-event/:id',
  },
];
