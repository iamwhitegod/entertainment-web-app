import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import Dashboard from "../layouts/Dashboard";

// config
import { DEFAULT_PATH } from "../../config";
import ProtectedRoute from "../utils/ProtectedRoute";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback="Loading...">
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "home", element: <Home /> },
        { path: "movies", element: <Movies /> },
        { path: "tvseries", element: <TVSeries /> },
        { path: "bookmarked", element: <Bookmaked /> },
      ],
    },
    { path: "404", element: <Page404 /> },
    { path: "docs", element: <DocsPage /> },
    { path: "signup", element: <RegisterPage /> },
    { path: "login", element: <LoginPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
const TVSeries = Loadable(lazy(() => import("../pages/TVSeries")));
const Movies = Loadable(lazy(() => import("../pages/Movies")));
const Bookmaked = Loadable(lazy(() => import("../pages/Bookmarked")));
const Page404 = Loadable(lazy(() => import("../pages/NotFound")));
const RegisterPage = Loadable(lazy(() => import("../pages/Signup")));
const LoginPage = Loadable(lazy(() => import("../pages/Login")));
const DocsPage = Loadable(lazy(() => import("../pages/Docs")));
