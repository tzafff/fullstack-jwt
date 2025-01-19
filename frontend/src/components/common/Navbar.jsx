import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import UsersService from "../service/UsersService";

function Navbar() {

    const navigate = useNavigate();
    const isAuthenticated = UsersService.isAuthenticated();
    const isAdmin = UsersService.isAdmin();

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to logout?");
        if(confirmDelete) {
            UsersService.logout();
            navigate("/")
            window.location.reload();
        }
    };

    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">CTZAF Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    )
}

export default Navbar
