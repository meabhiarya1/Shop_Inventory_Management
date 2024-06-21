// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MyProvider from "./context/MyProvider";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Dashboard from "./comp/AdminDashboard/Dashboard";
import SalesDashboard from "./comp/SalesDashboard/Dashboard";

const App: React.FC = () => {
  return (
    <MyProvider>
      <Router>
        <Routes>
          {/* Redirect root path to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Routes that need Navbar */}
          <Route
            path="/dashboard"
            element={
              <WithNavbar>
                <Dashboard />
              </WithNavbar>
            }
          />
          <Route
            path="/sales"
            element={
              <WithNavbar>
                <SalesDashboard />
              </WithNavbar>
            }
          />
        </Routes>
      </Router>
    </MyProvider>
  );
};

interface WithNavbarProps {
  children: React.ReactNode;
}

const WithNavbar: React.FC<WithNavbarProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default App;
