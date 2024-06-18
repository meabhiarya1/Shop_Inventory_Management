import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Dashboard from "./comp/Dashboard";

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

// Higher Order Component for routes with Navbar
function WithNavbar({ children }: any) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default App;
