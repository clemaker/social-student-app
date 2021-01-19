// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    register: 'http://127.0.0.1:8000/register',
    login: 'http://127.0.0.1:8000/login'
  },
  contact: {
    dashboard: 'http://127.0.0.1:8000/dashboard',
    delete: 'http://127.0.0.1:8000/dashboard/deleteContact',
    invite: 'http://127.0.0.1:8000/dashboard/inviteContact'
  },
  groups: {
    new: 'http://127.0.0.1:8000/group/new'
  },
  storage: {
    user: 'social-student-user'
  }
};
