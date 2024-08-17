import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/analytics",
    type: ACCOUNT_TYPE.STORE_MANAGER,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Deliveries",
    path: "/dashboard/delivery",
    type: ACCOUNT_TYPE.STORE_MANAGER,
    icon: "VscCalendar",
  },
  {
    id: 4,
    name: "Trailer Analytics",
    path: "/dashboard/trailers",
    type: ACCOUNT_TYPE.DISTRIBUTION_CENTER_MANAGER,
    icon: "VscCalendar",
  },
  {
    id: 5,
    name: "Stores",
    path: "/dashboard/stores",
    type: ACCOUNT_TYPE.DISTRIBUTION_CENTER_MANAGER,
    icon: "VscGraph",
  },
  {
    id: 6,
    name: "Deliveries",
    path: "/dashboard/deliveries",
    type: ACCOUNT_TYPE.DISTRIBUTION_CENTER_MANAGER,
    icon: "VscChecklist",
  },
]