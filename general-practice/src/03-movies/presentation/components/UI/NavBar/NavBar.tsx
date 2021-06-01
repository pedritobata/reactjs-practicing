import { NavLink, useRouteMatch } from 'react-router-dom';
import classes from './NavBar.module.css';


export default function NavBar(props: any) {
const {path} = useRouteMatch();

    return (
        <nav className={classes.navbar}>
            <NavLink className={`${classes.link} ${classes.logo}`} to={`${path}/movies`}>The Movie</NavLink>
            <ul>
                <li><NavLink activeClassName={classes.active} className={classes.link} to={`${path}/profile`}>Profile</NavLink></li>
                <li><NavLink activeClassName={classes.active} className={classes.link} to={`${path}/login`}>Logout</NavLink></li>
                <li><NavLink activeClassName={classes.active} className={classes.link} to={`${path}/login`}>Login</NavLink></li>
            </ul>
        </nav>
    )
}
