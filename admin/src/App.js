import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users",
      element: (
        <ProtectedRoute>
          <List columns={userColumns} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/users/:id",
      element: (
        <ProtectedRoute>
          <Single />
        </ProtectedRoute>
      ),
    },
    {
      path: "/users/new",
      element: (
        <ProtectedRoute>
          <New inputs={userInputs} title="Add New User" />
        </ProtectedRoute>
      ),
    },
    {
      path: "/hotels",
      element: (
        <ProtectedRoute>
          <List columns={hotelColumns} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/hotels/:id",
      element: (
        <ProtectedRoute>
          <Single />
        </ProtectedRoute>
      ),
    },
    {
      path: "/hotels/new",
      element: (
        <ProtectedRoute>
          <NewHotel />
        </ProtectedRoute>
      ),
    },
    {
      path: "/rooms",
      element: (
        <ProtectedRoute>
          <List columns={roomColumns} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/rooms/:id",
      element: (
        <ProtectedRoute>
          <Single />
        </ProtectedRoute>
      ),
    },
    {
      path: "/rooms/new",
      element: (
        <ProtectedRoute>
          <NewRoom />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
