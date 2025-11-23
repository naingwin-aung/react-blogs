import { KeyRound, Mail } from "lucide-react";
import { login, loginWithProvider } from "../auth/authService.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Separator } from "@radix-ui/themes";
import SignInWithGoogle from "../components/Authentication/SIgnInWIthGoogle.jsx";
import Image from "../components/Image.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const submitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await login(credentials);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        setValidationErrors({
          email: errors.email[0] || [],
          password: errors.password[0] || [],
        });
        return;
      }

      if (error.response && error.response.status === 401) {
        setLoginErrorMessage("Invalid email or password.");
      } else {
        console.error("Login error:", error);
      }
    }
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      await loginWithProvider("google", tokenResponse.access_token);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGoogleError = () => {
    setLoginErrorMessage("Google Sign-In failed. Please try again.");
  };

  const signInWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
  });

  // const backgroundImageUrl =
  //   "https://i.pinimg.com/1200x/08/a5/c1/08a5c1057fc2e8e28c2f701f96c0138c.jpg";

  return (
    <div
      className="flex h-[calc(100vh-70px)] bg-gray-50"
      // style={{
      //   backgroundImage: `url('${backgroundImageUrl}')`, // 👈 Set the background image
      //   backgroundSize: "cover", // 👈 Ensure the image covers the entire area
      //   backgroundPosition: "center", // 👈 Center the image
      //   backgroundRepeat: "no-repeat", // 👈 Prevent image tiling
      // }}
    >
      <div className="hidden lg:block w-1/2 p-4 ps-8">
        <Image
          src="https://i.pinimg.com/1200x/40/32/90/403290a0edcee398d314a1e84ae9cb5d.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        {/* <div className=""> */}
        <div className="w-md p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl">
          <div className="mb-7 text-2xl font-semibold">
            Log in to your account
          </div>
          <div className="text-sm">
            {loginErrorMessage && (
              <div className="mb-4 text-red-600">{loginErrorMessage}</div>
            )}
          </div>
          <form onSubmit={submitLogin}>
            <div className="mb-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md p-3 focus-within:border-black">
                <Mail strokeWidth={1.5} />
                <input
                  className="w-full outline-none px-1"
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              {validationErrors.email && (
                <div className="text-red-600 text-sm mt-1.5">
                  {validationErrors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md p-3 focus-within:border-black">
                <KeyRound strokeWidth={1.5} />
                <input
                  className="w-full outline-none px-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              {validationErrors.password && (
                <div className="text-red-600 text-sm mt-1.5">
                  {validationErrors.password}
                </div>
              )}
            </div>
            <button className="w-full p-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity cursor-pointer">
              Sign in
            </button>
          </form>

          <Separator className="my-4" size="4" />

          <SignInWithGoogle
            signInWithGoogle={signInWithGoogle}
            text="Sign in with Google"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
