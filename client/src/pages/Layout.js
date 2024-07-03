import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <a className="navbar-brand text-center" href="/">FinanceBest</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/user">User</Link>
        </li>
      </ul>
      </div>
    </nav>

    <Outlet />
  </>
  )
};

export default Layout;