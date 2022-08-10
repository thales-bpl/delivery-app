import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Register from '../pages/Register';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route
          path="/login"
          component={ Login }
        />
        <Route
          path="/register"
          component={ Register }
        />
      </Switch>
    </BrowserRouter>
  );
}
