import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const UseEffect = () => {
  const [item, setItem] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fn = async () => {
      setloading(true);
      const response = await axios.get(
        "https://dummyjson.com/products?limit=20"
      );
      console.log(response.data.products);
      setItem(response.data.products);
      setloading(false);
    };
    fn();
  }, []);
  

  return (
    <div>
        {loading ? (
             <h1 className="text-3xl text-black p-10">Loading...</h1>
           ) : item && item.length > 0 ? (
             <>
               <h1 className="p-4 text-3xl font-bold italic text-center">Items</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-5">
                 {item.map((item) => (
                   <ProductCard item={item} key={item.id} />
                 ))}
               </div>
             </>
           ) : (
             <h1 className="text-3xl text-black p-10">No items found</h1>
           )}
    </div>
  );
};

export default UseEffect;
