// import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Provider/AuthProvider";

const NavbarTop = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("Find Name", user);

    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
        <div className="border-b p-4">
            {/* <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="space-x-6">
                        <a className="border-r pr-4" href="#">Ask a Question</a>
                        <a className="border-r pr-4" href="#">info.eduLearn.com</a>
                        <a href="#">8801789825572</a>
                    </div>
                    <div className="space-x-6">
                        {
                            user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className="w-10" alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between font-bold">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li><button className="font-bold">Dashboard</button></li>
                                        <li><button onClick={handleLogout} className="font-bold">Logout</button></li>
                                    </ul>
                                </div>
                            </> :
                                <>
                                    <Link to="register">
                                        <a href="#" className="font-bold border-r pr-4">Register</a>
                                    </Link>
                                    <Link to="login">
                                        <a href="#" className="font-bold">Login</a>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;
