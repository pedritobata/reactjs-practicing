import {
  ChangeEventHandler,
  MouseEventHandler,
  useState,
  useContext,
} from "react";
import {
  RouteComponentProps,
  withRouter,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Context01 } from "../../context/Context";
import InputField from "../UI/InputField/InputField";
import "./Form.css";

const initialState = {
  email: "",
  password: "",
  error: false,
};

//const Form = (props: RouteComponentProps) => {
const Form = () => {
  const [formState, setFormState] = useState(initialState);
  const { email, password, error } = formState;
  const { replace, push } = useHistory();
  //const { path } = useRouteMatch();
  const { state, setState } = useContext(Context01);

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const fieldName = e.target.name;
    setFormState({
      ...formState,
      [fieldName]: e.target.value,
    });
  };

  const cancelClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    //props.history.replace('');
    replace("");
  };

  const loginClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!isValidFormFields()) {
      return setFormState({
        ...formState,
        error: true,
      });
    }
    setState({
      ...state,
      user: {
        age: 22,
        email,
        name: "NN",
        lastName: "NN",
        token: "aaaassssdddd",
      },
    });
    push("home");
  };

  const isValidFormFields = () => {
    const isFieldsNotEmpty =
      formState.email !== "" && formState.password !== "";
    return isFieldsNotEmpty;
  };

  return (
    <form className="loginForm">
      <InputField
      isShowIcon
        label="E-mail"
        type="email"
        name="email"
        value={email}
        placeholder="Type username here"
        onChange={inputChangeHandler}
      />
      <InputField
      isShowIcon
        label="Password"
        type="password"
        name="password"
        value={password}
        placeholder="Type password here"
        onChange={inputChangeHandler}
      />
      {error && <p>Invalid username or password</p>}
      <button onClick={cancelClickHandler}>Cancel</button>
      <button onClick={loginClickHandler}>Login</button>
    </form>
  );
};

//export default withRouter(Form);
export default Form;
