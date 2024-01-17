import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import { Loader } from './components/Loader';

import { router } from './routers';
import { store } from './store';
import '../configs/firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ThemeProvider>
  </Provider>,
);
