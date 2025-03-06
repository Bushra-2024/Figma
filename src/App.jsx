import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import About from "../src/components/pages/about/about.jsx";
import Home from "../src/components/pages/home/home.jsx";
import BuyAccount from "./components/pages/buyaccounts/buyaccount.jsx";
import Blog from "./components/pages/about/blog/blog.jsx";
import BlogDetail from "./components/pages/about/blog/get-by-id.jsx"; 
import CoolWatched from "./components/pages/services/coolwatched.jsx";
import AmazonWatch from "./components/pages/services/amazon-watch.jsx";
import UtilityBills from "./components/pages/services/utility-bills.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "buyaccount",
          element: <BuyAccount />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:id", 
          element: <BlogDetail />,
        },
        {
          path: "services/cool-watched",
          element: <CoolWatched />,
        },
        {
          path: "services/amazon-watch",
          element: <AmazonWatch />,
        },
        {
          path: "services/utility-bills",
          element: <UtilityBills />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
