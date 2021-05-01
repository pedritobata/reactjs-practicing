import { useState, FC, Dispatch } from "react";
import { createContext } from "react";
import { User } from "../models/user";

type ProvideValue = {
  state?: AppState;
  setState?: Dispatch<React.SetStateAction<AppState>>;
};

type AppState = {
  user: User;
};

export const Context01 = createContext<ProvideValue>({});

const ContextWrapper01: FC = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: {
      name: "",
      lastName: "",
      age: 21,
    },
  });

  const values: ProvideValue = { state, setState }

  return (
    <Context01.Provider value={values}>
      {children}
    </Context01.Provider>
  );
};

export default ContextWrapper01;
