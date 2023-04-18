import {
  StarFilled,
  DatabaseFilled,
  InstagramFilled,
  GoldenFilled,
  BankFilled,
  InteractionFilled,
  ProjectFilled,
  CustomerServiceFilled 
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
//   label:"Static Props" @string name that will display on menu
//   fixedName: @string to change the name inside the redux reducers
//   subRoute : @Path && to where the subRoute is located
// },

export const Routers = [
  //Pins----------------
  {
    name: "Content_Management",
    label: "Content Management System",
    child: true,
    parentId: 0,
    id: 1,
    icon: DatabaseFilled,
    pin: true,
    url: "/Content_Management",
  },
  {
    name: "Social_Media",
    label: "Social Media Manager",
    child: true,
    parentId: 0,
    id: 2,
    icon: InstagramFilled,
    pin: true,
    url: "/Social_Media",
  },
  {
    name: "store_management",
    label: "Store Management",
    child: true,
    parentId: 0,
    id: 3,
    icon: GoldenFilled,
    pin: true,
    url: "/store_management",
  },
  {
    name: "financial_management",
    label: "Financial Management",
    child: true,
    parentId: 0,
    id: 4,
    icon: BankFilled,
    pin: true,
    url: "/financial_management",
  },
  {
    name: "interaction_section",
    label: "Interaction Section",
    child: true,
    parentId: 0,
    id: 5,
    icon: InteractionFilled ,
    pin: true,
    url: "/interaction_section",
  },
  {
    name: "project_manager",
    label: "Project Manager",
    child: true,
    parentId: 0,
    id: 6,
    icon: ProjectFilled ,
    pin: true,
    url: "/project_manager",
  },
  {
    name: "customer_section",
    label: "Customer service Section",
    child: true,
    parentId: 0,
    id: 7,
    icon: CustomerServiceFilled,
    pin: true,
    url: "/customer_section",
  },
  //---------------------------------Routes--------------------------
  // {
  //   id: 100,
  //   parentId: 1,
  //   name: "website-builder",
  //   label: "Website Builder",
  //   parent: true,
  //   icon: ToolOutlined,
  //   url: "/Content_Management/Website-Builder",
  // },
  //=============== OUTSIDE THE MODEL =========================

  // {
  //   id: 1000,
  //   parent: true,
  //   parentId: 110,
  //   name: "orders-details",
  //   label: "Order Details",
  //   icon: ShoppingCartOutlined,
  //   outSide: true,
  //   url: "/Orders/orders-details/:id",
  // },
];
