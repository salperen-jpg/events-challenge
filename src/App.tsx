import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  Events,
  HomePage,
  Event,
  Registrations,
  InlinePageError,
} from "./pages";
import { loader as EventsLoader } from "./pages/Events";
import { loader as SingleEventLoader } from "./pages/Contacts";
import { loader as RegistrationsLoader } from "./pages/Registrations";
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
          errorElement: <InlinePageError />,
          loader: EventsLoader,
        },
        {
          path: "/events/:id",
          element: <Event />,
          errorElement: <InlinePageError />,
          loader: SingleEventLoader,
        },
        {
          path: "/events/registrations/:id",
          element: <Registrations />,
          errorElement: <InlinePageError />,
          loader: RegistrationsLoader,
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
