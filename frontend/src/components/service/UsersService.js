import axios from "axios"

class UsersService {
    static BASE_URL = "http://localhost:8080"

    static async login(email, password) {
        try {
            const response = await axios.post(`${UsersService.BASE_URL}/auth/login`, {email, password})
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async register(userData, token) {
        try {
            const response = await axios.post(`${UsersService.BASE_URL}/auth/register`, userData, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async getAllUsers(token) {
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/admin/get-all-users`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async getYourProfile(token) {
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/adminuser/get-profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async getUserById(userId, token) {
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/admin/get-users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async deleteUser(userId, token) {
        try {
            const response = await axios.delete(`${UsersService.BASE_URL}/admin/delete/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    static async updateUser(userId, userData, token) {
        try {
            const response = await axios.update(`${UsersService.BASE_URL}/admin/update/${userId}`, userData, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return response.data;
        } catch (e) {
            throw e;
        }
    }

    /** Authentication Checker */

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token; // If token has value it will return true, if it doesn't it will return false
    }

    static isAdmin() {
        const role = localStorage.getItem('role');
        return role === 'ADMIN'
    }

    static isUser() {
        const role = localStorage.getItem('token');
        return role === 'USER'
    }

    static adminOnly() {
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UsersService;