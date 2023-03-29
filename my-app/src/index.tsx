import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckBooking from "./routes/CheckBooking";
import CreateBooking from "./routes/CreateBooking";
import PassportApp from "./routes/PassportApp";
import BusApp from "./routes/BusApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/passport_app",
    element: <PassportApp />,
  },
  {
    path: "/bus_app",
    element: <BusApp />,
  },
  {
    path: "/passport_app/check-booking",
    element: <CheckBooking />,
  },
  {
    path: "/passport_app/create-booking",
    element: <CreateBooking />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
