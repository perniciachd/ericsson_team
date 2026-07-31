function SignUp({isUserLoggedIn, updateFlag}:any){
    const signup = ()=>{
        console.log('Signup working');
        updateFlag();
    }
    return(
        <>
            <p>SignUp</p>
            <p>{JSON.stringify(isUserLoggedIn)}</p>
            <button onClick={signup}>Signup</button>
        </>
    )
}
export default SignUp;