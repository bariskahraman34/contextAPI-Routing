import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import NotFound from "./pages/NotFound"
import LoginInfos from "./pages/LoginInfos"
import Users from "./pages/Users"

  export const router = createBrowserRouter([
    {
      path:"/",
      element:<App />,
      children: [
        {
          path:"/login-informations",
          element: <LoginInfos />
        },
        {
          path:"/users",
          element: <Users />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])