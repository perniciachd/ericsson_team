import ExploreFunds from "../components/ExploreFunds";
import Header from "../components/Header";

function Home({parentCall}:any) {
  const userName = localStorage.getItem("userName") || "User";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("passWord");
    window.location.href = "/"; // or use navigate("/") if using React Router
    parentCall();
  };

  return (
    <>
      <Header userName={userName} onLogout={handleLogout} />
      <ExploreFunds/>
    </>
  );
}

export default Home;