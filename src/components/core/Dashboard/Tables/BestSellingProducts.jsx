import React from "react";

const ProductTable = () => {
  const invoices = [
    { id: "C1234", productName: "Potato Chips", Quantity: "785", amount: "$150.00" },
    { id: "C2345", productName: "Coco Cola Bottle(2 ltr)",Quantity: "756", amount: "$200.00" },
    { id: "C1235", productName: "Amul Ice Cream Tub", Quantity: "685", amount: "$250.00" },
    { id: "C1256", productName: "Loreal Sunscreen", Quantity: "515", amount: "$500.00" },
    { id: "C1345", productName: "Water Bottles Plastic", Quantity: "505", amount: "$350.00" },
    { id: "C2345", productName: "Palstic Tiffins", Quantity: "475", amount: "$380.00" },
 ];

  return (
    <div className="w-full max-w-3xl mx-auto  p-[10px] border-[1px] border-blue-800 rounded-lg shadow-sm shadow-llblue ">
      <h2 className="text-xl font-medium text-center text-richblue-500 mb-1">Top Selling Products</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blu text-white text-xs font-medium">
            <th className="py-1 px-4 border-b-2 border-blue-500">Product Code</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Product Name</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Quantity</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr
              key={invoice.id}
              className={`${index % 2 === 0 ? "bg-[#dcecff]" : "bg-white"} text-richblue-600 text-xs font-inter `}
            >
              <td className="py-2 px-2 border-b border-blue-300">{invoice.id}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.productName}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.Quantity}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
