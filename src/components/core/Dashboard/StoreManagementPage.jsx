import React, { useState } from "react";
import StoreCard from "./StoreCard";
import store1 from "../../../assets/Images/store1.jpeg";
import store2 from "../../../assets/Images/store2.jpeg";
import store3 from "../../../assets/Images/store3.jpeg";
import store4 from "../../../assets/Images/store4.jpeg";
import { useNavigate } from "react-router-dom"; 

const stores = [
  {
    storeName: "Kurnool Store",
    storeLocation: "Kurnool, Andhra Pradesh",
    annualVisitors: 500000,
    areaOccupied: "50000 sq. ft.",
    managerName: "Arun Jadhav",
    managerContactInfo: "555-7890",
    storeImage: store1,
    urgentDelivery: true,
  },
  {
    storeName: "Rajamahendravaram Store",
    storeLocation: "Rajamahendravaram, Andhra Pradesh",
    annualVisitors: 300000,
    areaOccupied: "35000 sq. ft.",
    managerName: "Sneha Reddy",
    managerContactInfo: "555-5670",
    storeImage: store2,
    urgentDelivery: false,
  },
  {
    storeName: "Vijaywada Store",
    storeLocation: "Vijaywada, Andhra Pradesh",
    annualVisitors: 450000,
    areaOccupied: "40000 sq. ft.",
    managerName: "Vikas Gupta",
    managerContactInfo: "555-9012",
    storeImage: store3,
    urgentDelivery: true,
  },
  {
    storeName: "Vishakhapatnam Store",
    storeLocation: "Vishakhapatnam, Andhra Pradesh ",
    annualVisitors: 250000,
    areaOccupied: "25000 sq. ft.",
    managerName: "Rina Patel",
    managerContactInfo: "555-4321",
    storeImage: store4,
    urgentDelivery: false,
  },
];

function StoreManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredStores = stores.filter((store) =>
    store.urgentDelivery.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCheckInventory = (store) => {
    // navigate(`/inventory/${store.storeName.replace(/\s+/g, "-").toLowerCase()}`);
    // This will navigate to the inventory page for the selected store
    navigate('/dashboard/inventory');
  };

  return (
    <div className="p-4 w-full mx-auto">
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Search by urgency (true/false)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {filteredStores.map((store, index) => (
        <StoreCard
          key={index}
          store={store}
          onCheckInventory={() => handleCheckInventory(store)}
        />
      ))}
    </div>
  );
}

export default StoreManagementPage;
