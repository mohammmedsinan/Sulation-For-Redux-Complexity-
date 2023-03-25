import {
  NotificationOutlined,
  StarFilled,
  ToolOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  EditOutlined,
  AreaChartOutlined,
  CodeSandboxOutlined,
  UserSwitchOutlined,
  DotChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  BankFilled,
  TransactionOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";

// {
//   name: @String &&this name will appear on menu slider
//   parent: @boolean && to know if it had a parent
//   child: @boolean && to know if it had a child
//   model: @boolean && to know if it had a model
//   parentId: @Int && parent id
//   id: @int && his id should be uniq
//   icon: method && should defined as a ant d icon
//   pin: @boolean && to know if its ping or not
//   outSide: @boolean && to know if it will be inside the layout or outside the layout
//   customLayout: 'static', @string name of the layout
//   url: '/home/create-home' @string path of url
//   menuName:"Static Props" @string name that will display on menu
// },

export const Routers = [
  //Pins----------------
  {
    name: "Content_Management",
    label: "Content Management System",
    child: true,
    parentId: 0,
    id: 1,
    icon: StarFilled,
    pin: true,
    url: "/Content_Management",
  },
  {
    name: "Social_Media",
    label: "Social Media",
    child: true,
    parentId: 0,
    id: 2,
    icon: StarFilled,
    pin: true,
    url: "/Social_Media",
  },
  {
    name: "Product_Folder",
    label: "Product Folder",
    child: true,
    parentId: 0,
    id: 3,
    icon: StarFilled,
    pin: true,
    url: "/Product_Folder",
  },
  {
    name: "financial_management",
    label: "Financial Management",
    child: true,
    parentId: 0,
    id: 4,
    icon: StarFilled,
    pin: true,
    url: "/financial_management",
  },

  //Routes----------------
  {
    id: 100,
    parentId: 1,
    name: "website-builder",
    label: "Website Builder",
    parent: true,
    icon: ToolOutlined,
    url: "/Content_Management/Website-Builder",
  },
  {
    id: 101,
    parentId: 1,
    name: "data-manager",
    label: "Data Manager",
    parent: true,
    icon: DatabaseOutlined,
    url: "/Content_Management/data-manager",
  },
  {
    id: 102,
    parentId: 1,
    name: "post-creator",
    label: "Post Creator",
    parent: true,
    icon: FileTextOutlined,
    url: "/Content_Management/Post-Creator",
  },

  {
    id: 103,
    parentId: 2,
    name: "post-manager",
    label: "Post Manager",
    parent: true,
    icon: EditOutlined,
    url: "/Social_Media/post-manager",
  },
  {
    id: 104,
    parentId: 2,
    name: "Analysis",
    parent: true,
    icon: AreaChartOutlined,
    url: "/Social_Media/Analysis",
  },
  {
    id: 105,
    parentId: 2,
    name: "account-manager",
    label: "Account Manager",
    parent: true,
    icon: UserSwitchOutlined,
    url: "/Social_Media/account-manager",
  },

  {
    id: 106,
    parentId: 3,
    name: "product-manager",
    label: "Product Manager",
    parent: true,
    icon: CodeSandboxOutlined,
    url: "/Product_Folder/product-manager",
  },
  {
    id: 107,
    parentId: 3,
    name: "product-analysis",
    label: "Product Analysis",
    parent: true,
    icon: DotChartOutlined,
    url: "/Product_Folder/product-analysis",
  },

  {
    id: 108,
    name: "Events",
    icon: NotificationOutlined,
    url: "/Events",
  },
  {
    id: 109,
    name: "Users",
    icon: UserOutlined,
    url: "/Users",
    model: true,
  },
  {
    id: 110,
    name: "Orders",
    icon: ShoppingCartOutlined,
    model: true,
    url: "/Orders",
  },

  {
    id: 111,
    name: "Notification",
    icon: BellOutlined,
    url: "/Notification",
  },
  {
    id: 112,
    parentId: 4,
    name: "money-transfer",
    label: "Money Transfer",
    parent: true,
    icon: TransactionOutlined,
    url: "/financial_management/money-transfer",
  },
  {
    id: 113,
    parentId: 4,
    name: "budget",
    label: "Budget",
    parent: true,
    icon: BankFilled,
    url: "/financial_management/budget",
  },
  {
    id: 114,
    parentId: 4,
    name: "financial-report",
    label: "Financial Report",
    parent: true,
    icon: AccountBookOutlined,
    url: "/financial_management/financial-report",
  },

  //=============== OUTSIDE THE MODEL =========================

  {
    id: 1000,
    parent: true,
    parentId: 110,
    name: "orders-details",
    label: "Order Details",
    icon: ShoppingCartOutlined,
    outSide: true,
    url: "/Orders/orders-details/:id",
  },
  {
    id: 1001,
    parent: true,
    parentId: 110,
    name: "orders-edit",
    label: "Order Edit",
    icon: ShoppingCartOutlined,
    outSide: true,
    url: "/Orders/orders-edit/:id",
  },
];
