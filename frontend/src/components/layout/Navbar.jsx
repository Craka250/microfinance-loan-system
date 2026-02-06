import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg capitalize">
        {user?.role || "User"} Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user?.name}
        </span>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
