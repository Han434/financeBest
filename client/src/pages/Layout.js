import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center" data-bs-theme="dark">
      <a className="navbar-brand text-center" href="/">
        <i className="bi bi-bootstrap h4"></i>
        FinanceBest
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-center" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-center" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-center" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-center" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button type="button" class="nav-link text-center" data-bs-toggle="modal" data-bs-target="#signInModal">
            Sign In
          </button>
        </li>
      </ul>
      </div>
    </nav>

    <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-5">
          <div class="modal-body">
              <div class="text-center container">
                  <div class="form-signin">
                    <form className="mx-auto">
                        <i className="bi bi-bootstrap h1"></i>
                        <h1 class="mb-3 fw-normal">Sign in</h1>
                        <div class="form-floating mt-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>                
                        <button type="button" class="w-100 btn btn-lg btn-secondary mt-3" data-bs-dismiss="modal">Cancle</button>
                        <div class="border mt-3 p-3 rounded">
                            <h1 class="h3 mt-3 fw-normal">Don't have an account?</h1>
                            <button type="button" class="w-100 btn btn-lg btn-dark mt-3" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                Sign Up
                            </button>
                        </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-5">
          <div class="modal-body">
              <div class="text-center container">
                  <div class="form-signin">
                    <form className="mx-auto">
                        <i className="bi bi-bootstrap h1"></i>
                        <h1 class="mb-3 fw-normal">Sign Up</h1>
                        <div class="form-floating mt-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>                
                        <button type="button" class="w-100 btn btn-lg btn-secondary mt-3" data-bs-dismiss="modal">Cancle</button>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    <Outlet />
  </>
  )
};

export default Layout;