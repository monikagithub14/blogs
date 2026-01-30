// import React, { useState } from "react";
// import { ShoppingBag, MapPin, User, Phone, PencilLine } from "lucide-react";
// import OrdersScreen from "./MyOrders";
// import AddressScreen from "./Address";
// import { useGetmeQuery } from "../../Redux/API/UsersAPI";
// import { useGetMyOrdersQuery } from "../../Redux/API/OrderAPI";

// // Import your global components
// import Header from "../GardenUI/Header";
// import Footer from "../ComFooter/Footer";
// import MenuPopup from "../Menu";

// const DashboardLayout = () => {
//   const [activeTab, setActiveTab] = useState("orders");
//   const { data } = useGetmeQuery();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [soundOn, setSoundOn] = useState(true);

//   const { data: myAllOrders } = useGetMyOrdersQuery();

//   const myOrders = myAllOrders;
//   const totalOrders = myAllOrders?.count;
//   const user = data?.user || [];

//   return (
//     /* 1. Main Wrapper: Changed from h-screen to min-h-screen to allow footer to exist below */
//     <div className="min-h-screen w-full bg-[#020523] text-white flex flex-col font-sans">
//       {/* 2. GLOBAL HEADER */}
//       <Header
//         setMenuOpen={setMenuOpen}
//         soundOn={soundOn}
//         setSoundOn={setSoundOn}
//       />
//       {/* 3. DASHBOARD CONTENT AREA */}
//       <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 gap-6 lg:gap-12">
//         {/* === LEFT SIDEBAR === */}
//         <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-8">
//           {/* Identity Section */}
//           <div className="px-2">
//             <span className="text-lg md:text-xl text-slate-400 font-light block mb-1">
//               Hello,
//             </span>
//             <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-tight">
//               {user.name}
//             </h1>
//           </div>

//           {/* Navigation Tabs */}
//           <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
//             <button
//               onClick={() => setActiveTab("orders")}
//               className={`flex-1 lg:flex-none flex items-center justify-between px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
//                 activeTab === "orders"
//                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
//                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingBag
//                   size={20}
//                   className={activeTab === "orders" ? "text-blue-400" : ""}
//                 />
//                 <span className="font-bold text-sm md:text-base">
//                   Your Orders
//                 </span>
//               </div>
//               <span
//                 className={`h-6 w-6 flex items-center justify-center text-[10px] font-black rounded-full ${
//                   activeTab === "orders"
//                     ? "bg-white text-[#0f172a]"
//                     : "bg-slate-700 text-slate-300"
//                 }`}
//               >
//                 {totalOrders || 0}
//               </span>
//             </button>

//             <button
//               onClick={() => setActiveTab("address")}
//               className={`flex-1 lg:flex-none flex items-center gap-3 px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
//                 activeTab === "address"
//                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
//                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
//               }`}
//             >
//               <MapPin
//                 size={20}
//                 className={activeTab === "address" ? "text-blue-400" : ""}
//               />
//               <span className="font-bold text-sm md:text-base">Address</span>
//             </button>
//           </nav>
//         </aside>

//         {/* === RIGHT MAIN AREA === */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* Internal Dashboard Header (Profile Card) */}
//           <header className="shrink-0">
//             <div className="bg-white text-slate-900 rounded-2xl py-3 px-4 md:px-6 flex items-center justify-between shadow-lg w-full">
//               <div className="flex items-center gap-6 md:gap-10 overflow-hidden">
//                 <div className="flex items-center gap-3 shrink-0">
//                   <div className="bg-[#0f172a] p-2 rounded-full text-white shrink-0">
//                     <User size={18} />
//                   </div>
//                   <span className="font-bold text-sm md:text-lg truncate">
//                     {user.name}
//                   </span>
//                 </div>
//                 <div className="h-8 border-l border-slate-200 hidden sm:block"></div>
//                 <div className="flex items-center gap-3 shrink-0">
//                   <div className="bg-[#0f172a] p-2 rounded-full text-white shrink-0">
//                     <Phone size={18} />
//                   </div>
//                   <span className="font-bold text-sm md:text-lg whitespace-nowrap">
//                     {user.phone}
//                   </span>
//                 </div>
//               </div>
//               <button className="text-slate-900 shrink-0">
//                 <PencilLine size={22} />
//               </button>
//             </div>
//           </header>

//           {/* Tab Content: Removed 'overflow-hidden' and 'h-full' to let the page scroll naturally */}
//           <main className="flex-1">
//             {activeTab === "orders" ? (
//               <OrdersScreen user={data?.user} myOrders={myOrders} />
//             ) : (
//               <AddressScreen />
//             )}
//           </main>
//         </div>
//       </div>
//       {/* 4. GLOBAL FOOTER */}
//       <Footer />
//       <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} />
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useEffect, useState } from "react";
import { ShoppingBag, MapPin, User, Phone, PencilLine } from "lucide-react";
import OrdersScreen from "./MyOrders";
import AddressScreen from "./Address";
import { useGetmeQuery } from "../Redux/API/UsersAPI";
import { useGetMyOrdersQuery } from "../Redux/API/OrderAPI";
import MenuPopup from "../Menu";
import { useLocation } from "react-router-dom";
const DashboardLayout = () => {
  const { data } = useGetmeQuery() || {}; // Handle undefined query result

  const { state } = useLocation();
  // console.log(state); // Optional logging
  const [activeTab, setActiveTab] = useState(state?.tab || "orders");

  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  // Handle undefined query result for orders
  const { data: myAllOrders } = useGetMyOrdersQuery() || {};
  const myOrders = myAllOrders || { orders: [] }; // Default empty object/array
  const totalOrders = myAllOrders?.count || 0;

  useEffect(() => {
    if (state?.tab) {
      setActiveTab(state?.tab);
    }
  }, [state?.tab]);

  // Default dummy user if data is missing
  const user = data?.user || {
    name: "Guest User",
    phone: "+91 0000000000",
  };

  return (
    <div div className="bg-[#020523] text-white">
      <Header
        setMenuOpen={setMenuOpen}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      <div className="h-screen w-full  flex flex-col lg:flex-row overflow-hidden font-sans">
        {/* ================= LEFT SIDEBAR ================= */}
        {/* Contains: Identity (Hello) + Navigation Buttons */}
        <aside className="w-full  lg:w-[280px] shrink-0 flex flex-col gap-8 p-4 md:p-8 lg:pr-0 z-10">
          {/* 1. Identity Section */}
          <div className="mt-2  lg:mt-4 px-2">
            <span className="text-lg md:text-xl text-slate-400 font-light block mb-1">
              Hello,
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-tight">
              {user.name}
            </h1>
          </div>

          {/* 2. Navigation Tabs */}
          {/* On mobile: row. On desktop: column */}
          <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex-1 lg:flex-none flex items-center justify-between px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap group ${
                activeTab === "orders"
                  ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
                  : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={20}
                  className={activeTab === "orders" ? "text-blue-400" : ""}
                />
                <span className="font-bold text-sm md:text-base">
                  Your Orders
                </span>
              </div>
              <span
                className={`h-6 w-6 flex items-center justify-center text-[10px] font-black rounded-full transition-colors ${
                  activeTab === "orders"
                    ? "bg-white text-[#0f172a]"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {totalOrders || 0}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className={`flex-1 lg:flex-none flex items-center gap-3 px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
                activeTab === "address"
                  ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
                  : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
              }`}
            >
              <MapPin
                size={20}
                className={activeTab === "address" ? "text-blue-400" : ""}
              />
              <span className="font-bold text-sm md:text-base">Address</span>
            </button>
          </nav>
        </aside>

        {/* ================= RIGHT MAIN AREA ================= */}
        {/* Contains: Header Card + Scrollable Content */}
        <div className="flex-1  flex flex-col h-full overflow-hidden p-4 md:p-8 lg:pl-12 gap-6">
          {/* 1. HEADER (Profile Card) */}
          {/* Now spans the full width of this column */}
          <header className="shrink-0 mt-6 ">
            <div className="bg-white text-slate-900 rounded-2xl py-3 px-4 md:px-6 flex items-center justify-between shadow-lg w-full">
              {/* User Details */}
              <div className="flex items-center gap-6 md:gap-10 overflow-hidden">
                {/* Name */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-2 rounded-full text-white shrink-0 bg-gradient-to-b from-[#010B25] to-[#04298B]">
                    <User size={18} />
                  </div>
                  <span className="font-bold text-sm md:text-lg truncate">
                    {user.name}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-8 border-l border-slate-200 hidden sm:block"></div>

                {/* Phone */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-2 rounded-full text-white shrink-0 bg-gradient-to-b from-[#010B25] to-[#04298B]">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-sm md:text-lg whitespace-nowrap">
                    {user.phone}
                  </span>
                </div>
              </div>

              {/* Edit Button */}
              <button className="text-slate-900 shrink-0">
                <PencilLine size={22} />
              </button>
            </div>
          </header>

          {/* 2. SCROLLABLE CONTENT */}
          {/* The 'overflow-hidden' here ensures the scrollbar stays INSIDE this container */}
          <main className="flex-1 mt-4  overflow-hidden rounded-[2rem] relative">
            <div className="h-full w-full">
              {activeTab === "orders" ? (
                <OrdersScreen user={data?.user} myOrders={myOrders} />
              ) : (
                <AddressScreen />
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
      <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default DashboardLayout;
