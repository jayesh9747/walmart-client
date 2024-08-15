import TotalProductsSoldChart from "./Charts/TotalProductsSoldCharts"
import TotalSales from "./Charts/TotalSales"
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import ExpensesVsProfitChart from "./Charts/ExpensesGainChart";
import InvoiceTable from "./Tables/Invoices";
import ProductTable from "./Tables/BestSellingProducts";
function ManagerInsights() {
  return (
    <div className="flex flex-col gap-y-5 items-center">
        <div className="relative flex gap-x-2 ">
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-5 justify-between items-start">
                <div className="flex flex-col gap-y-1 items-center justify-between border border-lblue rounded-md p-3 shadow-lg shadow-blue-25">
                <TotalProductsSoldChart/>
                <p className="text-sm text-blu font-medium text-center">Compound to last month - 2.56 %</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center justify-between border border-lblue rounded-md p-3 shadow-lg shadow-blue-25">
                <TotalSales/>
                <p className="text-sm text-blu font-medium text-center">Compound to last month - 3.79 %</p>
                </div>
            </div>

            <div className="flex flex-row gap-x-10 w-full">
                <div className="bg-richblue-500 w-full p-4 border border-l-blue-25 shadow-md rounded-lg shadow-dblue ">
                    <div className="flex flex-row items-start gap-x-3">
                        <div className="flex flex-col justify-center gap-y-1">
                        <p className="text-white font-medium opacity-80 text-lg">Total Customers</p>
                        <h3 className="text-white font-semibold text-xl">1987</h3>
                        <div className="text-blu font-semibold text-xs">
                        3.44% increase from last month
                        </div>
                        </div>  
                        <div>
                            <FaPeopleGroup className="text-lblue w-[42px] h-[40px]"/>
                        </div>
                    </div>
                </div>
                <div className="bg-blu w-full  p-4 border border-lblue shadow-md rounded-lg shadow-dblue ">
                    <div className="flex flex-row items-start justify-items-end gap-x-3">
                        <div className="flex flex-col justify-center gap-y-1">
                        <p className="text-white font-medium opacity-80 text-lg">Total Deliveries Received</p>
                        <h3 className="text-white font-semibold text-xl">13</h3>
                        <div className="text-richblue-600 font-semibold text-xs">
                        0.84% increase from last month
                        </div>
                        </div>  
                        <div>
                            <TbTruckDelivery className="text-richblue-600 w-[40px] h-[40px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <InvoiceTable/>
        </div>
    </div>
    <div className="flex w-full flex-row gap-x-6 items-center justify-center">
        <div className="w-full">
        <ProductTable/>  
        </div>
        <div className="border border-lblue rounded-md  shadow-lg shadow-blue-25">
           <ExpensesVsProfitChart/>
        </div>
    </div>
    </div>
  )
}

export default ManagerInsights