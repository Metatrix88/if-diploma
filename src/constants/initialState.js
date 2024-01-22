import { authStatuses } from './authStatuses';
import { themeVariants } from './themeVariants';

export const INITIAL_STATE = {
  themes: {
    variant: themeVariants.whiteTheme,
  },
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    username: null,
    birthdate: null,
    email: null,
    password: null,
    token: null,
    id: null,
    imageAvatar: null,
  },
};
