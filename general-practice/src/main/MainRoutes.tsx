import { Switch, Route } from "react-router-dom";
import MainLinks from './MainLinks';
import Error404 from './404';
import ScreensRouter01 from '../01-simple-login/screens/Router';

export default function MainRoutes() {
  return (
        <Switch>
          <Route path="/01" component={ScreensRouter01} />
          <Route exact path="/" component={MainLinks}/>
          <Route component={Error404}/>
        </Switch>
  );
}
