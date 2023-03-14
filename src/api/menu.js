const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: "ic:outline-dashboard",
    url: "/",
    header: false,
    hasLine: true,
    parent: "dashboard",
  },

  {
    id: 2,
    title: "Event Logs",
    header: true,
    hasLine: false,
  },

  {
    id: 3,
    title: "View Event Logs",
    icon: "material-symbols:calendar-view-day-outline-rounded",
    header: false,
    hasChildren: true,
    parent: "event-logs",
    hasLine: true,
    children: [
      {
        id: 1,
        title: "User Logs",
        icon: "mdi:user-circle-outline",
        url: "/user-logs",
        parent: "event-logs",
        subItem: "user-logs",
      },
      {
        id: 2,
        title: "Trainer Logs",
        icon: "ph:chalkboard-teacher",
        url: "/trainer-logs",
        parent: "event-logs",
        subItem: "trainer-logs",
      },
      {
        id: 3,
        title: "Affiliate Logs",
        icon: "tabler:affiliate",
        url: "/affiliate-logs",
        parent: "event-logs",
        subItem: "affiliate-logs",
      },
      {
        id: 4,
        title: "Admin Logs",
        icon: "mdi:users-group",
        url: "/admin-logs",
        parent: "event-logs",
        subItem: "admin-logs",
      },
    ],
  },

  {
    id: 4,
    title: "Management",
    header: true,
    hasChildren: false,
    hasLine: false,
  },

  {
    id: 5,
    title: "Activities",
    icon: "fluent:content-view-24-regular",
    hasChildren: true,
    header: false,
    hasLine: true,
    children: [
      {
        id: 1,
        title: "All Users",
        icon: "mdi:user-circle-outline",
        url: "/user-activities",
        subItem: "user-activities",
      },
      {
        id: 2,
        title: "All Admin",
        icon: "clarity:administrator-line",
        url: "/all-admin",
        subItem: "all-admin",
      },
      {
        id: 3,
        title: "Trainer Activities",
        icon: "ph:chalkboard-teacher",
        url: "/trainer-activites",
        subItem: "trainer-activities",
      },
      {
        id: 4,
        title: "Website Percentage",
        icon: "ic:baseline-percentage",
        url: "/website-percentage",
        subItem: "website-percentage",
      },
    ],
  },

  {
    id: 6,
    title: "Reports & Stats",
    icon: "nimbus:stats",
    url: "/reports-and-stats",
    hasChildren: false,
    hasLine: false,
    parent: "reports-and-stats",
  },

  {
    id: 7,
    title: "Logout",
    icon: "material-symbols:logout-rounded",
    url: "/logout",
    hasChildren: false,
    hasLine: false,
  },
];

export default menu;
