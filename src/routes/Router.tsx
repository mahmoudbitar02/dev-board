import Boards from "@/pages/boards/Boards";
import Profile from "@/pages/profile/Profile";
import Root from "@/pages/root/Root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/boards",
        element: <Boards />,
        children: [
          {
            path: "/boards/:id",
            element: <Boards />,
          },
        ],
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
