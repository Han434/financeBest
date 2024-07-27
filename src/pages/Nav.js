import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import User from "./User";
import Dashboard from "./Dashboard";

const Nav = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user" element={<User />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default Nav;