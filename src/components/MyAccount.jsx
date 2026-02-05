// // import React, { useState } from "react";
// // import { ShoppingBag, MapPin, User, Phone, PencilLine } from "lucide-react";
// // import OrdersScreen from "./MyOrders";
// // import AddressScreen from "./Address";
// // import { useGetmeQuery } from "../../Redux/API/UsersAPI";
// // import { useGetMyOrdersQuery } from "../../Redux/API/OrderAPI";

// // // Import your global components
// // import Header from "../GardenUI/Header";
// // import Footer from "../ComFooter/Footer";
// // import MenuPopup from "../Menu";

// // const DashboardLayout = () => {
// //   const [activeTab, setActiveTab] = useState("orders");
// //   const { data } = useGetmeQuery();
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [soundOn, setSoundOn] = useState(true);

// //   const { data: myAllOrders } = useGetMyOrdersQuery();

// //   const myOrders = myAllOrders;
// //   const totalOrders = myAllOrders?.count;
// //   const user = data?.user || [];

// //   return (
// //     /* 1. Main Wrapper: Changed from h-screen to min-h-screen to allow footer to exist below */
// //     <div className="min-h-screen w-full bg-[#020523] text-white flex flex-col font-sans">
// //       {/* 2. GLOBAL HEADER */}
// //       <Header
// //         setMenuOpen={setMenuOpen}
// //         soundOn={soundOn}
// //         setSoundOn={setSoundOn}
// //       />
// //       {/* 3. DASHBOARD CONTENT AREA */}
// //       <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 gap-6 lg:gap-12">
// //         {/* === LEFT SIDEBAR === */}
// //         <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-8">
// //           {/* Identity Section */}
// //           <div className="px-2">
// //             <span className="text-lg md:text-xl text-slate-400 font-light block mb-1">
// //               Hello,
// //             </span>
// //             <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-tight">
// //               {user.name}
// //             </h1>
// //           </div>

// //           {/* Navigation Tabs */}
// //           <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
// //             <button
// //               onClick={() => setActiveTab("orders")}
// //               className={`flex-1 lg:flex-none flex items-center justify-between px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
// //                 activeTab === "orders"
// //                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
// //                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
// //               }`}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <ShoppingBag
// //                   size={20}
// //                   className={activeTab === "orders" ? "text-blue-400" : ""}
// //                 />
// //                 <span className="font-bold text-sm md:text-base">
// //                   Your Orders
// //                 </span>
// //               </div>
// //               <span
// //                 className={`h-6 w-6 flex items-center justify-center text-[10px] font-black rounded-full ${
// //                   activeTab === "orders"
// //                     ? "bg-white text-[#0f172a]"
// //                     : "bg-slate-700 text-slate-300"
// //                 }`}
// //               >
// //                 {totalOrders || 0}
// //               </span>
// //             </button>

// //             <button
// //               onClick={() => setActiveTab("address")}
// //               className={`flex-1 lg:flex-none flex items-center gap-3 px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
// //                 activeTab === "address"
// //                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
// //                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
// //               }`}
// //             >
// //               <MapPin
// //                 size={20}
// //                 className={activeTab === "address" ? "text-blue-400" : ""}
// //               />
// //               <span className="font-bold text-sm md:text-base">Address</span>
// //             </button>
// //           </nav>
// //         </aside>

// //         {/* === RIGHT MAIN AREA === */}
// //         <div className="flex-1 flex flex-col gap-6">
// //           {/* Internal Dashboard Header (Profile Card) */}
// //           <header className="shrink-0">
// //             <div className="bg-white text-slate-900 rounded-2xl py-3 px-4 md:px-6 flex items-center justify-between shadow-lg w-full">
// //               <div className="flex items-center gap-6 md:gap-10 overflow-hidden">
// //                 <div className="flex items-center gap-3 shrink-0">
// //                   <div className="bg-[#0f172a] p-2 rounded-full text-white shrink-0">
// //                     <User size={18} />
// //                   </div>
// //                   <span className="font-bold text-sm md:text-lg truncate">
// //                     {user.name}
// //                   </span>
// //                 </div>
// //                 <div className="h-8 border-l border-slate-200 hidden sm:block"></div>
// //                 <div className="flex items-center gap-3 shrink-0">
// //                   <div className="bg-[#0f172a] p-2 rounded-full text-white shrink-0">
// //                     <Phone size={18} />
// //                   </div>
// //                   <span className="font-bold text-sm md:text-lg whitespace-nowrap">
// //                     {user.phone}
// //                   </span>
// //                 </div>
// //               </div>
// //               <button className="text-slate-900 shrink-0">
// //                 <PencilLine size={22} />
// //               </button>
// //             </div>
// //           </header>

// //           {/* Tab Content: Removed 'overflow-hidden' and 'h-full' to let the page scroll naturally */}
// //           <main className="flex-1">
// //             {activeTab === "orders" ? (
// //               <OrdersScreen user={data?.user} myOrders={myOrders} />
// //             ) : (
// //               <AddressScreen />
// //             )}
// //           </main>
// //         </div>
// //       </div>
// //       {/* 4. GLOBAL FOOTER */}
// //       <Footer />
// //       <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} />
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// // import React, { useEffect, useState } from "react";
// // import { ShoppingBag, MapPin, User, Phone, PencilLine } from "lucide-react";
// // import OrdersScreen from "./MyOrders";
// // import AddressScreen from "./Address";
// // import { useGetmeQuery } from "../Redux/API/UsersAPI";
// // import { useGetMyOrdersQuery } from "../Redux/API/OrderAPI";
// // import MenuPopup from "../Menu";
// // import { useLocation } from "react-router-dom";
// // const DashboardLayout = () => {
// //   const { data } = useGetmeQuery() || {}; // Handle undefined query result

// //   const { state } = useLocation();
// //   // console.log(state); // Optional logging
// //   const [activeTab, setActiveTab] = useState(state?.tab || "orders");

// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [soundOn, setSoundOn] = useState(true);

// //   // Handle undefined query result for orders
// //   const { data: myAllOrders } = useGetMyOrdersQuery() || {};
// //   const myOrders = myAllOrders || { orders: [] }; // Default empty object/array
// //   const totalOrders = myAllOrders?.count || 0;

// //   useEffect(() => {
// //     if (state?.tab) {
// //       setActiveTab(state?.tab);
// //     }
// //   }, [state?.tab]);

// //   // Default dummy user if data is missing
// //   const user = data?.user || {
// //     name: "Guest User",
// //     phone: "+91 0000000000",
// //   };

// //   return (
// //     <div div className="bg-[#020523] text-white">
// //       <Header
// //         setMenuOpen={setMenuOpen}
// //         soundOn={soundOn}
// //         setSoundOn={setSoundOn}
// //       />
// //       <div className="h-screen w-full  flex flex-col lg:flex-row overflow-hidden font-sans">
// //         {/* ================= LEFT SIDEBAR ================= */}
// //         {/* Contains: Identity (Hello) + Navigation Buttons */}
// //         <aside className="w-full  lg:w-[280px] shrink-0 flex flex-col gap-8 p-4 md:p-8 lg:pr-0 z-10">
// //           {/* 1. Identity Section */}
// //           <div className="mt-2  lg:mt-4 px-2">
// //             <span className="text-lg md:text-xl text-slate-400 font-light block mb-1">
// //               Hello,
// //             </span>
// //             <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-tight">
// //               {user.name}
// //             </h1>
// //           </div>

// //           {/* 2. Navigation Tabs */}
// //           {/* On mobile: row. On desktop: column */}
// //           <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
// //             <button
// //               onClick={() => setActiveTab("orders")}
// //               className={`flex-1 lg:flex-none flex items-center justify-between px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap group ${
// //                 activeTab === "orders"
// //                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
// //                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
// //               }`}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <ShoppingBag
// //                   size={20}
// //                   className={activeTab === "orders" ? "text-blue-400" : ""}
// //                 />
// //                 <span className="font-bold text-sm md:text-base">
// //                   Your Orders
// //                 </span>
// //               </div>
// //               <span
// //                 className={`h-6 w-6 flex items-center justify-center text-[10px] font-black rounded-full transition-colors ${
// //                   activeTab === "orders"
// //                     ? "bg-white text-[#0f172a]"
// //                     : "bg-slate-700 text-slate-300"
// //                 }`}
// //               >
// //                 {totalOrders || 0}
// //               </span>
// //             </button>

// //             <button
// //               onClick={() => setActiveTab("address")}
// //               className={`flex-1 lg:flex-none flex items-center gap-3 px-5 py-4 rounded-[20px] border-2 transition-all whitespace-nowrap ${
// //                 activeTab === "address"
// //                   ? "bg-gradient-to-r from-blue-600/20 to-transparent border-white text-white"
// //                   : "bg-[#0f172a]/40 border-transparent text-slate-400 hover:bg-[#0f172a]/60"
// //               }`}
// //             >
// //               <MapPin
// //                 size={20}
// //                 className={activeTab === "address" ? "text-blue-400" : ""}
// //               />
// //               <span className="font-bold text-sm md:text-base">Address</span>
// //             </button>
// //           </nav>
// //         </aside>

// //         {/* ================= RIGHT MAIN AREA ================= */}
// //         {/* Contains: Header Card + Scrollable Content */}
// //         <div className="flex-1  flex flex-col h-full overflow-hidden p-4 md:p-8 lg:pl-12 gap-6">
// //           {/* 1. HEADER (Profile Card) */}
// //           {/* Now spans the full width of this column */}
// //           <header className="shrink-0 mt-6 ">
// //             <div className="bg-white text-slate-900 rounded-2xl py-3 px-4 md:px-6 flex items-center justify-between shadow-lg w-full">
// //               {/* User Details */}
// //               <div className="flex items-center gap-6 md:gap-10 overflow-hidden">
// //                 {/* Name */}
// //                 <div className="flex items-center gap-3 shrink-0">
// //                   <div className="p-2 rounded-full text-white shrink-0 bg-gradient-to-b from-[#010B25] to-[#04298B]">
// //                     <User size={18} />
// //                   </div>
// //                   <span className="font-bold text-sm md:text-lg truncate">
// //                     {user.name}
// //                   </span>
// //                 </div>

// //                 {/* Divider */}
// //                 <div className="h-8 border-l border-slate-200 hidden sm:block"></div>

// //                 {/* Phone */}
// //                 <div className="flex items-center gap-3 shrink-0">
// //                   <div className="p-2 rounded-full text-white shrink-0 bg-gradient-to-b from-[#010B25] to-[#04298B]">
// //                     <Phone size={18} />
// //                   </div>
// //                   <span className="font-bold text-sm md:text-lg whitespace-nowrap">
// //                     {user.phone}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Edit Button */}
// //               <button className="text-slate-900 shrink-0">
// //                 <PencilLine size={22} />
// //               </button>
// //             </div>
// //           </header>

// //           {/* 2. SCROLLABLE CONTENT */}
// //           {/* The 'overflow-hidden' here ensures the scrollbar stays INSIDE this container */}
// //           <main className="flex-1 mt-4  overflow-hidden rounded-[2rem] relative">
// //             <div className="h-full w-full">
// //               {activeTab === "orders" ? (
// //                 <OrdersScreen user={data?.user} myOrders={myOrders} />
// //               ) : (
// //                 <AddressScreen />
// //               )}
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //       <Footer />
// //       <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} />
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// // Icons
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import { PiCheckSquareThin, PiSquareThin } from "react-icons/pi";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaEdit } from "react-icons/fa";
// import {
//   MapPin,
//   User,
//   Phone,
//   Loader2,
//   PackageX,
//   Circle,
//   Plus,
// } from "lucide-react";

// // API Hooks
// import { useGetmeQuery } from "../Redux/API/UsersAPI";
// import { useGetMyOrdersQuery } from "../Redux/API/OrderAPI";

// const MyAccount = () => {
//   const { state } = useLocation();
//   const [activeTab, setActiveTab] = useState(state?.tab || "orders");

//   // --- DUMMY ADDRESS STATE ---
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       location: "Golden City Center, Chhatrapati Sambhajinagar, 431001",
//       isDefault: true,
//     },
//     {
//       id: 2,
//       location: "Prozone Mall, Aurangabad, 431001",
//       isDefault: false,
//     },
//   ]);

//   // API Calls
//   const { data: userData, isLoading: userLoading } = useGetmeQuery();
//   const { data: ordersData, isLoading: ordersLoading } = useGetMyOrdersQuery();

//   useEffect(() => {
//     if (state?.tab) {
//       setActiveTab(state?.tab);
//     }
//   }, [state?.tab]);

//   // Data Handling
//   const user = userData?.user || {
//     name: "Guest User",
//     phone: "+91 0000000000",
//   };
//   const myOrdersList = ordersData?.orders || [];
//   const totalOrders = myOrdersList.length;

//   const handleSetDefault = (selectedId) => {
//     const updatedList = addresses.map((addr) => ({
//       ...addr,
//       isDefault: addr.id === selectedId,
//     }));
//     setAddresses(updatedList);
//   };

//   const handleDelete = (id) => {
//     const filtered = addresses.filter((addr) => addr.id !== id);
//     setAddresses(filtered);
//   };

//   // -------------------------------------------
//   // A. RENDER ORDERS
//   // -------------------------------------------
//   const renderOrders = () => {
//     if (ordersLoading) {
//       return (
//         <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-3">
//           <Loader2 size={40} className="animate-spin text-black" />
//           <p>Loading your orders...</p>
//         </div>
//       );
//     }

//     if (!myOrdersList || myOrdersList.length === 0) {
//       return (
//         <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-4 mt-10">
//           <div className="bg-gray-100 p-6 rounded-full">
//             <PackageX size={48} className="text-gray-400" />
//           </div>
//           <p className="text-lg font-medium">No orders found.</p>
//         </div>
//       );
//     }

//     return (
//       <div className="w-full flex flex-col gap-6 mt-2">
//         {myOrdersList.map((order) => {
//           const products = order.products || [];
//           return (
//             <div
//               key={order._id}
//               className="bg-[#FAFAFA] rounded-[20px] p-4 md:p-6 w-full hover:shadow-sm transition-shadow"
//             >
//               {/* Header */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
//                 <div className="flex flex-col gap-1">
//                   <span className="text-xs text-gray-500 font-medium ml-7">
//                     Order ID
//                   </span>
//                   <div className="flex items-center gap-2">
//                     <LiaShoppingBagSolid
//                       size={20}
//                       className="text-black shrink-0"
//                     />
//                     <span className="text-sm md:text-base font-semibold tracking-wide text-black uppercase">
//                       #{order._id.slice(-6)}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap items-center gap-3 md:gap-6">
//                   <span className="text-xs md:text-sm text-gray-600 font-medium">
//                     Date:{" "}
//                     {new Date(order.createdAt).toLocaleDateString("en-GB")}
//                   </span>
//                   <div className="flex items-center gap-2 border border-blue-200 bg-white px-3 py-1 rounded-full shadow-sm">
//                     <Circle
//                       size={8}
//                       fill={
//                         order.Status === "Completed" ? "#10B981" : "#3B82F6"
//                       }
//                       className={
//                         order.Status === "Completed"
//                           ? "text-emerald-500"
//                           : "text-blue-500"
//                       }
//                     />
//                     <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
//                       {order.Status || "Pending"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Products */}
//               <div className="flex flex-col gap-3">
//                 {products.map((item, index) => {
//                   const productDetails = item.productId || {};
//                   const productName =
//                     productDetails.name || "Product Unavailable";
//                   const productPrice = productDetails.price || 0;
//                   const productImg = productDetails.bottleImg || "";

//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl p-3 md:p-4 flex flex-row items-center justify-between shadow-sm border border-gray-100"
//                     >
//                       <div className="flex flex-row items-center gap-4">
//                         <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative p-1">
//                           {productImg ? (
//                             <img
//                               src={productImg}
//                               alt={productName}
//                               className="w-full h-full object-contain mix-blend-multiply"
//                               onError={(e) => {
//                                 e.target.style.display = "none";
//                                 e.target.nextSibling.style.display = "block";
//                               }}
//                             />
//                           ) : null}
//                           <LiaShoppingBagSolid
//                             size={24}
//                             className={`text-gray-300 ${productImg ? "hidden" : "block"}`}
//                           />
//                         </div>
//                         <div className="flex flex-col gap-1">
//                           <h3 className="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2 max-w-[150px] md:max-w-xs">
//                             {productName}
//                           </h3>
//                           <span className="text-sm md:text-lg font-bold text-black">
//                             ₹ {productPrice}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="bg-[#0B0F19] text-white text-[10px] md:text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
//                         Qt - {item.quantity}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Total */}
//               <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200/50">
//                 <span className="text-base md:text-lg font-semibold text-gray-700">
//                   Total Amount
//                 </span>
//                 <span className="text-lg md:text-xl font-bold text-black">
//                   ₹ {order.totalAmount}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   // -------------------------------------------
//   // B. RENDER ADDRESS
//   // -------------------------------------------
//   const renderAddress = () => (
//     <div className="w-full flex flex-col gap-6">
//       {/* Gray Container */}
//       <div className="bg-[#F8F9FA] rounded-[20px] p-6 md:p-8 flex flex-col gap-8">
//         {addresses.map((addr, index) => (
//           <div key={addr.id} className="flex flex-col">
//             {/* ✅ Header Row: Added 'pb-4' for Padding Bottom */}
//             <div className="flex items-center justify-between w-full pb-4">
//               {/* Checkbox */}
//               <div
//                 className="flex items-center gap-3 cursor-pointer select-none group"
//                 onClick={() => handleSetDefault(addr.id)}
//               >
//                 {addr.isDefault ? (
//                   <PiCheckSquareThin
//                     size={26}
//                     color="#25D366"
//                     className="shrink-0"
//                   />
//                 ) : (
//                   <PiSquareThin
//                     size={26}
//                     className="text-gray-300 shrink-0 group-hover:text-gray-400 transition-colors"
//                   />
//                 )}

//                 <span
//                   className={`font-semibold text-sm md:text-base ${addr.isDefault ? "text-black" : "text-gray-500"}`}
//                 >
//                   Mark As Default Address
//                 </span>
//               </div>

//               {/* Add New Address Button */}
//               {index === 0 && (
//                 <button className="flex items-center gap-1 font-bold text-black hover:opacity-70 transition-opacity text-sm md:text-base whitespace-nowrap">
//                   <Plus size={16} strokeWidth={3} /> Add New Address
//                 </button>
//               )}
//             </div>

//             {/* Address Details Card */}
//             <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-[20px] p-5 md:p-6 flex items-center justify-between transition-all hover:shadow-md">
//               <div className="flex items-center gap-4 md:gap-6">
//                 <MapPin size={24} className="text-black shrink-0" />
//                 <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-lg">
//                   {addr.location}
//                 </p>
//               </div>

//               <button
//                 onClick={() => handleDelete(addr.id)}
//                 className="bg-white p-2 rounded-full hover:bg-red-50 transition-colors group"
//                 title="Delete Address"
//               >
//                 <RiDeleteBin6Line size={22} className="text-red-500" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   if (userLoading)
//     return (
//       <div className="h-screen w-full flex items-center justify-center bg-white">
//         Loading...
//       </div>
//     );

//   return (
//     <div className="bg-white text-black h-screen flex flex-col font-sans">
//       {/* 1. TOP HEADER SECTION */}
//       <div className="w-full shrink-0 bg-white z-20 pt-8 pb-6">
//         <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-end">
//           {/* LEFT: Matches Sidebar Width */}
//           <div className="w-full lg:w-[320px] px-6 lg:pl-24 shrink-0 mb-4 lg:mb-0">
//             <span className="text-xl text-black font-medium block mb-1 font-Montserrat">
//               Hello,
//             </span>
//             <h1 className="text-3xl md:text-4xl font-serif font-medium tracking-wide text-black capitalize">
//               {user.name}
//             </h1>
//           </div>
//           <div className="flex-1 w-full px-6 lg:px-0 pr-4 md:pr-8 lg:pr-24">
//             <div className="bg-[#F8F9FA] rounded-[20px] py-4 px-6 flex flex-wrap md:flex-nowrap items-center justify-between w-full h-full">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 rounded-full bg-black text-white shrink-0">
//                     <User size={18} />
//                   </div>
//                   <span className="font-medium text-base md:text-lg truncate text-slate-900 capitalize">
//                     {user.name}
//                   </span>
//                 </div>
//                 <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 rounded-full bg-black text-white shrink-0">
//                     <Phone size={18} />
//                   </div>
//                   <span className="font-medium text-base md:text-lg whitespace-nowrap text-slate-900">
//                     {user.phone}
//                   </span>
//                 </div>
//               </div>
//               <button className="text-black transition-colors shrink-0 ml-auto p-2 hover:bg-gray-200 rounded-full">
//                 <FaEdit size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. HORIZONTAL LINE */}
//       <div className="w-full px-6 lg:px-24 shrink-0">
//         <div className="w-full h-px bg-gray-200" />
//       </div>

//       {/* 3. BOTTOM SECTION */}
//       <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full max-w-[1600px] mx-auto">
//         {/* SIDEBAR */}
//         <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6 px-6 py-6 lg:pl-24 bg-white z-10 border-b lg:border-b-0">
//           <nav className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar py-2">
//             <button
//               onClick={() => setActiveTab("orders")}
//               className={`flex-1 lg:flex-none flex items-center justify-between px-6 py-4 rounded-full transition-all whitespace-nowrap shadow-sm border border-transparent ${activeTab === "orders" ? "bg-black text-white" : "bg-[#F3F3F3] text-black hover:bg-gray-200"}`}
//             >
//               <div className="flex items-center gap-3">
//                 <LiaShoppingBagSolid
//                   size={22}
//                   className={
//                     activeTab === "orders" ? "text-white" : "text-black"
//                   }
//                 />
//                 <span className="font-medium text-sm md:text-base">
//                   Your Orders
//                 </span>
//               </div>
//               <span className="h-6 w-6 flex items-center justify-center text-xs font-bold rounded-full bg-white text-black">
//                 {totalOrders}
//               </span>
//             </button>
//             <button
//               onClick={() => setActiveTab("address")}
//               className={`flex-1 lg:flex-none flex items-center gap-3 px-6 py-4 rounded-full transition-all whitespace-nowrap shadow-sm border border-transparent ${activeTab === "address" ? "bg-black text-white" : "bg-[#F3F3F3] text-black hover:bg-gray-200"}`}
//             >
//               <MapPin
//                 size={20}
//                 className={
//                   activeTab === "address" ? "text-white" : "text-black"
//                 }
//               />
//               <span className="font-medium text-sm md:text-base">Address</span>
//             </button>
//           </nav>
//         </aside>

//         {/* MAIN CONTENT AREA */}
//         <div className="flex-1 flex flex-col h-full overflow-hidden pr-4 md:pr-8 lg:pr-24 py-6">
//           <main className="flex-1 overflow-y-auto overflow-x-hidden rounded-2xl custom-scrollbar">
//             <div className="pb-24">
//               {activeTab === "orders" ? renderOrders() : renderAddress()}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccount;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Icons
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiCheckSquareThin, PiSquareThin } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {
  MapPin,
  User,
  Phone,
  Loader2,
  PackageX,
  Circle,
  Plus,
} from "lucide-react";

// API Hooks
import { useGetmeQuery } from "../Redux/API/UsersAPI";
import { useGetMyOrdersQuery } from "../Redux/API/OrderAPI";

// Import Modal
import AddAddressModal from "../components/Models/AddAddressModal";

const MyAccount = () => {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState(state?.tab || "orders");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- DUMMY ADDRESS STATE ---
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      location: "Golden City Center, Chhatrapati Sambhajinagar, 431001",
      isDefault: true,
    },
    {
      id: 2,
      location: "Prozone Mall, Aurangabad, 431001",
      isDefault: false,
    },
  ]);

  // API Calls (Parallel Fetching)
  const { data: userData, isLoading: userLoading } = useGetmeQuery();
  const { data: ordersData, isLoading: ordersLoading } = useGetMyOrdersQuery();

  useEffect(() => {
    if (state?.tab) {
      setActiveTab(state?.tab);
    }
  }, [state?.tab]);

  // Data Handling
  const user = userData?.user || {
    name: "Guest User",
    phone: "+91 0000000000",
  };
  const myOrdersList = ordersData?.orders || [];
  const totalOrders = myOrdersList.length;

  const handleSetDefault = (selectedId) => {
    const updatedList = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === selectedId,
    }));
    setAddresses(updatedList);
  };

  const handleDelete = (id) => {
    const filtered = addresses.filter((addr) => addr.id !== id);
    setAddresses(filtered);
  };

  const handleAddressAdded = () => {
    console.log("Address added successfully!");
    setIsModalOpen(false);
  };

  // -------------------------------------------
  // SKELETON LOADER FOR TEXT (New Helper)
  // -------------------------------------------
  const TextSkeleton = ({ width = "w-32", height = "h-6" }) => (
    <div className={`${width} ${height} bg-gray-200 rounded animate-pulse`} />
  );

  // -------------------------------------------
  // A. RENDER ORDERS
  // -------------------------------------------
  const renderOrders = () => {
    if (ordersLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-3">
          <Loader2 size={40} className="animate-spin text-black" />
          <p>Loading your orders...</p>
        </div>
      );
    }

    if (!myOrdersList || myOrdersList.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-4 mt-10">
          <div className="bg-gray-100 p-6 rounded-full">
            <PackageX size={48} className="text-gray-400" />
          </div>
          <p className="text-lg font-medium">No orders found.</p>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-6 mt-2">
        {myOrdersList.map((order) => {
          const products = order.products || [];
          const shipping = order.shippingInfo || {};
          const orderAddress = shipping.address
            ? `${shipping.address}, ${shipping.city}, ${shipping.pincode}`
            : "Address details not available";

          return (
            <div
              key={order._id}
              className="bg-[#FAFAFA] rounded-[20px] p-4 md:p-6 w-full hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-medium font-dm ml-7">
                      Order ID
                    </span>
                    <div className="flex items-center gap-2">
                      <LiaShoppingBagSolid
                        size={20}
                        className="text-black shrink-0"
                      />
                      <span className="text-sm md:text-base font-semibold tracking-wide text-black uppercase">
                        #{order._id.slice(-6)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin size={20} className="text-black shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium leading-tight max-w-md">
                      {orderAddress}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-6 self-start md:self-center">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">
                    Date:{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-GB")}
                  </span>
                  <div className="flex items-center gap-2 border border-blue-200 bg-white px-3 py-1 rounded-full shadow-sm">
                    <Circle
                      size={8}
                      fill={
                        order.Status === "Completed" ? "#10B981" : "#3B82F6"
                      }
                      className={
                        order.Status === "Completed"
                          ? "text-emerald-500"
                          : "text-blue-500"
                      }
                    />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      {order.Status || "Pending"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {products.map((item, index) => {
                  const productDetails = item.productId || {};
                  const productName =
                    productDetails.name || "Product Unavailable";
                  const productPrice = productDetails.price || 0;
                  const productImg = productDetails.bottleImg || "";

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-3 md:p-4 flex flex-row items-center justify-between shadow-sm border border-gray-100"
                    >
                      <div className="flex flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative p-1">
                          {productImg ? (
                            <img
                              src={productImg}
                              alt={productName}
                              className="w-full h-full object-contain mix-blend-multiply"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "block";
                              }}
                            />
                          ) : null}
                          <LiaShoppingBagSolid
                            size={24}
                            className={`text-gray-300 ${productImg ? "hidden" : "block"}`}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2 max-w-[150px] md:max-w-xs">
                            {productName}
                          </h3>
                          <span className="text-sm md:text-lg font-bold text-black">
                            ₹ {productPrice}
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0B0F19] text-white text-[10px] md:text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                        Qt - {item.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200/50">
                <span className="text-base md:text-lg font-semibold text-gray-700">
                  Total Amount
                </span>
                <span className="text-lg md:text-xl font-bold text-black">
                  ₹ {order.totalAmount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // -------------------------------------------
  // B. RENDER ADDRESS
  // -------------------------------------------
  const renderAddress = () => (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-[#F8F9FA] rounded-[20px] p-6 md:p-8 flex flex-col gap-8">
        {addresses.map((addr, index) => (
          <div key={addr.id} className="flex flex-col">
            <div className="flex items-center justify-between w-full pb-4">
              <div
                className="flex items-center gap-3 cursor-pointer select-none group"
                onClick={() => handleSetDefault(addr.id)}
              >
                {addr.isDefault ? (
                  <PiCheckSquareThin
                    size={26}
                    color="#25D366"
                    className="shrink-0"
                  />
                ) : (
                  <PiSquareThin
                    size={26}
                    className="text-gray-300 shrink-0 group-hover:text-gray-400 transition-colors"
                  />
                )}

                <span
                  className={`font-semibold text-sm md:text-base ${addr.isDefault ? "text-black" : "text-gray-500"}`}
                >
                  Mark As Default Address
                </span>
              </div>

              {index === 0 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1 font-bold text-black hover:opacity-70 transition-opacity text-sm md:text-base whitespace-nowrap"
                >
                  <Plus size={16} strokeWidth={3} /> Add New Address
                </button>
              )}
            </div>

            <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-[20px] p-5 md:p-6 flex items-center justify-between transition-all hover:shadow-md">
              <div className="flex items-center gap-4 md:gap-6">
                <MapPin size={24} className="text-black shrink-0" />
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-lg">
                  {addr.location}
                </p>
              </div>

              <button
                onClick={() => handleDelete(addr.id)}
                className="bg-white p-2 rounded-full hover:bg-red-50 transition-colors group"
                title="Delete Address"
              >
                <RiDeleteBin6Line size={22} className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ❌ REMOVED BLOCKING LOADER
  // Humne wo "if (userLoading) return..." hata diya hai.
  // Ab UI turant load hoga.

  return (
    <div className="bg-white text-black h-screen flex flex-col font-sans">
      {/* 1. TOP HEADER SECTION */}
      <div className="w-full shrink-0 bg-white z-20 pb-6">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-end">
          <div className="w-full lg:w-[320px] px-6 lg:pl-24 shrink-0 mb-4 lg:mb-0">
            <p className="text-xs text-gray-400 mt-2 mb-6">
              Home / My Account →
            </p>
            <span className="text-xl text-black font-medium block mb-1 font-Poppins">
              Hello,
            </span>
            <h1 className="text-3xl md:text-4xl font-Montserrat font-medium tracking-wide text-black capitalize">
              {/* ✅ Skeleton Loader for Name */}
              {userLoading ? <TextSkeleton width="w-48" /> : user.name}
            </h1>
          </div>

          <div className="flex-1 w-full px-6 lg:px-0 pr-4 md:pr-8 lg:pr-24">
            <div className="bg-[#F8F9FA] rounded-[20px] py-4 px-6 flex flex-wrap md:flex-nowrap items-center justify-between w-full h-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 font-Poppins rounded-full bg-black text-white shrink-0">
                    <User size={18} />
                  </div>
                  <span className="font-medium text-base md:text-lg truncate text-slate-900 capitalize">
                    {/* ✅ Skeleton Loader for Name in Card */}
                    {userLoading ? <TextSkeleton width="w-32" /> : user.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-black text-white shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="font-Poppins text-base md:text-lg whitespace-nowrap text-slate-900">
                    {/* ✅ Skeleton Loader for Phone */}
                    {userLoading ? <TextSkeleton width="w-32" /> : user.phone}
                  </span>
                </div>
              </div>
              <button className="text-black transition-colors shrink-0 ml-auto p-2 hover:bg-gray-200 rounded-full">
                <FaEdit size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. HORIZONTAL LINE */}
      <div className="w-full px-6 lg:px-24 shrink-0">
        <div className="w-full h-px bg-gray-200" />
      </div>

      {/* 3. BOTTOM SECTION */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full max-w-[1600px] mx-auto">
        <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6 px-6 py-6 lg:pl-24 bg-white z-10 border-b lg:border-b-0">
          <nav className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar py-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex-1 lg:flex-none flex items-center justify-between px-6 py-4 rounded-full transition-all whitespace-nowrap shadow-sm border border-transparent ${activeTab === "orders" ? "bg-black text-white" : "bg-[#F3F3F3] text-black hover:bg-gray-200"}`}
            >
              <div className="flex items-center gap-3">
                <LiaShoppingBagSolid
                  size={22}
                  className={
                    activeTab === "orders" ? "text-white" : "text-black"
                  }
                />
                <span className="font-medium font-dm text-sm md:text-base">
                  Your Orders
                </span>
              </div>
              <span className="h-6 w-6 flex items-center justify-center text-xs font-bold rounded-full bg-white text-black">
                {totalOrders}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className={`flex-1 lg:flex-none flex items-center gap-3 px-6 py-4 rounded-full transition-all whitespace-nowrap shadow-sm border border-transparent ${activeTab === "address" ? "bg-black text-white" : "bg-[#F3F3F3] text-black hover:bg-gray-200"}`}
            >
              <MapPin
                size={20}
                className={
                  activeTab === "address" ? "text-white" : "text-black"
                }
              />
              <span className="font-medium text-sm md:text-base">Address</span>
            </button>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col h-full overflow-hidden pr-4 md:pr-8 lg:pr-24 py-6">
          <main className="flex-1 overflow-y-auto overflow-x-hidden rounded-2xl custom-scrollbar">
            <div className="pb-24">
              {activeTab === "orders" ? renderOrders() : renderAddress()}
            </div>
          </main>
        </div>
      </div>

      {/* 4. MODAL */}
      {isModalOpen && (
        <AddAddressModal
          onClose={() => setIsModalOpen(false)}
          onAddAddress={handleAddressAdded}
        />
      )}
    </div>
  );
};

export default MyAccount;
