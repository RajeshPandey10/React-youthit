//app
import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

// Main App content that uses the auth context
function AppContent() {
  const { currentPage, isLoggedIn } = useAuth();

  // If user is logged in, always show home
  if (isLoggedIn) {
    return <Home />;
  }

  // If not logged in, show login or register based on currentPage
  switch (currentPage) {
    case "register":
      return <Register />;
    case "login":
    default:
      return <Login />;
  }
}

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
