import { Switch, Route } from "react-router-dom";
import Login from "../01-simple-login/Login";
import MainLinks from './MainLinks';
import Error404 from './404';

export default function MainRoutes() {
  return (
        <Switch>
          <Route exact path="/" component={MainLinks}/>
          <Route path="/simple-login" component={Login} />
          <Route component={Error404}/>
        </Switch>
  );
}
