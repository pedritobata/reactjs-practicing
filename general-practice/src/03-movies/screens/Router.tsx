import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Home from './Home'

export default function Router() {
    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route path={`${path}/movies`} component={Home} />
        </Switch>
    )
}
