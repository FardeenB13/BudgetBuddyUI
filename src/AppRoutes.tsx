// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Login from './components/authorization/Login';
import Signup from './components/authorization/SignUp';
import Dashboard from './components/Dashboard';
import Welcome from "./components/Welcome";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
);

export default AppRoutes;
