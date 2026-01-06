import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import BookPage from './pages/book.jsx';
import './styles/global.css'
import ToDoAPP from './components/toDo/toDoApp.jsx';
import ErrorPage from './pages/error.jsx';
import { AuthWrapper } from './components/context/authContext.jsx';
import PrivateRoute from './pages/privateRoute.jsx';
import 'nprogress/nprogress.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ToDoAPP />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element:
          (
            <PrivateRoute>
              <BookPage />
            </PrivateRoute>
          ),
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

]);


createRoot(document.getElementById('root')).render(
  /* 
  <StrictMode>
   // { <App /> }
    <RouterProvider router={router} />
  </StrictMode>,*/
  <AuthWrapper >
    <RouterProvider router={router} />
  </AuthWrapper>
)
