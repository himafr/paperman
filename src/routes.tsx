import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import NotFoundPage from "./ui/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default router