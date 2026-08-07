import "../molecular/header.css";

type ButtonProps = { title: string; leftIcon?: string; rightIcon?: string; btnClicked?: () => void; cssStyle?: string };

function Button({ title, leftIcon, rightIcon, btnClicked, cssStyle }: ButtonProps) {
    return (
		<>
			<button className={cssStyle} onClick={btnClicked}>
				{leftIcon ? <span>{leftIcon}</span> : null} {title} {rightIcon ? <span>{rightIcon}</span> : null}
			</button>
		</>
    );
}
export default Button;
