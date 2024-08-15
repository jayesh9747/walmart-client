import React from "react"
import img from "../assets/Images/home.png"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="h-screen bg-blue-5 relative overflow-x-hidden">
       <div className="w-10/12 mx-auto flex flex-row items-center justify-center">
       <div className="text-center text-richblue-500">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">Gateway to Smarter Deliveries</h1>
         <p className="text-lg md:text-[18px] mb-8">Connecting the dots of Supply Chain logistics, our approach ensures that every delivery is executed with unparalleled accuracy and consistency.</p>
         <div className="space-x-4">
           <Link to="/login">
           <button className="bg-blu text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-400 transition duration-300">Login</button>
           </Link>
           <Link to="/signup">
           <button className="bg-blu text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300">Sign Up</button>
           </Link>
           </div>
       </div>
       <img src={img} alt="homepage" className="relative w-[610px] h-[500px]"/>
       </div>
     </div>
  )
}

export default Home

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
//       <div className="text-center text-white">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Driving Smarter Deliveries Forward</h1>
//         <p className="text-xl md:text-2xl mb-8">Efficiency in Every Walmart Delivery.</p>
//         <div className="space-x-4">
//           <button className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Login</button>
//           <button className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
