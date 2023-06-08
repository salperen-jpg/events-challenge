import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Events, HomePage, Event } from "./pages";
import { loader as EventsLoader } from "./pages/Events";
import { loader as SingleEventLoader } from "./pages/Event";
import SharedLayout from "./pages/SharedLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/events",
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Events />,
          loader: EventsLoader,
        },
        {
          path: "/events/:id",
          element: <Event />,
          loader: SingleEventLoader,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
