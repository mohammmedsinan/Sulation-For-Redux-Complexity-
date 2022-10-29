export const Routers = [
  {
    name: '',
    tag: 'Home',
    url: './Page/Home/index',
    parent: false,
    parentUrl: '',
    child: true,
  },
  {
    name: 'About',
    tag: 'About',
    url: './Page/About/index',
    parent: true,
    parentUrl: 'Home',
    child: true,
  },
  {
    name: 'Contact',
    tag: 'Contact',
    url: './Page/Contact/index',
    parent: true,
    parentUrl: 'Contact',
    child: true,
  },
];
