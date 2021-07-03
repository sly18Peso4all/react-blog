import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Jojo Blog</h1>
      <div className={classes.navbarlist}>
        <Link to="/">Home</Link>
        <Link to="/createblog">New Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
