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
import { StartPage} from '../pages/StartPage';
// import { Login } from '../pages/Login';
// import { HotelPage } from '../pages/HotelPage';
// import { ReviewsPage } from '../pages/ReviewsPage';
// import { DestinationsPage } from '../pages/DestinationsPage';
// import { StaticPage } from '../pages/StaticPage';
// import { Stays } from '../pages/Stays';
// import { Attractions } from '../pages/Attractions';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.index} element={<StartPage />} />
        {/*<Route path="/home" element={<StartPage />} />*/}
        {/*<Route path={`${PATH.hotelsPage}/:hotelId`} element={<HotelPage />} />*/}
        {/*<Route path={`${PATH.review}/:reviewId`} element={<ReviewsPage />} />*/}
        {/*<Route*/}
        {/*  path={`${PATH.destination}/:tab/:destinationId`}*/}
        {/*  element={<DestinationsPage />}*/}
        {/*/>*/}
        {/*<Route path=":staticPage" element={<StaticPage />} />*/}
        {/*<Route path={PATH.stays} element={<Stays />} />*/}
        {/*<Route path={PATH.attractions} element={<Attractions />} />*/}
      </Route>
    </Route>,
  ),
);
