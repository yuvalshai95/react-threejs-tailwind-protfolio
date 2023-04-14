export interface IAppRoute {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
}
export interface IRouteError {
  statusText?: string;
  message?: string;
}
