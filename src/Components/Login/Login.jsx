/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";





const Login = () => {
    const { signInUs } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUs(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        navigate(from, { replace: true });
    }

    return (
        <div className="bg-[#FAFBFD] py-12">
            <div className="bg-white w-[30rem] mx-auto p-8">
                <h2 className="text-center text-4xl text-[#019FF8]">Let's Get Started</h2>
                <p className="text-center">Sign in to continue to EduLearn.</p>
                <form onSubmit={handleLogin}>
                    <div className="form-control mt-8">
                        <input type="text" name="email" placeholder="Username" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-8">
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <button className="bg-[#019FF8] w-full mt-8 text-white py-2">Sign In</button>
                </form>
                <div>
                    <p className="text-center mt-2">Don't have an account? <span className="text-[#FF8F00]">Register</span></p>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <div className="text-center">- Login With -</div>
                <div className="join mt-2 space-x-4 pt-2">
                    <button className="btn rounded-full bg-[#2D4373] text-white"><FaFacebookF></FaFacebookF></button>
                    <button className="btn rounded-full bg-[#019FF8] text-white"><FaTwitter></FaTwitter></button>
                    <button className="btn rounded-full bg-[#C21C54] text-white"><FaInstagram></FaInstagram></button>
                </div>
            </div>
        </div>
    );
};

export default Login;