import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ima from "../../../assets/Images/image.png"
import { ACCOUNT_TYPE } from "../../../utils/constants"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  console.log("this is user fetch from the apis",user);

  const isStore= user?.accountType === ACCOUNT_TYPE.STORE_MANAGER ? true : false

  return (
    <>
      <h1 className="mb-6 text-3xl font-medium text-black">
      {isStore ? "Walmart Store" : "Distribution Centre"}
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblue-500 bg-llblue py-3 px-8">
        <div className="flex items-center gap-x-4">
          <img
            src={ima}
            alt={"Image of Walmart store"}
            className="aspect-square w-[82px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-ddblue">
            {isStore ? "Kurnool Store" : "Kurnool Distribution Centre"}
            </p>
            <p className="text-sm text-richblue-800">
            {isStore ? "Shop No. 13 & 14, Central Plaza, Alluri Sitarama Raju Nagar, Kurnool, Andhra Pradesh 518002, India" : "Block 12 , Vishwa Nagar, Kurnool, Andhra Pradesh 518002, India"}
            </p>
            <p className="text-sm text-richblue-800">{isStore ? "50,000 sq.ft" : "100,000 sq.ft"}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-4 flex flex-col gap-y-5 rounded-md border-[1px] border-richblue-500 bg-llblue p-3 px-8">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblue-900">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className=" text-sm font-medium text-richblue-800 "
        >
          {isStore ? "The store caters to the business needs of underserved small businesses. It enables Walmart India to offer unique value propositions of a wide range of quality merchandise & local assortment at ‘Every Day Low Prices’, unique shopping options, 24-hour door-step delivery and convenient payment solutions to members in Kurnool and adjoining areas, the release claimed.":
          " The Distribution Centre caters to the business needs of nearby walmart stores across the state of Andhra Pradesh. The state of Andhra Pradesh has 5 walmart stores across Rajamahendravaram, Kurnool, Guntur, Vijayawada and Visakhapatnam."}
        </p>
      </div>
      <div className="my-4 flex flex-col gap-y-10 rounded-md border-[1px] border-richblue-500 bg-llblue p-3 px-8">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-semibold text-richblue-900">
            {isStore?"Manager Details":"Admin Details"}
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-1 text-sm text-ddblue">First Name</p>
              <p className="text-md font-medium text-richblue-900">
                  { `${user?.firstName}`}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-ddblue">Email</p>
              <p className="text-md font-medium text-richblue-900">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-ddblue">Gender</p>
              <p className="text-md font-medium text-richblue-900">
                {user?.additionalDetails?.gender || "Male"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
          <div>
              <p className="mb-1 text-sm text-ddblue">Last Name</p>
              <p className="text-md font-medium text-richblue-900">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-ddblue">Employee Id</p>
              <p className="text-md font-medium text-richblue-900">
                {user?._id}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-ddblue">Date Of Birth</p>
              <p className="text-sm font-medium text-richblue-900">
                {
                  user?.additionalDetails.dateOfBirth || "Add the  Date of Birth"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}