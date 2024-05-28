import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/sign-up/index.tsx";
import Debug from "./pages/debug/index.tsx";
import { Home } from "./pages/Home.tsx";
import { Store } from "./pages/Store.tsx";
import { About } from "./pages/About.tsx";

import "../firebase.config.ts";
import { AuthProvider } from "./context/useAuth.tsx";
import EditUser from "./pages/EditUser.tsx";
import { Toaster } from "sonner";
import { Company } from "./pages/Company.tsx";
import EditItem from "./pages/EditItem.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Payment from "./pages/Payment.tsx";
import CompanyItemsManager from "./pages/items/index.tsx";
import AddCompanyItem from "./pages/addItem/index.tsx";
import ShoppingCartPage from "./pages/cart/index.tsx";
import PaymentPage from "./pages/payment/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store/:category",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/edituser",
        element: <EditUser />,
      },
      {
        path: "/Company",
        element: <Company />,
      },
      {
        path: "/items",
        element: <EditItem />,
      },
      {
        path: "/debug",
        element: <Debug />,
      },
      {
        path: "/company-items",
        element: <CompanyItemsManager />,
      },
      {
        path: "/company-item/new",
        element: <AddCompanyItem />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster richColors />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
