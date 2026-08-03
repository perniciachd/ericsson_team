
import Dark from "../dark/Dark";
import Logout from "../LogOut/Logout";

function Header({ darkMode, setDarkMode }: any) {

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="flex justify-between items-center bg-blue-700 text-white px-6 py-4">

      <h1 className="text-2xl font-bold">
        Wealth Management
      </h1>

      <div className="flex items-center gap-4">

        <h2 className="font-semibold">
          Welcome, {user.name}
        </h2>

        <Dark
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Logout />

      </div>

    </header>
  );
}

export default Header;