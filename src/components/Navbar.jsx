import { Menu, User } from "lucide-react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { loginWithProvider, logout } from "../auth/authService";
import { Dialog } from "@radix-ui/themes";
import { useGoogleLogin } from "@react-oauth/google";
import SignInWithGoogle from "./Authentication/SIgnInWIthGoogle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    setOpen(false);
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      await loginWithProvider("google", tokenResponse.access_token);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Sign-In failed. Please try again.");
  };

  const signInWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
  });

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
          {isAuthenticated ? (
            <span className="cursor-pointer text-blue-600">
              Welcome, {user.name}
            </span>
          ) : (
            <Link to="/login">
              <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-blue-400 to-blue-600 text-white cursor-pointer text-sm">
                Log in
              </button>
            </Link>
          )}
          {isAuthenticated && user && (
            <button
              onClick={logoutSubmit}
              className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-red-400 to-red-600 text-white cursor-pointer text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 font-medium text-sm">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        {isAuthenticated ? (
          <span className="cursor-pointer text-blue-600">
            Welcome, {user.name}
          </span>
        ) : (
          // <Link to="/login">
          //   <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-blue-400 to-blue-600 text-white cursor-pointer text-sm">
          //     Log in
          //   </button>
          // </Link>
          <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <Dialog.Trigger>
              <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-blue-400 to-blue-600 text-white cursor-pointer text-sm">
                Log in
              </button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="390px">
              <Dialog.Title>
                <div className="flex justify-between items-center font-semibold text-2xl mb-7">
                  Login or sign up
                </div>
              </Dialog.Title>
              <Dialog.Description size="2" mb="4">
                <SignInWithGoogle
                  signInWithGoogle={signInWithGoogle}
                  text="Sign in with Google"
                />
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Root>
        )}
        {isAuthenticated && user && (
          <button
            onClick={logoutSubmit}
            className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-red-400 to-red-600 text-white cursor-pointer text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
