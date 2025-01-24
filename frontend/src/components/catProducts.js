import React, { useState, useEffect } from "react";
import Singleproduct from "./singleproduct";
import { useParams } from "react-router-dom";
// import Singleproduct from "./singleproduct";
// import { Link } from "react-router-dom";

const CatProducts = () => {
    const [products, setProducts] = useState([]); // Store products
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages (calculated)
    const [loading, setLoading] = useState(false); // Loading state
    const { category_slug, category_id } = useParams();
    // let category_id = useParams()

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/?category=${category_id}&page=${page}`);
            const data = await response.json();
            setProducts(data.results); // Update products
            setTotalPages(Math.ceil(data.count / 1)); // Assuming 10 products per page
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(currentPage); // Fetch products when page changes
    }, [category_id, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <>
            <section className="container mt-6">
                <h3 className="mb-3 mt-16">{`${category_slug} Products`}</h3>
                <div className="row">
                    {products.map((product, index) => (
                        <Singleproduct key={index} product={product} />
                    ))}
                </div>
                <div className="pagination mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="btn btn-secondary me-2"
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="btn btn-secondary ms-2"
                    >
                        Next
                    </button>
                </div>
            </section>
        </>

        // <div>
        //   <h1>Products</h1>
        //   {loading ? (
        //     <p>Loading...</p>
        //   ) : (
        //     <ul>
        //       {products.map((product) => (
        //         <li key={product.id}>
        //           {product.title} - ${product.price}
        //         </li>
        //       ))}
        //     </ul>
        //   )}
        //   <div>
        //     <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        //       Previous
        //     </button>
        //     <span>
        //       Page {currentPage} of {totalPages}
        //     </span>
        //     <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        //       Next
        //     </button>
        //   </div>
        // </div>
    );
};

export default CatProducts;




