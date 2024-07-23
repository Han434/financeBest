import "bootstrap/dist/css/bootstrap.min.css";
import myImage from "../images/bg.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import access from "../images/access.png";
import afford from "../images/afford.png";
import reliable from "../images/reliable.png";
import { useEffect, useState } from "react";

const Home = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch("/api/company")
            .then((res) => res.json())
            .then((data) => setCompanies(data));
    }, []);

    const renderCompanies = () => {
        return companies.map((company, index) => {
            return (
                <div key={index}>
                    <h3>{company.companyName}</h3>
                    <p>
                        {company.companyDescription} <br />
                        {company.companyType}
                    </p>
                </div>
            )
        });
    }
    
    return (
        <div className="container-fluid">

            {/* Center Text */}
            <div className="px-4 py-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">About Us</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Free accounting web application that is acccesible on your mobile phone, tablet, laptop or any device. With easily accessible training and support from the expect in person or online.
                        Get your work acccesible, free and systematic.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg me-sm-3 mb-4" data-bs-toggle="modal" data-bs-target="#signUpModal">
                        Sign Up For Free
                    </button>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "45vh"}}>
                    <div className="container px-5">
                        <img src={myImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5 my-5 text-center border-bottom">
                <h1>Testing Company</h1>
                {renderCompanies()}
            </div>

            {/* Statistic Carousel */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={carousel1} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"/>
                        <div className="carousel-caption d-none d-md-block bg-light rounded text-dark">
                            <h5>Did you know that</h5>
                            <p>Business with a neat management system and financial solution has higher rate of getting success.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel2} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"/>
                        <div className="carousel-caption d-none d-md-block bg-light rounded text-dark">
                            <h5>Did you know that</h5>
                            <p>Finance Best is the best solution of finance for small business.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"/>
                        <div className="carousel-caption d-none d-md-block bg-light rounded text-dark">
                            <h5>Did you know that</h5>
                            <p>All successful business has finance solution in their arsenal.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Reason to use Finance Best */}
            <div className="p-5 my-5">
                <h2 className="fw-bold text-center mb-5">Why FinanceBest?</h2>
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <img src={afford} className="rounded" width="140" height="140"/>
                        <h3>Affordable</h3>
                        <p>
                            Starting with freetier account, you can upgrade your billing system as little as $10 a year.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={access} className="rounded" width="140" height="140"/>
                        <h3>Accessible</h3>
                        <p>
                            Accessible from different devices make Finance Best one of the most reachable application for users. You can access your information any time anywhere.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={reliable} className="rounded" width="140" height="140"/>
                        <h3>Reliable</h3>
                        <p>
                            With 24/7 runtime server, you can access your information on the appliation, any time anywhere with no downtimr
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-deck p-5 mt-5 text-center row bg-dark">
                <div className="col-12 p-5 text-white">
                    <h1>Become our member</h1>
                </div>
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Finance Best Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <h2>Try out</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Up to 1 business</li>
                                <li>1 GB of storage</li>
                                <li>Limited features</li>
                                <li>Traning access</li>
                                <li>Limited Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                Sign up for free
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Finance Best +</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0.99 <small class="text-muted">/ month</small></h1>
                            <h2>Try more features</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Up to 5 business</li>
                                <li>100 GB of storage</li>
                                <li>Unlimited features</li>
                                <li>Traning access</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Finance Best Pro</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$9.99 <small className="text-muted">/ year</small></h1>
                            <h2>Be a pro</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Up to 5 business</li>
                                <li>100 GB of storage</li>
                                <li>Unlimited features</li>
                                <li>Traning access</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-warning">
                            <h4 className="my-0 font-weight-normal">Finance Best Pro Max</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$49.99 <small className="text-muted">/ 5 years</small></h1>
                            <h2>Best Deal</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Unlimited business</li>
                                <li>Unlimited storage</li>
                                <li>Unlimited features</li>
                                <li>Traning access</li>
                                <li>Ultra Help center access</li>
                                <li>Up to $10 gift card</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-5 text-white">
                    <h4 className="my-0 font-weight-normal">Invite your friends to Finance Best and get up to 50% gift card for your new purchase</h4>
                </div>
            </div>
        </div>
    );
};
  
export default Home;