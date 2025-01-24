import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from '../logo.svg';
function Categories() {
    const [categories, setCategories] = useState([]); // Store products
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages (calculated)
    const [loading, setLoading] = useState(false); // Loading state

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/categories/?page=${page}`);
            const data = await response.json();
            setCategories(data.results); // Update products
            setTotalPages(Math.ceil(data.count / 1)); // Assuming 10 products per page
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(currentPage); // Fetch products when page changes
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };
    return (
        <>
            <section class="container mt-6">

                <h3 class="mb-3 mt-16">All categories</h3>
                <div class="row">
                    <div class="col-12 col-md-3 mb-2">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {categories.map((category, index) => (
                                    <>
                                        <h5 class="card-title">{category.title}</h5>
                                        <Link className="nav-link text-black active" aria-current="page" to={`/Category/${category.title}/${category.id}`}>Explore Products</Link>
                                        <p class="card-text">{category.description}</p>
                                    </>
                                ))}

                            </div>
                            <div>
                                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                                    Previous
                                </button>
                                <span>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    Next
                                </button>
                            </div>
                            {/* <div class="card-footer">
                                <button title="add to cart" class="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                                <button title="add to wishlist" class="btn btn-danger btn-sm ms-2"><i class="fa-solid fa-heart"></i></button>
                            </div> */}
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories;