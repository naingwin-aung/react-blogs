import { KeyRound, Mail } from "lucide-react";
import { login, loginWithProvider } from "../auth/authService.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

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
      await loginWithProvider('google', tokenResponse.access_token);
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
  })

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-gray-100">
      <div className="w-md p-8 rounded-2xl bg-white">
        <div className="mb-5 text-2xl font-semibold">Log in</div>
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
          <button className="w-full p-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity cursor-pointer">
            Login
          </button>
        </form>

        <button 
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center p-3 mb-6 border border-gray-300 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors mt-4 cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
