import type { RouteObject } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./layouts/Layout"
import ProtectedRoute from "./components/ProtectedRoute"
import Users from "./pages/Users"
import Chargers from "./pages/Chargers"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedRoute element={<Layout />} />,
    children: [
        {
            path: "users",
            element: <Users />
        },
        {
            path: "chargers",
            element: <Chargers />
        },
        {
            path: "settings",
            element: <>Settings</>
        }
      ]
  },
  {
    path: "/login",
    element: <Login />
  }
]
