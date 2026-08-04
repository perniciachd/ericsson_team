import { NavLink } from "react-router";

function TypeList() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">Fund Types</h2>
            <p className="text-gray-500">Select a fund type to explore</p>

        <NavLink to="/dashboard/typeList" className={({ isActive }) => `px-4 py-2 rounded-lg transition font-medium ${isActive ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
            <button className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition font-medium">All</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Equity</button>  
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Debt</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Hybrid</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Index</button>
        </NavLink>
        </div>
    );
}
export default TypeList;