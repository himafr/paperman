import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./ui/NotFoundPage";
import PostPage from "./pages/PostPage";
import WriterPage from "./pages/WriterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"Post/:id",
        element: <PostPage />,
      },
      {
        path:"writer/:id",
        element: <WriterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default router