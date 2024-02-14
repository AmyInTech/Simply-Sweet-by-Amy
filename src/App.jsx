import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./ui/Home";
import Header from "./ui/Header";
import NavBar from "./ui/Home Components/NavBar";
import Footer from "./ui/Home Components/Footer";
import AppLayout from "./ui/AppLayout";
import MenuAndOrdering from "./features/menu-and-ordering/menu-and-ordering";
import AboutUs from "./features/about-us/AboutUs";
import FAQs from "./features/faqs/FAQs";
import CareGuide from "./features/care-guide/care-guide";
import Contact from "./features/contact-us/contact-us";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu-and-ordering",
        element: <MenuAndOrdering />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/FAQs",
        element: <FAQs />,
      },
      {
        path: "/care-guide",
        element: <CareGuide />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // Wildcard route for handling errors
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

createBrowserRouter;

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />

      <RouterProvider router={router}>
        <Header />
        <NavBar />
        <Footer />
      </RouterProvider>
    </>
  );
}

export default App;
