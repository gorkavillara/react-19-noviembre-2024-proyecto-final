import type { RouteObject } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./layouts/Layout"
import Users from "./pages/Users"
import Chargers from "./pages/Chargers"
import NewUser from "./pages/Users/new"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "users",
            element: <Users />
        },
        {
            path: "users/new",
            element: <NewUser />
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
