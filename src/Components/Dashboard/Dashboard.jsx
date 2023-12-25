import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";





const Dashboard = () => {
    // const { user } = useAuth();
    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to=""> Admin Home</NavLink></li>
                            <li><NavLink to=""> Add Task</NavLink></li>
                            <li><NavLink to=""> Payment History</NavLink></li>
                            <li><NavLink to=""> Manage Item</NavLink></li>
                            <li><NavLink to=""> Manage Booking</NavLink></li>
                            <li><NavLink to=""> Payment Real History</NavLink></li>
                            <li><NavLink to=""> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userH"> User Home</NavLink></li>
                                <li><NavLink to=""> Add Task</NavLink></li>
                                <li><NavLink to=""> Add Review</NavLink></li>
                                <li><NavLink to=""> Payment Real History</NavLink></li>
                            </>
                    }
                    {/* <li><NavLink to="/dashboard/booking"><FaCalendarAlt></FaCalendarAlt> My Booking</NavLink></li> */}
                    <div className="divider"></div>
                    <li><NavLink to="/"> Home</NavLink></li>
                    <li><NavLink to=""> Menu</NavLink></li>
                    <li><NavLink to=""> Shop</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;