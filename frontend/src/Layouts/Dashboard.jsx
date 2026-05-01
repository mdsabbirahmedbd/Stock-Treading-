import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Watchlist from "../Components/DashboardComponents/WatchList/Watchlist";
import useAuth from "../Hooks/useAuth";

const Logo = "/images/logo.svg";
const founder = "/images/founder.png";

const Dashboard = () => {
  const {logout} = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Orders", path: "/dashboard/orders" },
    { name: "Holdings", path: "/dashboard/holdings" },
    { name: "Positions", path: "/dashboard/positions" },
    { name: "Funds", path: "/dashboard/funds" },
  ];

  return (
    <div className="min-h-screen">
      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col h-screen">
        {/* 🔹 Top Navbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-6 w-32" />
          </Link>
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* 🔹 Fullscreen Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6">
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3">
              {menu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700 hover:bg-blue-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}

        {/* 🔹 Scrollable Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Watchlist */}
          <div className="h-1/3 border-b bg-white overflow-y-auto">
            <Watchlist />
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex ">
        {/* LEFT */}
        <div className="w-1/3 border-r bg-white h-screen overflow-y-auto">
          <Watchlist />
        </div>

        {/* RIGHT */}
        <div className="w-2/3 bg-gray-100 h-screen overflow-y-auto  ">
          {/* Navbar */}
          <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
            <img src={Logo} alt="Logo" className="h-6 w-32" />
            </Link>

            {/* Menu */}
            <div className="flex gap-6">
              {menu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-600 hover:text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar cursor-pointer">
                <div className="w-9 rounded-full ring ring-gray-300 ring-offset-2">
                  <img src={founder} alt="profile" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-white rounded-box w-40"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logout} className="text-red-500">Logout</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
