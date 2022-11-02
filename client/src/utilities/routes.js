import { StarFilled, CiCircleFilled } from '@ant-design/icons';

export const Routers = [
  {
    name: 'Home',
    parent: false,
    child: false,
    model: true,
    parentId: '',
    id: 1,
    icon: StarFilled,
    pin: false,
  },
  {
    name: 'Buy',
    parent: false,
    child: false,
    model: true,
    parentId: 1,
    id: 2,
    icon: StarFilled,
    pin: false,
  },
  {
    name: 'About',
    parent: false,
    child: false,
    model: true,
    parentId: 1,
    id: 3,
    icon: StarFilled,
    pin: false,
  },
  {
    name: 'feed',
    parent: false,
    child: true,
    model: false,
    parentId: 0,
    id: 5,
    icon: StarFilled,
    pin: true,
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
  },
];
