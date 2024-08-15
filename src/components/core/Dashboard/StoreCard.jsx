import React from "react";

function StoreCard({ store, onCheckInventory }) {
  return (
    <div className="p-2 mb-4 bg-white shadow-md border border-[#dff0ff] shadow-[#daedff] rounded-lg">
    <div className="flex flex-row gap-x-4">
      <img
        src={store.storeImage}
        alt="Trailer"
        className="w-52 h-40 object-cover rounded-3xl"
      />
      <div className="flex flex-row w-full px-2 relative justify-around items-center gap-x-2">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-bold text-richblue-500">{store.storeName}</h2>
          <p className="text-sm text-gray-600 text-richblue-600">
             Location: {store.storeLocation}
          </p>
          <p className="text-sm text-gray-600 text-richblue-600">
          Annual Visitors: {store.annualVisitors.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 text-richblue-600">
          Area: {store.areaOccupied}
          </p>
        </div>
        <div className="flex flex-col  font-medium gap-y-1 items-center">
        <p className="text-[15px] text-gray-600 text-richblue-600">
        Manager: {store.managerName} ({store.managerContactInfo})
          </p>
          <p className="text-[16px] text-gray-600 font-semibold text-richblue-600">
          Urgent Delivery: {store.urgentDelivery ? "Yes" : "No"}
          </p>
        <button
          className="px-4 py-2 mt-3 rounded-md bg-blu text-white font-semibold"
          onClick={() => onCheckInventory()}
        >
          Check Inventory
        </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default StoreCard;

{/* <div className="p-1 w-full mx-auto bg-white shadow-md border border-[#dff0ff] shadow-[#daedff] rounded-lg mb-4">
      <div className="flex flex-row gap-x-1">
        <img
          src={store.storeImage}
          alt="Store"
          className="w-60 h-44 object-cover rounded-3xl"
        />
        <div className="flex flex-row  w-full border border-black p-2 items-center gap-x-2">
        <div className="flex flex-col gap-y-4 items-center w-full ">
          <div>
            <h2 className="text-xl font-bold text-richblue-500">{store.storeName}</h2>
            <p className="text-sm text-gray-600">
              Location: {store.storeLocation}
            </p>
            <p className="text-sm text-gray-600">
              Annual Visitors: {store.annualVisitors.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">Area: {store.areaOccupied}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
            <p className="text-sm text-gray-600">
              Manager: {store.managerName} ({store.managerContactInfo})
            </p>
            <p className="text-sm text-gray-600">
              Urgent Delivery: {store.urgentDelivery ? "Yes" : "No"}
            </p>
            <button
            className="px-4 py-2 mt-2 w-full rounded-md bg-blu text-white font-semibold"
            onClick={onCheckInventory}
          >
            Check for Inventory
          </button>
        </div>
        </div>
      </div>
    </div> */}