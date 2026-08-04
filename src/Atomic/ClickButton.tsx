function ClickButton({parentCall}:any){
    const handleLogout = ()=>{
        parentCall();
    }
    return(
        <>
        <p>ClickButton</p>
        <button onClick={handleLogout}>LogOut</button>
        </>
    )
}
export default ClickButton;