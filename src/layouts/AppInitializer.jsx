import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuth } from "../auth/authService.js";

export default function AppInitializer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error("No existing session found");
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  return <Outlet />;
}
