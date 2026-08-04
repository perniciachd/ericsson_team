import IconButton from '../atomic/IconButton';
import LogoutButton from '../atomic/LogoutButton';

function Header({ userName, onLogout }: { userName: string; onLogout: () => void }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">
        Welcome, {userName}
      </h1>
      <div className="flex items-center gap-3">
        <LogoutButton onLogout={onLogout} />
      </div>
    </div>
  );
}

export default Header;