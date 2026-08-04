import {useNavigate, Outlet } from 'react-router';
import { useDarkMode } from '../context/DarkModeContext';
import { useState } from 'react';


function Login({ onLogin }: { onLogin?: () => void }) {
const { darkMode, toggleDarkMode } = useDarkMode();
const env_username = import.meta.env.VITE_USERNAME;
const env_password = import.meta.env.VITE_PASSWORD;
const navigate = useNavigate();
const [error, setError] = useState('');
const handleLogin = () => {
    console.log('Login button clicked');
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (username === env_username && password === env_password) {
        onLogin?.();
        navigate('/dashboard');
    }
    else{
        setError('Invalid username or password');
    }
  }
    return (
        <>
        <div className={`min-h-screen flex items-center justify-center p-5 ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}>
            <div className={`rounded-2xl p-12 w-full max-w-md shadow-2xl ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                     {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    <span role="img" aria-label="stock up">📈</span> SIP Tracker
                </h2>
                <p className={`text-sm text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Sign in to your SIP Tracker account
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="username" className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
                        <input id="username" type="text" placeholder="Enter your username" 
                            className={`px-4 py-3 rounded-lg border outline-none transition ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-500 focus:border-indigo-400' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'}`} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                        <input id="password" type="password" placeholder="Enter your password" 
                            className={`px-4 py-3 rounded-lg border outline-none transition ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-500 focus:border-indigo-400' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'}`} />
                    </div>
                    <button className="mt-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all" onClick={handleLogin}>
                        Login
                    </button>
                </div>
                <div className="mt-6 flex justify-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-600 rounded-full transition-colors"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
                        <span className={`ml-3 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
                     </label>
                </div>
            </div>
        </div>
        <Outlet />
        </>
        
    )
    
}
export default Login;