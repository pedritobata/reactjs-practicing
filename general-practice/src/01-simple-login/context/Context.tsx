import { useState, FC, Dispatch } from "react";
import { createContext } from "react";
import { User } from "../models/user";

type ProvideValue = {
  state: AppState;
  setState: Dispatch<React.SetStateAction<AppState>>;
};

type AppState = {
  user: Partial<User>;
};


export const Context01 = createContext<ProvideValue>({state: { user: {}}, setState: () => {}});

const ContextWrapper01: FC = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: {
      name: '',
      lastName: '',
      age: 21,
      email: '',
      token: ''
    },
  });

  const data: ProvideValue = { state, setState }

  return (
    <Context01.Provider value={data}>
      {children}
    </Context01.Provider>
  );
};

export default ContextWrapper01;
