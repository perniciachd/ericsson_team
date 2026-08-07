type Props = {
    amount: number;
};

function SipAmount({ amount }: Props) {
    return (
        <span className="text-sm text-gray-500">
            ₹{amount.toLocaleString()}
        </span>
    );
}

export default SipAmount;