type Props = {
    frequency: string;
};

function Frequency({ frequency }: Props) {
    return (
        <span className="text-sm text-gray-500">
            /{frequency}
        </span>
    );
}

export default Frequency;