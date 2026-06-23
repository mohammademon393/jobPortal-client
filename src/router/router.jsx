import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-red-500">Hello World, setup router</div>,
  },
]);

export default router;