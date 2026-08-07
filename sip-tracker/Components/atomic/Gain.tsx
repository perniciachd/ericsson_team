type Props = {
    gain: number;
};

function Gain({ gain }: Props) {
    return (
        <p className="text-sm text-green-600">
            +{gain.toFixed(1)}%
        </p>
    );
}

export default Gain;