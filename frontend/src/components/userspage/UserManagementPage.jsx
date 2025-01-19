import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import UsersService from "../service/UsersService";

function UserManagementPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data when the component mounts
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try{
            const token = localStorage.getItem('token')
            const res = await UsersService.getAllUsers(token);
            setUsers(res.ourUsersList)
        } catch (error) {
            console.log("Error fetching users:", error);
        }
    }

    const deleteUser = async (userId) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');
            if(confirmDelete){
                const token = localStorage.getItem('token');
                await UsersService.deleteUser(userId, token);
                await fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    return (
        <div className="user-management-container">
            <h2>Users Management Page</h2>
            <button className='reg-button'> <Link to="/register">Add User</Link></button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='delete-button' onClick={() => deleteUser(user.id)}>Delete</button>
                            <button><Link to={`/update-user/${user.id}`}>
                                Update
                            </Link>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserManagementPage
