/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log("My Data is", loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/taskUser', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            console.log("User Info", userInfo);
                    })
            })
    }

    return (
        <div className="bg-[#FAFBFD] py-12">
            <div className="bg-white w-[30rem] mx-auto p-8">
                <h2 className="text-center text-4xl text-[#019FF8]">Get started with Us</h2>
                <p className="text-center">Register a New Membership</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mt-8">
                        {errors.name && <span className="text-red-600">This field is required Name</span>}
                        <input type="text" {...register("name", {
                            required: true
                        })} placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-8">
                        {errors.email && <span className="text-red-600">This field is required Name</span>}
                        <input type="email" {...register("email", {
                            required: true
                        })} placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-8">
                        {errors.photoURL && <span className="text-red-600">This field is required Name</span>}
                        <input type="text" {...register("photoURL", {
                            required: true
                        })} placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-8">
                        {errors.password && <span className="text-red-600">This field is required Name</span>}
                        <input type="password" {...register("password", {
                            required: true, minLength: 6, maxLength: 20
                        })} placeholder="Password" className="input input-bordered" required />
                    </div>
                    <button className="bg-[#019FF8] w-full mt-8 text-white py-2">Register</button>
                </form>
                <div>
                    <p className="text-center mt-2">Already have an account? <span className="text-[#FF8F00]">Login</span></p>
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

export default Register;