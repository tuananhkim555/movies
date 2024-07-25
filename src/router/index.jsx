import {
  createBrowserRouter,
  Link,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "action",
    element: <div>action</div>,
  },
  {
    path: "anime",
    element: <div>amine</div>,
  },
]);

