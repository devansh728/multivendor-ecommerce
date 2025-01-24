function Checkout() {
    return (
        <section className="container mt-6">


            <h2 class="mb-4 text-center">My Cart</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Product 1</td>
                            <td>$10</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Product 2</td>
                            <td>$15</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Product 3</td>
                            <td>$20</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" class="text-end fw-bold">Total</td>
                            <td colspan="2" class="text-start fw-bold">$85</td>
                        </tr>
                    </tfoot>
                </table>
            </div>




        </section>
    )
}

export default Checkout;