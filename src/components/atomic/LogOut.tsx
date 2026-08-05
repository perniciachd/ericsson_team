function Logout() {
    const logout = () => {
        console.log("Logout clicked");
    };

    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Logout;