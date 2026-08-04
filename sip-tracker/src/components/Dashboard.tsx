import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router';
import Header from "./molecular/Header";

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/dashboard') {
            navigate('/dashboard/funds', { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <div className="min-h-screen p-30 w-full max-w-5xl mx-auto">
            <Header />  
            <div className="flex gap-3 mt-4">
              <NavLink to="/dashboard/funds" className={({ isActive }) => `px-4 py-2 rounded-lg transition font-medium ${isActive ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
                Explore Funds
              </NavLink>
              <NavLink to="/dashboard/portfolio" className={({ isActive }) => `px-4 py-2 rounded-lg transition font-medium ${isActive ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
                My Portfolio
              </NavLink>
            </div>
            <Outlet />
        </div>
    );
    
}

export default Dashboard;