function Button({title,leftIcon,rightIcon,btnClicked,cssStyle}:any){
    return(
      <>
      {leftIcon?<p>Icon1</p>:null}
      <button className={cssStyle} onClick={btnClicked}>{title}</button>
      {rightIcon?<p>Icon2</p>:null}
      </>
    )
}
export default Button;