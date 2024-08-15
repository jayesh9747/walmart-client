import "./App.css";
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Common/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail";
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import Dashboard from "./pages/Dashboard";
import Analytics from "./components/core/Dashboard/Analytics";
import Delivery from "./components/core/Dashboard/Delivery";
import AdminDeliveries from "./components/core/Dashboard/AdminDeliveries"
import TrailerManagementPage from "./components/core/Dashboard/Trailers";
import StoreManagementPage from "./components/core/Dashboard/StoreManagementPage";
import Inventory from "./components/core/Dashboard/Inventory";
function App() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen w-screen flex-col bg-white font-inter ">
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/verify-email" element={<VerifyEmail/>}/>
           <Route
            element={
              <Dashboard />
            }
          >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route path="dashboard/analytics" element={<Analytics />} />
          <Route path="dashboard/stores" element={<StoreManagementPage />} />
          <Route path="dashboard/deliveries" element={<AdminDeliveries />} />
          <Route path="dashboard/trailers" element={<TrailerManagementPage />} />
          <Route path="dashboard/delivery" element={<Delivery />} />
          <Route path="dashboard/inventory" element={<Inventory />} />
          </Route> 
        </Routes>
    </div>
  );
}

export default App;
