function Orders() {
    return (
        <section class="bg-light">
            <div class="container my-4">
                <h2 class="mb-4 text-center">Orders Table</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src="https://via.placeholder.com/40" class="rounded me-2" alt="Django"/>
                                        <a href="#" class="text-decoration-none">Django</a>
                                </td>
                                <td>Rs. 500</td>
                                <td class="text-success">
                                    <i class="fas fa-check-circle"></i> Completed
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm">
                                        <i class="fas fa-download"></i> Download
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <img src="https://via.placeholder.com/40" class="rounded me-2" alt="Flask"/>
                                        <a href="#" class="text-decoration-none">Flask</a>
                                </td>
                                <td>Rs. 500</td>
                                <td class="text-success">
                                    <i class="fas fa-check-circle"></i> Completed
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm">
                                        <i class="fas fa-download"></i> Download
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <img src="https://via.placeholder.com/40" class="rounded me-2" alt="Python"/>
                                        <a href="#" class="text-decoration-none">Python</a>
                                </td>
                                <td>Rs. 500</td>
                                <td class="text-warning">
                                    <i class="fas fa-spinner"></i> Processing
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <img src="https://via.placeholder.com/40" class="rounded me-2" alt="ReactJs"/>
                                        <a href="#" class="text-decoration-none">ReactJs</a>
                                </td>
                                <td>Rs. 500</td>
                                <td class="text-danger">
                                    <i class="fas fa-times-circle"></i> Cancelled
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </section>
    )
}
export default Orders;