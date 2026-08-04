function Portfolio() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">My Portfolio</h2>
            <p className="text-gray-500">Your active SIP investments</p>
            <div className="mt-4 grid gap-4">
                <div className="bg-white rounded-xl p-5 shadow-md flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Parag Parikhi Flexi Cap</h3>
                        <p className="text-sm text-gray-500">SIP: ₹5,000/month</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-green-600">+₹12,500</p>
                        <p className="text-sm text-gray-500">Invested: ₹60,000</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Nippon India Small Cap</h3>
                        <p className="text-sm text-gray-500">SIP: ₹3,000/month</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-green-600">+₹8,200</p>
                        <p className="text-sm text-gray-500">Invested: ₹36,000</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">UTI Nifty 50 Index</h3>
                        <p className="text-sm text-gray-500">SIP: ₹2,000/month</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-red-500">-₹1,200</p>
                        <p className="text-sm text-gray-500">Invested: ₹24,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
