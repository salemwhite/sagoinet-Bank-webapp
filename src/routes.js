import React from "react";

const Breadcrumbs = React.lazy(() => import("./views/Base/Breadcrumbs"));
const Cards = React.lazy(() => import("./views/Base/Cards"));
const Carousels = React.lazy(() => import("./views/Base/Carousels"));
const Collapses = React.lazy(() => import("./views/Base/Collapses"));
const Dropdowns = React.lazy(() => import("./views/Base/Dropdowns"));
const Forms = React.lazy(() => import("./views/Base/Forms"));
const Jumbotrons = React.lazy(() => import("./views/Base/Jumbotrons"));
const ListGroups = React.lazy(() => import("./views/Base/ListGroups"));
const Navbars = React.lazy(() => import("./views/Base/Navbars"));
const Navs = React.lazy(() => import("./views/Base/Navs"));
const Paginations = React.lazy(() => import("./views/Base/Paginations"));
const Popovers = React.lazy(() => import("./views/Base/Popovers"));
const ProgressBar = React.lazy(() => import("./views/Base/ProgressBar"));
const Switches = React.lazy(() => import("./views/Base/Switches"));
const Tables = React.lazy(() => import("./views/Base/Tables"));
const Tabs = React.lazy(() => import("./views/Base/Tabs"));
const Tooltips = React.lazy(() => import("./views/Base/Tooltips"));
const BrandButtons = React.lazy(() => import("./views/Buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() =>
  import("./views/Buttons/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() => import("./views/Buttons/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/Buttons/Buttons"));
const Charts = React.lazy(() => import("./views/Charts"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const CoreUIIcons = React.lazy(() => import("./views/Icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./views/Icons/Flags"));
const FontAwesome = React.lazy(() => import("./views/Icons/FontAwesome"));
const SimpleLineIcons = React.lazy(() =>
  import("./views/Icons/SimpleLineIcons")
);
const Alerts = React.lazy(() => import("./views/Notifications/Alerts"));
const Badges = React.lazy(() => import("./views/Notifications/Badges"));
const Modals = React.lazy(() => import("./views/Notifications/Modals"));

//SAGO ================================================================
const Widgets = React.lazy(() => import("./views/Widgets/Widgets"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

const MemberAdvance = React.lazy(() =>
  import("./views/Entries/MemberAdvance/MemberAdvance")
);
const MemberBankMaster = React.lazy(() =>
  import("./views/Entries/MemberBankMaster/MemberBankMaster")
);

const BankMaster = React.lazy(() =>
  import("./views/Entries/BankMaster/BankMaster")
);
const RefundITCPayment = React.lazy(() =>
  import("./views/Entries/RefundITCPayment/RefundITCPayment")
);
const AdvancePayment = React.lazy(() =>
  import("./views/Entries/AdvancePayment/AdvancePayment")
);



const BankBalanceRegister = React.lazy(() =>
  import("./views/Reports/BankBalanceRegister/BankBalanceRegister")
);

const Login = React.lazy(() => import("./views/Pages/Login/Login"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Login" , component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  

  {
    name: "Merchant Master",
    path: "/Entries/MemberAdvance",
    component: MemberAdvance,
  },
  {
    name: "MemberBankMaster",
    path: "/Entries/MemberBankMaster",
    component: MemberBankMaster,
  },

  {
    name: "BankMaster",
    path: "/Entries/BankMaster",
    component: BankMaster,
  },

  {
    name: "Advance Payment",
    path: "/Entries/AdvancePayment",
    component: AdvancePayment,
  },

  {
    name: "Bank Receipt SC II",
    path: "/Entries/RefundITCPayment",
    component: RefundITCPayment,
  },

  
  {
    path: "/Reports/BankBalanceRegister",
    name: "BankBalanceRegister",
    component: BankBalanceRegister,
  },
  
  { path: "/base", exact: true, name: "Base", component: Cards },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/forms", name: "Forms", component: Forms },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/dropdowns", name: "Dropdowns", component: Dropdowns },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", exact: true, name: "Buttons", component: Buttons },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Button Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/font-awesome", name: "Font Awesome", component: FontAwesome },
  {
    path: "/icons/simple-line-icons",
    name: "Simple Line Icons",
    component: SimpleLineIcons,
  },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    component: Alerts,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
