type Props = {
    installments: number;
};

function InstallmentPaid({ installments }: Props) {
    return (
        <span className="text-sm text-gray-500">
            {installments} paid
        </span>
    );
}

export default InstallmentPaid;