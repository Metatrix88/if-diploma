import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// constants
import { PATH } from '../constants/paths';

// components
import { SystemLayout } from '../components/SystemLayout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { App } from '../components/App';
import { MainPage } from '../pages/MainPage';
import { AllBooks } from '../pages/AllBooks';
import { Settings } from '../pages/Settings';
import { StaticPage } from '../pages/StaticPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.index} element={<App />}>
          <Route errorElement={<ErrorBoundary />}>
            <Route index element={<MainPage />} />
            <Route path={PATH.allBooks} element={<AllBooks />} />
            <Route path={PATH.settings} element={<Settings />} />
            <Route path=":staticPage" element={<StaticPage />} />
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);
