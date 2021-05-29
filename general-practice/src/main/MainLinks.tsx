import NavItem from "./components/NavItem";
import "./MainLinks.css";

export default function MainLinks() {
  return (
    <div className="mainLinks">
      <nav className="mainLinks__nav">
        <ul>
          <NavItem
            text="01 - Simple login & Home page"
            to="/01/login"
            description="Login using context api"
          />
          <NavItem
            text="03 - Random Movie App"
            to="/03/movies"
            description="This is a random movie app for practicing"
          />
        </ul>
      </nav>
    </div>
  );
}
