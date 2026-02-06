
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { SIDEBAR_LINKS } from "../../utils/constants";

export default function Sidebar() {
  const { user } = useAuth();

  const links = SIDEBAR_LINKS[user?.role] || [];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-8">MicroFinance</h2>

      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
