import Form from "../components/Form/Form";
import { useEffect, useContext } from 'react';
import { Context01 } from '../context/Context';
import { useHistory } from 'react-router-dom';

const ScreensLogin = () => {
    const {state} = useContext(Context01);
    const { push } = useHistory();

    useEffect(() => {
        if (state.user.token){
            push('/');
        }
        return () => {
            console.log("[ScreensLogin] unmounted")
        }
    })

    return (
        <div>
            <h1>Sign in</h1>
            <Form></Form>
        </div>
    )
}

export default ScreensLogin;
