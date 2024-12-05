import { FiShoppingCart, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export const MenuCard = ({menuItems, addItem}) => {

  return (
    <div className="flex min-h-screen bg-transparent">
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              role="article"
              onClick={() => addItem(item)}
            >
              <img
                src={`${item.image}`}
                alt={item.label}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65";
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600 mb-4">{item?.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${item?.price || item?.total }</span>
                  {/* <button
                    onClick={() => addItem(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
