import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/login-bg.png";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username, password };
        axiosInstance
            .post("/diver/login", data)
            .then((response) => {
                const token = response.data.jwt_token;
                const username = response.data.data.username;
                const email = response.data.data.email;
                localStorage.setItem("Token", token);
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                navigate("/admin/posts");
                setUsername("");
                setPassword("");
                toast.success("Successfully signed in!");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Username or password incorrect!");
            });
    };
    return (
        <div className="h-screen">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="gap-6 overflow-hidden bg-white md:grid md:grid-cols-5">
                <div className="col-span-3">
                    <img src={loginImage} className="hidden h-screen w-full object-cover md:block" alt="" />
                </div>

                <div className="col-span-2 flex flex-col justify-center px-8 py-12">
                    <div className="mx-auto">
                        <img src={logo} width="100px" className="mb-8" alt="Logo" />
                        <h1 className="mb-2 text-xl font-bold text-gray1">Please sign in</h1>
                    </div>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                required
                            />
                        </div>
                        <div className="mb-12">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-primary px-4 py-2 font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:border-primary2 hover:bg-primary2 hover:text-white">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
