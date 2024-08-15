import React from "react";

function Inventory({ store, onCheckInventory }) {
    const inventory = [
        { id: "P1001", productName: "Laptop - Dell Inspiron", quantity: "120", stockStatus: "In Stock" },
        { id: "P1002", productName: "Smartphone - iPhone 14", quantity: "85", stockStatus: "Limited Stock" },
        { id: "P1003", productName: "Tablet - Samsung Galaxy", quantity: "150", stockStatus: "In Stock" },
        { id: "P1004", productName: "Headphones - Sony WH-1000XM4", quantity: "95", stockStatus: "In Stock" },
        { id: "P1005", productName: "Smartwatch - Apple Watch Series 8", quantity: "60", stockStatus: "Limited Stock" },
        { id: "P1006", productName: "Keyboard - Logitech G Pro", quantity: "200", stockStatus: "In Stock" },
        { id: "P1007", productName: "Mouse - Razer DeathAdder", quantity: "180", stockStatus: "In Stock" },
        { id: "P1008", productName: "Monitor - LG Ultrawide", quantity: "75", stockStatus: "Limited Stock" },
        { id: "P1009", productName: "Printer - HP LaserJet", quantity: "50", stockStatus: "Limited Stock" },
        { id: "P1010", productName: "Camera - Canon EOS R5", quantity: "40", stockStatus: "Out of Stock" },
        { id: "P1011", productName: "Tripod - Manfrotto", quantity: "90", stockStatus: "In Stock" },
        { id: "P1012", productName: "External HDD - Seagate 1TB", quantity: "300", stockStatus: "In Stock" },
        { id: "P1013", productName: "USB Drive - Sandisk 64GB", quantity: "450", stockStatus: "In Stock" },
        { id: "P1014", productName: "Gaming Console - PlayStation 5", quantity: "20", stockStatus: "Limited Stock" },
        { id: "P1015", productName: "VR Headset - Oculus Quest 2", quantity: "35", stockStatus: "Out of Stock" },
        { id: "P1016", productName: "Smart Speaker - Amazon Echo", quantity: "250", stockStatus: "In Stock" },
        { id: "P1017", productName: "Router - Netgear Nighthawk", quantity: "110", stockStatus: "In Stock" },
        { id: "P1018", productName: "Drone - DJI Mavic Air 2", quantity: "45", stockStatus: "Limited Stock" },
        { id: "P1019", productName: "Projector - Epson Home Cinema", quantity: "30", stockStatus: "Out of Stock" },
        { id: "P1020", productName: "Graphics Card - NVIDIA RTX 3080", quantity: "10", stockStatus: "Out of Stock" },
      ];
  return (
    <div className="w-full max-w-6xl mx-auto p-2 rounded-lg shadow-sm shadow-llblue">
    <h2 className="text-2xl font-semibold  text-richblue-500 mb-4">Inventory Details</h2>
    <table className="min-w-full bg-white">
      <thead>
        <tr className="bg-blu text-white text-xs font-medium">
          <th className="py-2 px-4 border-b-2 border-blue-500">Product Code</th>
          <th className="py-2 px-4 border-b-2 border-blue-500">Product Name</th>
          <th className="py-2 px-4 border-b-2 border-blue-500">Quantity</th>
          <th className="py-2 px-4 border-b-2 border-blue-500">Stock Status</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item, index) => (
          <tr
            key={item.id}
            className={`${index % 2 === 0 ? "bg-[#edf5ffd0]" : "bg-white"} text-richblue-600 text-xs font-inter`}
          >
            <td className="py-2 px-4 border-b text-center border-blue-300">{item.id}</td>
            <td className="py-2 px-4 border-b text-center border-blue-300">{item.productName}</td>
            <td className="py-2 px-4 border-b text-center border-blue-300">{item.quantity}</td>
            <td className="py-2 px-4 border-b text-center border-blue-300">{item.stockStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Inventory;
