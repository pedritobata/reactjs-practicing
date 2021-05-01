import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ScreensLogin from './Login';

const ScreensRouter01 = () => {

    const match = useRouteMatch();

    return (
     <Switch>
         <Route path={`${match.path}/login`} component={ScreensLogin}/>
     </Switch>
    )
}

export default ScreensRouter01;
