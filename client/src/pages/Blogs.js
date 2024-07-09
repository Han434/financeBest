import "bootstrap/dist/css/bootstrap.min.css";
import myImage from "../images/test.png";
const Blogs = () => {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <h1>Blogs by developers</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div class="card my-3">
                        <img src={myImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="card my-3">
                        <img src={myImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Blogs;