import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import routes from "./routes";

const Navigation = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React app" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive ? "nav-active" : ""
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
              <Routes>
                {routes.map(({ to, path, Component }) => (
                  <Route key={to} path={path} element={<Component />} />
                ))}
                <Route path="/*" element={<Navigate to="/nolazy" replace />} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
