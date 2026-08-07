type Props = {
    value: number;
};

function CurrentValue({ value }: Props) {
    return (
        <h2 className="text-3xl font-bold text-slate-900">
            ₹{value.toLocaleString()}
        </h2>
    );
}

export default CurrentValue;