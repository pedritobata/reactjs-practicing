import { useContext } from 'react';
import { Context01 } from "../../context/Context";

const NavBar = () => {

    const { state } = useContext(Context01);
    const { email } = state.user;

    return (
        <div>
            <span>{email}</span>
        </div>
    )
}

export default NavBar;