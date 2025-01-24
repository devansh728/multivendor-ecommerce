import { useState } from "react";

function Login() {
    const [loginformdata, setLoginformdata] = useState({
        username: '',
        password: ''
    });

    const inputhandler = (event) => {
        setLoginformdata({
            ...loginformdata,
            [event.target.name]: event.target.value
        });
    };

    const submithandler = (event) => {
        const formData = new FormData(); // Correct capitalization
        formData.append("username", loginformdata.username); // Append key-value pairs
        formData.append("password", loginformdata.password);
        console.log(formData)
        // Example: Log formData values to console (for testing purposes)
        // for (let pair of formData.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]); // Logs each key-value pair
        // }

        // You can send the formData to an API using fetch or axios
        // Example:
        // fetch('/api/login', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        // .then(data => console.log(data));
    };

    console.log(loginformdata); // Logs the current state after every change

    return (
        <div className="container mt-5"> {/* Updated to use className */}
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="loginUsername" className="form-label"> {/* Updated to use htmlFor */}
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                className="form-control" // Updated to use className
                                id="loginUsername"
                                value={loginformdata.username}
                                onChange={inputhandler}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label"> {/* Updated to use htmlFor */}
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="form-control" // Updated to use className
                                id="loginPassword"
                                value={loginformdata.password}
                                onChange={inputhandler}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={submithandler}
                            className="btn btn-primary w-100" // Updated to use className
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
