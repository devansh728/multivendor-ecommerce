import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Singleproduct(props) {
    return (
        <>

            <div className="col-12 col-md-3 mb-4">
                <Link to={`/Product/${props.product.title}/${props.product.id}`} className="text-decoration-none text-dark">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="Product Logo" />
                        <div className="card-body">
                            <h5 className="card-title">{props.product.title}</h5>
                            <h6 className="card-title">Price: {props.product.price}</h6>
                            <p className="card-text">Description.</p>
                        </div>
                        <div className="card-footer">
                            <button title="Add to Cart" className="btn btn-success btn-sm">
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                            <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2">
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
}

export default Singleproduct;
