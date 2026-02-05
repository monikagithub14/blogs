import React, { useState } from "react";
import { useAddAddressMutation } from "../../Redux/API/AddressAPI";

export default function AddAddressModal({ onClose, onAddAddress }) {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    houseNo: "",
    area: "",
    city: "",
    country: "",
  });

  const [addAddress, { isLoading }] = useAddAddressMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.contactNo || !formData.houseNo) {
      alert("Please fill in the required fields");
      return;
    }

    try {
      const response = await addAddress(formData).unwrap();
      console.log("Address Added:", response);

      // 1. Data Refresh karein
      if (onAddAddress) onAddAddress();

      // 2. ✅ Form Close karein (Successfully added)
      onClose();
    } catch (error) {
      console.error("Failed to add address:", error);
      alert("Failed to add address. Please try again.");
    }
  };

  return (
    // MAIN OVERLAY
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-full h-screen backdrop-blur-sm">
      {/* ✅ CLICK OUTSIDE TO CLOSE */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* ✅ FORM CONTAINER (Exact Styling: 464px x 581px, Radius 20px) */}
      <div className="relative bg-white w-[380px] min-h-[480px] rounded-[20px] p-6 shadow-xl z-10 flex flex-col items-center">
        {/* ✅ CLOSE BUTTON (X) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-black font-bold text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-8 mt-2 font-['Poppins']">
          Add Address
        </h2>

        {/* INPUTS CONTAINER */}
        <div className="w-full flex flex-col  gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-100
            text-sm
             placeholder:text-gray-400 placeholder:text-sm
              border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
            className="w-full bg-gray-100 
            text-sm
             placeholder:text-gray-400 placeholder:text-sm
             border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            name="houseNo"
            placeholder="Home No / Street"
            value={formData.houseNo}
            onChange={handleChange}
            className="w-full bg-gray-100
            text-sm
             placeholder:text-gray-400 placeholder:text-sm
              border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            name="area"
            placeholder="Near Area"
            value={formData.area}
            onChange={handleChange}
            className="w-full bg-gray-100
            text-sm
             placeholder:text-gray-400 placeholder:text-sm
               border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full bg-gray-100
            text-sm
             placeholder:text-gray-400 placeholder:text-sm *
              border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-gray-100
            text-sm
             placeholder:text-gray-500 placeholder:text-sm
              border-none rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* ✅ BUTTON (Exact Styling: 168px x 41px, Radius 101px) */}
        <div className=" mb-2 mt-6">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-[168px] h-[41px] rounded-[101px] bg-[#020617] text-white text-sm font-medium hover:bg-gray-800 transition active:scale-95 disabled:opacity-70 flex items-center justify-center"
          >
            {isLoading ? "Saving..." : "Add Address"}
          </button>
        </div>
      </div>
    </div>
  );
}
