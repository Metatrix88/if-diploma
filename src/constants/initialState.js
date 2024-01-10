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
  },
  // user: {
  //   email: null,
  //   id: null,
  //   name: null,
  // },
  // updateCounters: {
  //   adultsCounter: 1,
  //   childrenCounter: 0,
  //   childrenAge: [],
  //   roomsCounter: 1,
  // },
  // searchParams: {
  //   cityInput: '',
  //   dateStart: null,
  //   dateEnd: null,
  //   adultsQuantity: 1,
  //   roomsQuantity: 1,
  //   childrenQuantityAndAge: '',
  // },
  // availableHotels: {
  //   hotels: [],
  // },
};
