import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <section class="bg-light">
            <div class="container-fluid">
                <div class="row">
                    
                    <div class="col-md-3 col-lg-2 bg-white border-end vh-100">
                        <h4 class="text-primary p-3">Dashboard</h4>
                        <nav class="nav flex-column px-3">
                            <a class="nav-link active bg-primary text-white rounded mb-2" href="#">Dashboard</a>
                            <Link class="nav-link text-dark rounded mb-2" to="/orders">Orders</Link>
                            <a class="nav-link text-dark rounded mb-2" href="#">Wishlist</a>
                            <a class="nav-link text-dark rounded mb-2" href="#">Profile</a>
                            <a class="nav-link text-dark rounded mb-2" href="#">Addresses</a>
                        </nav>
                    </div>

                    
                    <div class="col-md-9 col-lg-10 p-4">
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">Total Orders</h5>
                                        <a href="#" class="text-primary text-decoration-none fs-4 fw-bold">123</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">Total Wishlist</h5>
                                        <a href="#" class="text-primary text-decoration-none fs-4 fw-bold">123</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">Total Addresses</h5>
                                        <a href="#" class="text-primary text-decoration-none fs-4 fw-bold">5</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}
export default Dashboard;