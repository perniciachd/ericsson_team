function Card() {
    return (
        <div className="bg-white rounded-xl p-5 shadow-md grid">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <data className="text-gray-500">Invested</data>
                <data className="text-black">₹ 1,80,000</data>
            </div>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <data className="text-gray-500">Current Value</data>
                <data className="text-black">₹ 2,13,984</data>
            </div>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <data className="text-gray-500">Profit</data>
                <data className="text-black">₹ 33,984</data>
            </div>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <data className="text-gray-500">Total Return</data>
                <data className="text-black">+18.88%</data>
            </div>
        </div>
    );
}
export default Card;