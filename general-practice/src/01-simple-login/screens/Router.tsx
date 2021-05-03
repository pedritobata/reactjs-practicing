import { Switch, Route, useRouteMatch } from "react-router-dom";
import ContextWrapper from "../context/Context";
import ScreensHome from "./Home";
import ScreensLogin from "./Login";

const ScreensRouter01 = () => {
  const match = useRouteMatch();

  return (
    <ContextWrapper>
      <Switch>
        <Route path={`${match.path}/login`} component={ScreensLogin} />
        <Route path={`${match.path}/home`} component={ScreensHome} />
      </Switch>
    </ContextWrapper>
  );
};

export default ScreensRouter01;
