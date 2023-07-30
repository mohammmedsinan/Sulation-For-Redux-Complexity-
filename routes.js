import {
  DatabaseFilled,
  InstagramFilled,
  GoldenFilled,
  BankFilled,
  InteractionFilled,
  ProjectFilled,
  CustomerServiceFilled,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  AreaChartOutlined,
  ControlFilled,
  MessageFilled,
  CompassFilled,
  FundFilled,
  ScheduleFilled,
  TransactionOutlined,
  MailFilled,
  PropertySafetyFilled,
  OrderedListOutlined,
  BarsOutlined
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
  {
  name: 'Home' ,
  id: 10000,
  icon: PropertySafetyFilled ,
  url: '/',
  label: "Home",
  customLayout: "static",
},
    //==============================Store Management=====================================
    {
      name: "store_management",
      label: "Store Management",
      child: true,
      id: 3,
      icon: GoldenFilled,
      pin: true,
      url: "/store_management",
    },
    {
      id: 100,
      parentId: 3,
      name: "product_manager_Creator",
      label: "Product Creator",
      parent: true,
      icon: AppstoreAddOutlined ,
      url: "/store_management/product_manager_Creator",
    },
    {
      id: 101,
      parentId: 3,
      name: "product_manager_list",
      label: "Products List",
      parent: true,
      icon: UnorderedListOutlined ,
      url: "/store_management/product_manager_list",
    },
    {
      id: 102,
      parentId: 3,
      name: "product_manager_analyzer",
      label: "Products Analyzer",
      parent: true,
      icon: AreaChartOutlined  ,
      url: "/store_management/product_manager_analyzer",
    },
    //============================== Social Media =====================================
    {
      name: "social_media",
      label: "Social Media Manager",
      child: true,
      id: 2,
      icon: InstagramFilled,
      pin: true,
      url: "/social_media",
  },
  {
    id: 103,
    parentId:2,
    name: "social_media_accounts",
    label: "Accounts Controller",
    parent: true,
    icon: ControlFilled,
    url: "/social_media/social_media_accounts",
  },
  {
    id: 104,
    parentId:2,
    name: "social_media_post",
    label: "Post Creator",
    parent: true,
    icon: MessageFilled ,
    url: "/social_media/social_media_post",
  },
  {
    id: 105,
    parentId:2,
    name: "social_media_campaign",
    label: "Campaigns",
    parent: true,
    icon: CompassFilled ,
    url: "/social_media/social_media_campaign",
  },
  {
    id: 106,
    parentId:2,
    name: "social_media_analyzer",
    label: "Social Media Analyzer",
    parent: true,
    icon: FundFilled  ,
    url: "/social_media/social_media_analyzer",
  },

  //============================== Finance Folder =====================================
  {
    name: "financial_management",
    label: "Financial Management",
    child: true,
    id: 4,
    icon: BankFilled,
    pin: true,
    url: "/financial_management",
  },
  {
    id: 107,
    parentId:4,
    name: "financial_budget",
    label: "Budget",
    parent: true,
    icon: FundFilled  ,
    url: "/financial_management/financial_budget",
  },
  {
    id: 108,
    parentId:4,
    name: "financial_receipt",
    label: "Receipt",
    parent: true,
    icon: ScheduleFilled,
    url: "/financial_management/financial_receipt",
  },
  {
    id: 109,
    parentId:4,
    name: "financial_transfer",
    label: "Transfer",
    parent: true,
    icon: TransactionOutlined ,
    url: "/financial_management/financial_transfer",
  },
  {
    id: 110,
    parentId:4,
    name: "financial_analyzer",
    label: "Analyzer",
    parent: true,
    icon: TransactionOutlined ,
    url: "/financial_management/financial_analyzer",
  },
  {
    id: 1000,
    parentId:108,
    name: "create",
    label: "Create Receipt",
    parent: true,
    icon: FundFilled  ,
    url: "/financial_management/financial_receipt/create",
    subRoute: true,
  },
  //============================== Interaction Folder =====================================
  // {
  //   name: "interaction_section",
  //   label: "Interaction Section",
  //   child: true,
  //   id: 5,
  //   icon: InteractionFilled ,
  //   pin: true,
  //   url: "/interaction_section",
  // },
  // {
  //   id: 111,
  //   parentId:5,
  //   name: "interaction_email",
  //   label: "Email",
  //   parent: true,
  //   icon: MailFilled   ,
  //   url: "/interaction_section/interaction_email",
  // },
  // {
  //   id: 112,
  //   parentId:5,
  //   name: "interaction_employee",
  //   label: "Employees",
  //   parent: true,
  //   icon: PropertySafetyFilled    ,
  //   url: "/interaction_section/interaction_employee",
  // },
  //============================== Project Manager Folder =====================================
  // {
  //   name: "project_manager",
  //   label: "Project Manager",
  //   child: true,
  //   id: 6,
  //   icon: ProjectFilled ,
  //   pin: true,
  //   url: "/project_manager",
  // },
  // {
  //   id: 113,
  //   parentId:6,
  //   name: "project_manager_list",
  //   label: "Projects List",
  //   parent: true,
  //   icon: OrderedListOutlined,
  //   url: "/project_manager/project_manager_list",
  // },
  // {
  //   id: 114,
  //   parentId:6,
  //   name: "project_manager_task_manager",
  //   label: "Task Manager",
  //   parent: true,
  //   icon: BarsOutlined ,
  //   url: "/project_manager/project_manager_task_manager",
  // },
  // {
  //   id: 115,
  //   parentId:6,
  //   name: "project_manager_analyzer",
  //   label: "Task Manager",
  //   parent: true,
  //   icon: FundFilled ,
  //   url: "/project_manager/project_manager_analyzer",
  // },
  //Pins----------------
  // {
  //   name: "Content_Management",
  //   label: "Content Management System",
  //   child: true,
  //   id: 1,
  //   icon: DatabaseFilled,
  //   pin: true,
  //   url: "/Content_Management",
  // },
  
  // {
  //   name: "customer_section",
  //   label: "Customer service Section",
  //   child: true,
  //   id: 7,
  //   icon: CustomerServiceFilled,
  //   pin: true,
  //   url: "/customer_section",
  // },
  //---------------------------------Routes--------------------------

];