
import {useEffect,useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const useEff = () => {
const [product, setProducts] = useState(null)
const [isLoading,setIsLoading] =useState(false)
    useEffect(
        ()=>{

            const fn=async()=>{
                 setIsLoading(true)
                  const response = await axios.get("https://dummyjson.com/products")
                 
                  setProducts(response.data.products)
                  if(response.status=200){
                    console.log("product fetched succesfully")
                  }
                  setIsLoading(false)
            }

            fn()
        }
        
        ,[])
        
        console.log(product)
  return (
  <>
    {isLoading ? (
         <h1 className="text-3xl text-black p-10">Loading...</h1>
       ) : product && product.length > 0 ? (
         <>
           <h1 className="p-4 text-3xl font-bold italic text-center">our products</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-5">
             {product.map((product) => (
               <ProductCard item={product} key={product.id} />
             ))}
           </div>
         </>
       ) : (
         <h1 className="text-3xl text-black p-10">No items found</h1>
       )}
  </>
  )
}

export default useEff