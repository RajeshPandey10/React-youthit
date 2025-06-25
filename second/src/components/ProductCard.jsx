

const ProductCard = ({ item }) => {
  const handleAddToCart = () => {
    alert(`${item.title || "Product"} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <img
        src={item.images}
        alt={item.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {item.title || "Untitled Product"}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.description || "No description available"}
        </p>
        <p className="text-xl font-semibold text-green-600 mt-4">
          ${item.price || "0.00"}
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
