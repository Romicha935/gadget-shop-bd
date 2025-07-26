
import logo from '../../../public/logo.jpg'; 
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="w-full bg-black text-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-1 px-4 flex justify-center gap-4">
        <span>info@gadgetshopbd.com</span>
        <a href="#" className="hover:underline">Offer</a>
        <a href="#" className="hover:underline">New Arrival</a>
        <a href="#" className="hover:underline">Customer Service</a>
      </div>

      {/* Main Header */}
      <div className=" py-3 px-4  flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold ">Gadget Shop BD</h1>
        </div>
{/* Search Bar */}
<div className="w-full md:w-1/2">
  <div className="relative">
    <input
      type="text"
      placeholder="Search your keyword..."
      className="w-full pl-10 pr-4 py-2 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <span className="absolute bg-green-500 text-white right-3 top-1/2 transform -translate-y-1/2 py-3 px-5 ">
      <FaSearch/>
    </span>
  </div>
</div>


        {/* Icons */}
        <div className="flex gap-4 text-gray-200 text-xl">
          <FaHeart className="cursor-pointer hover:text-red-500" />
          <FaShoppingCart className="cursor-pointer hover:text-green-600" />
          <FaUser className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Category Menu Bar */}
      <nav className="bg-black text-white px-4 py-2 text-sm">
        <ul className="flex flex-wrap gap-6 justify-center">
          <li><a href="#" className="hover:text-green-400">Laptop</a></li>
          <li><a href="#" className="hover:text-green-400">Desktop and Server</a></li>
          <li><a href="#" className="hover:text-green-400">Gaming</a></li>
          <li><a href="#" className="hover:text-green-400">Monitor</a></li>
          <li><a href="#" className="hover:text-green-400">Printer</a></li>
          <li><a href="#" className="hover:text-green-400">Camera</a></li>
          <li><a href="#" className="hover:text-green-400">Accessories</a></li>
          <li><a href="#" className="hover:text-green-400">Software</a></li>
          <li><a href="#" className="hover:text-green-400">Store</a></li>
        </ul>
      </nav>
    </div>
  );
}
