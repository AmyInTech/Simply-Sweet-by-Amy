import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./ui/Home";
import Header from "./ui/Header";
import NavBar from "./ui/Home Components/NavBar";
import Footer from "./ui/Home Components/Footer";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import AboutUs from "./features/about-us/AboutUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

createBrowserRouter;

function App() {
  return (
    <RouterProvider router={router}>
      <Header />
      <NavBar />
      <Footer />
    </RouterProvider>
  );
}

export default App;
