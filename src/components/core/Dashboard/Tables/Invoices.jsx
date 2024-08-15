import React from "react";

const InvoiceTable = () => {
  const invoices = [
    { id: 234, customerName: "John Doe", dateTime: "2024-08-01 3:30 AM", amount: "$150.00" },
    { id: 232, customerName: "Jane Smith", dateTime: "2024-08-01 3:28 AM", amount: "$200.00" },
    { id: 323, customerName: "Michael Brown", dateTime: "2024-08-01 3:27 PM", amount: "$250.00" },
    { id: 422, customerName: "Emily Davis", dateTime: "2024-08-01 3:23 PM", amount: "$300.00" },
    { id: 511, customerName: "Chris Johnson", dateTime: "2024-08-01 3:21 PM", amount: "$350.00" },
    { id: 521, customerName: "Stella Mike", dateTime: "2024-08-01 3:21 PM", amount: "$250.00" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto  p-1 border-[1px] border-blue-800 rounded-lg shadow-sm shadow-llblue ">
      <h2 className="text-xl font-medium text-center text-richblue-500 mb-1">Recent Invoices</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blu text-white text-xs font-medium">
            <th className="py-1 px-4 border-b-2 border-blue-500">ID</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Customer</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Date & Time</th>
            <th className="py-2 px-4 border-b-2 border-blue-500">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr
              key={invoice.id}
              className={`${index % 2 === 0 ? "bg-[#dcecff]" : "bg-blue-5"} text-richblue-600 text-xs font-inter `}
            >
              <td className="py-2 px-2 border-b border-blue-300">{invoice.id}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.customerName}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.dateTime}</td>
              <td className="py-2 px-2 border-b border-blue-300">{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
