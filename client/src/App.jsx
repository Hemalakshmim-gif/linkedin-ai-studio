import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Preview from "./pages/Preview";
import Templates from "./pages/Templates";
import History from "./pages/History";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";

function App() {

  const { user } = useAuth();

  return (
    <>
      <Routes>

        {/* Root */}

        <Route
          path="/"
          element={
            user
              ? <Navigate to="/home" replace />
              : <Navigate to="/login" replace />
          }
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Application */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="home"
            element={<Home />}
          />

          <Route
            path="create"
            element={<Create />}
          />

          <Route
            path="preview"
            element={<Preview />}
          />

          <Route
            path="templates"
            element={<Templates />}
          />

          <Route
            path="history"
            element={<History />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        theme="light"
      />

    </>
  );
}

export default App;