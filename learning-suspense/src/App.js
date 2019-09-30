import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

function App() {
  return (
    <BrowserRouter>
        <nav>
          <NavLink to="/user" >User Page</NavLink> |&nbsp;
          <NavLink to="/posts" >Posts Page</NavLink>
        </nav>
        <Route path="/"  exact component={Welcome} />
        <Route path="/user"  component={User}  />
   {/*      <React.Suspense fallback={<p>Loading...</p>}>
           <Route path="/posts" component={Posts} />
        </React.Suspense> */}

        <Route path="/posts" render={() => {
          return (
            <React.Suspense fallback={<p>Loading......</p>}>
              <Posts />
            </React.Suspense>
          );
        }} />

    </BrowserRouter>
  );
}

export default App;
