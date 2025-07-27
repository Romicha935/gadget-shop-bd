import { FaLaptop, FaDesktop, FaTabletAlt, FaMobileAlt, FaCamera, FaKeyboard, FaHeadphones } from "react-icons/fa";

const categories = [
  { name: "Laptop", icon: <FaLaptop /> },
  { name: "Desktop", icon: <FaDesktop /> },
  { name: "Tablet", icon: <FaTabletAlt /> },
  { name: "Phone", icon: <FaMobileAlt /> },
  { name: "Camera", icon: <FaCamera /> },
  { name: "Keyboard", icon: <FaKeyboard /> },
  { name: "Headphones", icon: <FaHeadphones /> },
];

export default function TopCategories() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-300 py-4 px-2 flex justify-between items-center">
  <h2 className="text-lg font-semibold">Top Categories</h2>
  <button className="text-sm text-blue-600 hover:underline">All Categories</button>
</div>

       
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-green-100 transition cursor-pointer"
            >
              <div className="text-3xl text-green-600 mb-2">{category.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
