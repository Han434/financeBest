const Contact = () => {
    return (
        <div className="container-fluid">
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis">Contact Us</h1>
            </div>
            <div class="container col-xl-10 col-xxl-8 p-5 bg-dark rounded my-5">
                <div class="row align-items-center g-lg-5 py-5">
                    <div class="col-lg-6 text-center text-lg-start text-white">
                        <h1 class="display-4 fw-bold text-white mb-3">Get in touch</h1>
                        <p class="col-lg-10 fs-4">Our team will reply withou 24 hours. Feel free to contact us on phone.</p>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-6">
                        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <h2>Fill the following form</h2>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="title" placeholder="Title"/>
                                <label for="title">Title</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" placeholder="Message">

                                </textarea>
                                <label for="meassage">Meassage</label>
                            </div>
                            <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Contact;