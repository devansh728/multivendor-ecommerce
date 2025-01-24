import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Homepage() {
    return (
        <main class="mt-5">
            <div class="container">
                <h3 class="mb-3">Latest products <Link to="/allproducts" class="float-end btn btn-dark ">View all products</Link></h3>
                <div class="row">
                    <div class="col-12 col-md-3 mb-4">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-4">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-4">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-4">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                
                
            </div>
            <div class="container">
                <h3 class="mb-3 mt-6">Popular categories <a href="/" class="float-end btn btn-dark ">View all products</a></h3>
                <div class="row">
                    <div class="col-12 col-md-3 mb-2">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container">
                <h3 class="mb-3 mt-6">Popular Projects <a href="/" class="float-end btn btn-dark ">View all products</a></h3>
                <div class="row">
                    <div class="col-12 col-md-3 mb-2">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">title</h5>
                                <h6 class="card-title">price:</h6>
                                <p class="card-text">DEscription.</p>
                            </div>
                            <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container">
                <h3 class="mb-3 mt-6">Popular sellers <a href="/" class="float-end btn btn-dark ">View all products</a></h3>
                <div class="row">
                    <div class="col-12 col-md-3 mb-2">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Seller name</h5>
                            </div>
                            <div class="card-footer">
                                <p>Categories:<a href="/"> Python , </a><a href="/">Java</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* ratings and reviews caraousel */}
            <div id="carouselExampleRide" class="carousel slide my-6 border bg-dark text-white p-5" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* ratings and reviews caraousel  end */}

        </main >
    )
}

export default Homepage;