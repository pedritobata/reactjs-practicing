import NavBar from "../UI/NavBar/NavBar";
import classes from './Layout.module.css';

type Props = {
    children: any;
}

export default function Layout(props: Props) {
    return (
        <div className={classes.layout}>
            <NavBar />
            {props.children}
        </div>
    )
}
