import { Menu, User } from "lucide-react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { logout } from "../auth/authService";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const logoutSubmit = () => {
    logout();
  }

  return (
    <div className="w-full h-14 md:h-18 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-medium">
        <Image src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span>Lamalog</span>
      </Link>
      {/* Mobile menu */}
      <div className="md:hidden z-50">
        <div
          className={`cursor-pointer transition duration-300 ease-in-out ${
            open ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>

        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col gap-10 items-center pt-25 fixed top-16 right-0 bg-white/10 backdrop-filter backdrop-blur-sm transition-all ease-in-out duration-200 select-none font-medium
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-blue-600/70 text-white cursor-pointer text-sm">
              Log in
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-sm">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        {
          isAuthenticated ? (
           <span className="cursor-pointer text-blue-600">
            Welcome, {user.name}
           </span>
          ) :
          <Link to="/login">
              <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-blue-400 to-blue-600 text-white cursor-pointer text-sm">
                Log in
              </button>
          </Link>
        }
        {
          isAuthenticated && user && (
            <button onClick={logoutSubmit} className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-red-400 to-red-600 text-white cursor-pointer text-sm">
              Logout
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
