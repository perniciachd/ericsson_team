type ButtonProps = {
  title: string;
  btnClicked: () => void;
  cssStyle?: string;
};

function Button({title,btnClicked,cssStyle}: ButtonProps){
    return(
<>
        <button className={cssStyle} onClick={btnClicked}>{title}</button>
         
</>
    )
}
export default Button;

