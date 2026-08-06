function Logout(){
  const logoutClick = ()=> {
    console.log("logout called");
  };

  return (
    <button onClick={logoutClick}>Logout</button>
  );   
}

export default Logout;