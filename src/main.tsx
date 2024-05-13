import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './pages/sign-up/index.tsx';
import { Home } from './pages/Home.tsx';
import { Store } from './pages/Store.tsx';
import { Product } from './pages/Product.tsx';
import { About } from './pages/About.tsx';
import '../firebase.config.ts';
import { AuthProvider } from './context/useAuth.tsx';
import EditUser from './pages/EditUser.tsx';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/edituser',
        element: <EditUser />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
