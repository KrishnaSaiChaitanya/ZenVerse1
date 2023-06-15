import {
    mdiMonitor,
    mdiMonitorDashboard,
    mdiAccountGroupOutline,
    mdiFileMultipleOutline,
    mdiChartLine,
    mdiDotsTriangle,
    mdiCogOutline,
  } from "@mdi/js";
  
  export default [
    {
      to: "/",
      icon: mdiMonitor,
      label: "Home",
    },
    {
      label: "Products",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Courses",
        },
        {
          label: "Bundles",
        },
        {
          label: "Mock Tests",
        },
        {
          label: "Test Series",
        },
        {
          label: "Categories",
        },
      ],
    },
    {
      label: "User Management",
      icon: mdiAccountGroupOutline,
      menu: [
        {
          label: "Learner",
          to: "/examportal/usermgmt/LearnerMgmt",
        },
        {
          label: "Admin",
          to: "/examportal/usermgmt/AdminMgmt",
        },
        {
          label: "Instructor",
          to: "/examportal/usermgmt/InstructorMgmt",
        },
        {
          label: "Affiliates",
          to: "/examportal/usermgmt/AffiliateMgmt",
        },
      ],
    },
    {
      icon: mdiChartLine,
      label: "Reports",
      menu: [
        {
          label: "Course Report",
          to: "/examportal/report/coursereport",
        },
        {
          label: "Product Enrollment",
          to: "/examportal/report/productenrollment",
        },
      ],
    },
    {
      to: "/",
      icon: mdiFileMultipleOutline,
      label: "Manage",
    },
    {
      to: "/examportal/settings",
      icon: mdiCogOutline,
      label: "Settings",
    },
  ];
  