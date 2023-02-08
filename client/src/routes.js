import {
  UserOutlined,
  StarFilled,
  ToolOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  EditOutlined,
  AreaChartOutlined,
  CodeSandboxOutlined,
  UserSwitchOutlined,
  DotChartOutlined,
} from '@ant-design/icons';

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
//   customLayout: 'static', @string name of the layout
//   url: '/home/create-home' @string path of url
//   menuName:"Static Props" @string name that will display on menu
// },

export const Routers = [
  //Pins----------------
  {
    name: 'Content_Management',
    label: 'Content Management System',
    child: true,
    parentId: 0,
    id: 1,
    icon: StarFilled,
    pin: true,
    url: '/Content_Management',
  },
  {
    name: 'Social_Media',
    label: 'Social Media',
    child: true,
    parentId: 0,
    id: 2,
    icon: StarFilled,
    pin: true,
    url: '/Social_Media',
  },
  {
    name: 'Product_Folder',
    label: 'Product Folder',
    child: true,
    parentId: 0,
    id: 3,
    icon: StarFilled,
    pin: true,
    url: '/Product_Folder',
  },
  //Routes----------------
  {
    name: 'website-builder',
    label: 'Website Builder',
    parent: true,
    parentId: 1,
    id: 100,
    icon: ToolOutlined,
    url: '/Content_Management/Website-Builder',
  },
  {
    name: 'data-manager',
    label: 'Data Manager',
    parent: true,
    parentId: 1,
    id: 101,
    icon: DatabaseOutlined,
    url: '/Content_Management/data-manager',
  },
  {
    name: 'post-creator',
    label: 'Post Creator',
    parent: true,
    parentId: 1,
    id: 102,
    icon: FileTextOutlined,
    url: '/Content_Management/Post-Creator',
  },

  {
    name: 'post-manager',
    label: 'Post Manager',
    parent: true,
    parentId: 2,
    id: 103,
    icon: EditOutlined,
    url: '/Social_Media/post-manager',
  },
  {
    name: 'Analysis',
    parent: true,
    parentId: 2,
    id: 104,
    icon: AreaChartOutlined,
    url: '/Social_Media/Analysis',
  },
  {
    name: 'account-manager',
    label: 'Account Manager',
    parent: true,
    parentId: 2,
    id: 105,
    icon: UserSwitchOutlined,
    url: '/Social_Media/account-manager',
  },

  {
    name: 'product-manager',
    label: 'Product Manager',
    parent: true,
    parentId: 3,
    id: 106,
    icon: CodeSandboxOutlined,
    url: '/Product_Folder/product-manager',
  },
  {
    name: 'product-analysis',
    label: 'Product Analysis',
    parent: true,
    parentId: 3,
    id: 107,
    icon: DotChartOutlined,
    url: '/Product_Folder/product-analysis',
  },
  //outside the layout------------
  // {
  //   name: 'create-product',
  //   parent: true,
  //   child: false,
  //   model: false,
  //   parentId: 11,
  //   id: 100,
  //   icon: HddOutlined,
  //   pin: false,
  //   outSide: true,
  //   url: '/products/create-product/:id',
  // },
];
