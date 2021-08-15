import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from "./Home";
import Layout from "../components/Layout/Layout";
import Login from './Login';
import Profile from './Profile';
import { store } from '../../application/store/redux/store';

export default function Router() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Provider store={store}>
        <Layout>
          <Route path={`${path}/movies`} component={Home} />
          <Route path={`${path}/login`} component={Login} />
          <Route path={`${path}/profile`} component={Profile} />
        </Layout>
      </Provider>
    </Switch>
  );
}
