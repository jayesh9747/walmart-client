import DeliveryCard from "./DeliveryCard";
import truck from "../../../assets/Images/Truck.jpg"

function Delivery() {
    
    const productsList = [
        {
          id: "D1234",
          driverName: "Pradeep Bhale",
          quantityReceived: 280,
          dateReceived: "2024-07-12",
          status: "Received",
        },
        {
          id: "D5678",
          driverName: "Jatin Mathijia",
          quantityReceived: 850,
          dateReceived: "2024-07-10",
          status: "Received",
        },
        {
          id: "D2345",
          driverName: "Chandu Guled",
          quantityReceived: 480,
          dateReceived: "2024-07-08",
          status: "Received",
        },
        {
          id: "D6789",
          driverName: "Pradeep Bhale",
          quantityReceived: 210,
          dateReceived: "2024-07-05",
          status: "Rejected",
        },
        {
          id: "D3456",
          driverName: "Shrikant Salve",
          quantityReceived: 170,
          dateReceived: "2024-07-03",
          status: "Rejected",
        },
        {
          id: "D7890",
          driverName: "Shrikant Salve",
          quantityReceived: 195,
          dateReceived: "2024-07-01",
          status: "Received",
        },
        {
            id: "D2345",
            driverName: "Chandu Guled",
            quantityReceived: 480,
            dateReceived: "2024-07-08",
            status: "Received",
          },
          {
            id: "D6989",
            driverName: "Pradeep Bhale",
            quantityReceived: 210,
            dateReceived: "2024-07-05",
            status: "Rejected",
          },
          {
            id: "D3656",
            driverName: "Shrikant Salve",
            quantityReceived: 170,
            dateReceived: "2024-07-03",
            status: "Received",
          },
          {
            id: "D3890",
            driverName: "Shrikant Salve",
            quantityReceived: 195,
            dateReceived: "2024-07-01",
            status: "Received",
          },
      ];
      
      const products = [
        { id: "C2453", name: "Coco Cola Bottle(2 ltr)", quantity: 200, status: "Selling fast", dateReceived: "2024-08-15" },
        { id: "C5678", name: "Water Bottle(Plastic)", quantity: 180, status: "Out of Stock soon", dateReceived: "2024-08-15" },
        { id: "C5679", name: "Tiffin Boxes(Medium)", quantity: 85, status: "Selling Fast", dateReceived: "2024-08-15" },
      ];

  return (
    <div className="flex flex-col gap-y-2 justify-center">
        <p className="text-2xl text-richblue-400 font-semibold">Incoming Delivery</p>
        <DeliveryCard
      driverName="Shrikant Salve"
      driverImage={truck}
      status={false} // or true
      expectedArrival="2024-08-16 11:30 AM"
      dcLocation="Kurnool Distribution Center"
      orderDate="2024-08-15 9:30 AM"
      isDispatched={false}
      productsList={products}
    />
        <p className="text-2xl mt-8 text-richblue-400 font-semibold">Past Deliveries</p>
        {
            <div className="w-full mx-auto p-1 border border-richblue-700 rounded-lg shadow-sm shadow-llblue mt-2">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-richblue-700 text-white text-xs font-medium">
                  <th className="py-2 px-1 border-b-2 border-blue-500">ID</th>
                  <th className="py-2 px-2 border-b-2 border-blue-500">Driver Name</th>
                  <th className="py-2 px-2 border-b-2 border-blue-500">Quantity Recieved</th>
                  <th className="py-2 px-2 border-b-2 border-blue-500">Status</th>
                  <th className="py-2 px-2 border-b-2 border-blue-500">Arrival Date</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`${
                      index % 2 === 0 ? "bg-[#f7faff]" : "bg-blue-5"
                    } text-richblue-600 text-xs font-inter`}
                  >
                    <td className="py-[12px] px-4 border-b text-center border-blue-300">{product.id}</td>
                    <td className="py-2 px-5 border-b text-center border-blue-300">{product.driverName}</td>
                    <td className="py-2 px-5 border-b text-center border-blue-300">{product.quantityReceived}</td>
                    <td className="py-2 px-5 border-b text-center border-blue-300">{product.status}</td>
                    <td className="py-2 px-5 border-b text-center border-blue-300">{product.dateReceived}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
    </div>
  );
}

export default Delivery;
