// import { lazy } from 'react';
// import { IAppRoute } from '../interfaces/routes/app-routes.interfaces';

// // pre loaded components
// import { ErrorPage } from '../pages/error-page';
// import { PageNotFound404 } from '../pages/page-not-found-404';
// import { HomePage } from '../pages/home-page';

// // lazy loaded components
// const VehicleDetails = lazy(() => import('../pages/vehicle-details'));
// const FavoriteVehiclesList = lazy(() => import('../pages/favorite-vehicles-list'));

// const appRoutes: IAppRoute[] = [
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: '*',
//     element: <PageNotFound404 />,
//   },
//   {
//     path: 'vehicle/:searchedVehiclePlateNumber',
//     element: <VehicleDetails />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: 'favorites',
//     element: <FavoriteVehiclesList />,
//   },
// ];
// export default appRoutes;
