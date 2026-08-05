function Home({parentCall}:any){
    const handleLogout = ()=>{
        parentCall();
    }
    return(
        <>
        <p>Home</p>
        <button onClick={handleLogout}>LogOut</button>
        </>
    )
}
export default Home;