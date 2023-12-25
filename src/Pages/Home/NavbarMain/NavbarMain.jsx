import { NavLink } from "react-router-dom";
import img1 from '../../../assets/loooog.png'



const NavbarMain = () => {

    const myNavbar = <>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Courses</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Contact</NavLink>
    </>


    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {myNavbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={img1} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1 space-x-9">
                       {myNavbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#02d6f2] hover:bg-[#2ba5b5] text-white">Enroll Now</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarMain;