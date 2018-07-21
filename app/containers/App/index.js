/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MainLayout from 'containers/MainLayout/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/index';

// eslint-disable-next-line
export function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        React.createElement(
          layout,
          props,
          React.createElement(component, props),
        )
      }
    />
  );
}

export default function App() {
  return (
    <Switch>
      <RouteWithLayout
        exact
        layout={MainLayout}
        path="/"
        component={MainPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
