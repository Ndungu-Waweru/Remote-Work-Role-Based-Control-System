import { PERMISSIONS } from "./permissions";

export const ROLES = {
  admin: [
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_REPORTS
  ],
  manager: [
    PERMISSIONS.VIEW_REPORTS
  ],
  employee: [
    PERMISSIONS.VIEW_TASKS
  ]
};
