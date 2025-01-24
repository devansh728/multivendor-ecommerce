// import Singleproduct from "./singleproduct";
// import {usestate,useeffect} from 'react';

// function Allprod() {
//     // const products = [
//     //     {
//     //         'title':'python'
//     //     },
//     //     {
//     //         'title':'django'
//     //     },
//     //     {
//     //         'title':'flask'
//     //     },
//     // ]
//     const [products, setproducts] = usestate([])
//     useeffect(() => {
//         fetchdata('http://127.0.0.1:8000/api/products/'); // api for the get request

//     });
//     function fetchdata(baseurl){
//         fetch(baseurl)
//         .then(response => response.json())
//         .then(data => setproducts(data.results));
//     }
//     return (
//         <>
//             <section className="container mt-6">
//                 <h3 className="mb-3 mt-16">Python Products</h3>
//                 <div className="row">
//                     {products.map((product) => <Singleproduct product={product} />)}
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Allprod;

//----------------------------------------------------------------------------------------------------------------------------------------------

// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import Singleproduct from "./singleproduct";

// function Allprod() {
//     const baseUrl = "http://127.0.0.1:8000/api";
//     const [products, setProducts] = useState([]);
//     const [page, setPage] = useState(0);

//     useEffect(() => {
//         fetchData(`${baseUrl}/products`); // API for the GET request
//     }, []); // Empty dependency array ensures it runs once

//     function fetchData(url) {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => {
//                 setProducts(data.results || []);
//                 setPage(Math.ceil(data.count / data.page_size)); // Calculate total pages
//             })
//             .catch((error) => console.error("Error fetching products:", error));
//     }

//     function changeUrl(url) {
//         fetchData(url);
//     }

//     const links = [];
//     for (let i = 1; i <= page; i++) {
//         links.push(
//             <li key={i} className="page-item">
//                 <Link
//                     className="page-link"
//                     onClick={() => changeUrl(`${baseUrl}/products/?page=${i}`)}
//                     to={`/products/?page=${i}`}
//                 >
//                     {i}
//                 </Link>
//             </li>
//         );
//     }

//     return (
// <>
//     <section className="container mt-6">
//         <h3 className="mb-3 mt-16">Python Products</h3>
//         <div className="row">
//             {products.map((product, index) => (
//                 <Singleproduct key={index} product={product} />
//             ))}
//         </div>
//         <nav aria-label="Page navigation example">
//             <ul className="pagination">
//                 {links}
//             </ul>
//         </nav>
//     </section>
// </>
//     );
// }

// export default Allprod;

//-------------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import Singleproduct from "./singleproduct";
// import Singleproduct from "./singleproduct";
// import { Link } from "react-router-dom";

const PaginatedProducts = () => {
    const [products, setProducts] = useState([]); // Store products
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages (calculated)
    const [loading, setLoading] = useState(false); // Loading state

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/?page=${page}`);
            const data = await response.json();
            setProducts(data.results); // Update products
            setTotalPages(Math.ceil(data.count / 2)); // Assuming 10 products per page
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
            <section className="container mt-6">
                <h3 className="mb-3 mt-16">Python Products</h3>
                <div className="row">
                    {products.map((product, index) => (
                        <Singleproduct key={index} product={product} />
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

export default PaginatedProducts;



