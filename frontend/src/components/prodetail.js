import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Singleproduct from "./singleproduct";
import logo from '../logo.svg';
function Productsdetail() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(false); // Loading state
    const { product_slug, product_id } = useParams();

    const fetchProductdetail = async (product_id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/product/${product_id}`);
            const data = await response.json();
            setProducts(data); // Update products
            // setTotalPages(Math.ceil(data.count / 1)); // Assuming 10 products per page
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductdetail(product_id); // Fetch products when page changes
    }, [product_id]);


    return (
        <>
            <section class="container mt-6">

                <div class="container">
                    <div class="product-card d-flex">

                        <div class="product-image">
                            {products.product && products.product.length > 0 ? (
                                products.product.map((imgPath, index) => (
                                    <img
                                        key={index}
                                        src={`http://127.0.0.1:8000/api${imgPath}`} // Construct full image URL
                                        alt={`${products.title} - Image ${index + 1}`}
                                        class="img-fluid"
                                    />
                                ))
                            ) : (
                                <p>No Image Available</p>
                            )}
                        </div>


                        <div class="product-content">
                            <h2 class="product-title">{products.title}</h2>
                            <p>
                                {products.description}
                            </p>
                            <p class="product-price">Price: Rs. {products.price}</p>


                            <div class="btn-group">
                                <button class="btn btn-dark"><i class="fas fa-tv"></i> Demo</button>
                                <button class="btn btn-primary"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                                <button class="btn btn-success"><i class="fas fa-bolt"></i> Buy Now</button>
                                <button class="btn btn-danger"><i class="fas fa-heart"></i> Wishlist</button>
                            </div>


                            <div class="tags mt-3">
                                <span>python</span>
                                <span>django</span>
                                <span>web scripts</span>
                                <span>python</span>
                                <span>django</span>
                                <span>web scripts</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5 mb-3">Related Products</h3>
                    <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        {/* Carousel Indicators */}
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#relatedProductsSlider"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1">
                            </button>
                            <button
                                type="button"
                                data-bs-target="#relatedProductsSlider"
                                data-bs-slide-to="1"
                                aria-label="Slide 2">
                            </button>
                            {/* Add more indicators if needed */}
                        </div>

                        {/* Carousel Inner */}
                        <div className="carousel-inner">
                            {/* First Slide */}
                            <div className="carousel-item active">
                                <div className="row mb-5">
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    {/* {relatedProducts.slice(0, 3).map((product, index) => (
                                        <SingleProduct key={index} product={product} />
                                    ))} */}
                                </div>
                            </div>

                            {/* Second Slide */}
                            <div className="carousel-item">
                                <div className="row mb-5">
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    <Singleproduct product={products} />
                                    {/* {relatedProducts.slice(3, 6).map((product, index) => (
                                        <SingleProduct key={index} product={product} />
                                    ))} */}
                                </div>
                            </div>
                            {/* Add more slides if needed */}
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#relatedProductsSlider"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#relatedProductsSlider"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Productsdetail;