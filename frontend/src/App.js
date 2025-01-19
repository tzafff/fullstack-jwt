import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import UserService from "./components/service/UsersService";
import FooterComponent from "./components/common/Footer";
import UpdateUser from "./components/userspage/UpdateUser";
import UserManagementPage from "./components/userspage/UserManagementPage";
import RegistrationPage from "./components/auth/RegistrationPage";
import LoginPage from "./components/auth/LoginPage";
import ProfilePage from "./components/userspage/ProfilePage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<LoginPage />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        {/* Check if user is authenticated and admin before rendering admin-only routes */}
                        {UserService.adminOnly() && (
                            <>
                                <Route path="/register" element={<RegistrationPage />} />
                                <Route path="/admin/user-management" element={<UserManagementPage />} />
                                <Route path="/update-user/:userId" element={<UpdateUser />} />
                            </>
                        )}
                        <Route path="*" element={<Navigate to="/login" />} />‰
                    </Routes>
                </div>
                <FooterComponent />
            </div>
        </BrowserRouter>
    );
}

export default App;