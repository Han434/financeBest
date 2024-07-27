import { useEffect, useState } from "react";

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch("/api/company")
            .then((res) => res.json())
            .then((data) => setCompanies(data));
    }, []);

    const renderCompanies = () => {
        return companies.map((company, index) => {
          return (
              <div class="card text-white bg-dark mb-2 col-12">
                <div class="card-header">
                  <h5>{company.companyName} <span class="badge bg-success text-dark">{company.companyType}</span></h5>
                </div>
                <div class="card-body">
                  <div>
                    <p>
                      Description: {company.companyDescription}
                    </p>
                  </div>
                </div>
              </div>
            )
        });
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark text-white">
          <div className="mt-3">
            <h3 className="text-center">Dashboard</h3>
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-center">Company</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center">Reports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center">Admin View</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-10 p-5">
          <h1>Companies <button type="button" class="btn btn-primary">Create</button> </h1>
          <div className="row">
            {renderCompanies()}
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Dashboard;