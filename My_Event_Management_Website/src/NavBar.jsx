import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
    const location = useLocation();
    const { user, loading, logOut } = useContext(AuthContext);
    if (loading) {
        return;
    }
    // console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    // console.log(user);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/request"><small>Request for proposal</small></NavLink></li>
        <li><NavLink to="/Q&A">FAQ</NavLink></li>
    </>
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {location.pathname!="/login" ? (
                        user ? 
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <span>{user.displayName}</span>
                                <button onClick={handleLogOut} className="btn z">
                                    Sign Out
                                </button>
                            </>
                         : 
                            <Link to="/login">
                                <button className="btn z">Log In</button>
                            </Link>
                        
                    ) : null}
                </div>

            </div>
        </div>
    );
};

export default NavBar;