import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Job App</h1>
      <div className="links">
        <Link to="/">Job List</Link>
        <Link to="/add-job">Add Job</Link>
      </div>
    </nav>
  );
};

export default Navbar;