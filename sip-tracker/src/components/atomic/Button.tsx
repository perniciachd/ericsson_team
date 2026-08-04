interface ButtonProps {
    title: string;
    btnClicked?: () => void;
    cssStyle?: string;
}

function Button({title, btnClicked, cssStyle}: ButtonProps){
    return(
        <button className={cssStyle || "px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition font-medium"} onClick={btnClicked}>{title}</button>
    )
}
export default Button;