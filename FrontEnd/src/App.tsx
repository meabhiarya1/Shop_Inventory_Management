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
import BuyDashboard from "./comp/BuyDashboard/Dashboard";
import SellDashboard from "./comp/SellDashboard/Dashboard";
import TotalSalesDashboard from "./comp/TotalSalesDashboard/Dashboard";

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
            path="/dashboard/buy"
            element={
              <WithNavbar>
                <BuyDashboard />
              </WithNavbar>
            }
          />
          <Route
            path="/dashboard/sell"
            element={
              <WithNavbar>
                <SellDashboard />
              </WithNavbar>
            }
          />
          <Route
            path="/dashboard/total-sales"
            element={
              <WithNavbar>
                <TotalSalesDashboard />
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
