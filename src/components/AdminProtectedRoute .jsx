import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user data

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />; // Redirect unauthorized users
  }

  return <Outlet />; // Render admin pages if authorized
};

export default AdminProtectedRoute;
