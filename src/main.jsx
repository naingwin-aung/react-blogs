import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import Write from "./pages/Write.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./utils/ErrorPage.jsx";
import AppInitializer from "./layouts/AppInitializer.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import GuestRoute from "./components/GuestRoute.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe publishable key");
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppInitializer,
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/posts",
            Component: PostListPage,
          },
          {
            path: "/posts/:slug",
            Component: SinglePost,
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "/write",
                Component: Write,
              },
            ],
          },
          {
            element: <GuestRoute />,
            children: [
              {
                path: "/login",
                Component: Login,
              },
              {
                path: "/register",
                Component: Register,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: () => <ErrorPage />,
  },
]);

const query = new QueryClient();
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={query}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
