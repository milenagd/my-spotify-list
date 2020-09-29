import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from '../components/Layout';
import Profile from '../scenes/Profile';
import { allRoutes } from './allRoutes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {allRoutes.map((route) => (
          <Route key={`route-${route.path}`} exact path={route.path}>
            <Layout title={route.title}>
              <route.component />
            </Layout>
          </Route>
        ))}
        <Redirect to="/profile">
          <Layout>
            <Profile />
          </Layout>
        </Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
