import Boards from "./../pages/boards/Boards";
import Profile from "./../pages/profile/Profile";
import BoardsDetails from "../pages/BoardsDetails/BoardsDetails";
import Root from "./../pages/root/Root";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="boards" replace />,
      },
      {
        path: "boards",
        element: <Boards />,
      },
      {
        path: "boards/:id",
        element: <BoardsDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Navigate to="boards" replace />,
      },
    ],
  },
]);
