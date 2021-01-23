export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      title: true,
      name: "ENTRIES",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },

    
    {
      name: "Member Advance",
      url: "/Entries/MemberAdvance",
      icon: "icon-pencil",
    },
    {
      name: "Member Bank Master",
      url: "/Entries/MemberBankMaster",
      icon: "icon-pencil",
    },
    {
      name: "Bank Master",
      url: "/Entries/BankMaster",
      icon: "icon-pencil",
    },
    {
      name: "Advance Payment",
      url: "/Entries/AdvancePayment",
      icon: "icon-pencil",
    },
    {
      name: "Refund ITC Payment",
      url: "/Entries/RefundITCPayment",
      icon: "icon-pencil",
    },
    
    {
      title: true,
      name: "REPORTS",
      wrapper: {
        element: "",
        attributes: {},
      },
      class: "",
    },

    {
      name: "Bank Balance Register",
      url: "/Reports/BankBalanceRegister",
      icon: "icon-layers",
    },

   
  ],
};
