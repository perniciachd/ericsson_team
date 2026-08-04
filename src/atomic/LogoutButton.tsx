function LogoutButton({ onLogout }:  { onLogout: () => void }) {
  return (
    <button
      onClick={onLogout}
      className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}

export default LogoutButton;