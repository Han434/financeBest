import "bootstrap/dist/css/bootstrap.min.css";
import myImage from "../images/bg.png";

const Home = () => {
    return (
        <div className="container">

            {/* Center Text */}
            <div className="px-4 py-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">What is Finance Best?</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Free accounting web application that is acccesible on your mobile phone, tablet, laptop or any device. With easily accessible training and support from the expect in person or online.
                        Get your work acccesible, free and systematic.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg me-sm-3 mb-4">Sign Up For Free</button>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "40vh"}}>
                    <div className="container px-5">
                        <img src={myImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>

            {/* Statistic Carousel */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Reason to use Finance Best */}
            <div className="p-5 bg-light rounded">
                <h2 className="fw-bold text-center mb-5">Why FinanceBest?</h2>
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                        <h3>Heading</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                        <h3>Heading</h3>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                        <h3>Heading</h3>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="card-deck my-5 py-5 text-center row">
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                            <h2>Try out</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>1 business</li>
                                <li>2 GB of storage</li>
                                <li>Traning access</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">VIP</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$1 <small class="text-muted">/ mo</small></h1>
                            <h2>Be a pro</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Up to 5 business</li>
                                <li>10 GB of storage</li>
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
                            <h4 className="my-0 font-weight-normal">VVIP</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$10 <small class="text-muted">/ year</small></h1>
                            <h2>Best Deal</h2>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Up to 10 business</li>
                                <li>Unlimited storage</li>
                                <li>Traning access</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Home;