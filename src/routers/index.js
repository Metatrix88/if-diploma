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
import { StartPage } from '../pages/StartPage';
import { AllBooks } from '../pages/AllBooks';
import {Settings} from '../pages/Settings';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.index} element={<StartPage />} />
        <Route path={PATH.allBooks} element={<AllBooks />} />
        <Route path={PATH.settings} element={<Settings />} />
        {/*<Route path={`${PATH.review}/:reviewId`} element={<ReviewsPage />} />*/}
        {/*<Route*/}
        {/*  path={`${PATH.destination}/:tab/:destinationId`}*/}
        {/*  element={<DestinationsPage />}*/}
        {/*/>*/}
        {/*<Route path=":staticPage" element={<StaticPage />} />*/}
      </Route>
    </Route>,
  ),
);
