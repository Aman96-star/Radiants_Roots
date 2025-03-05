import React, { useEffect, useState } from "react";
import SingleProduct from "./singleProduct";

function Homepage() {
    const [products, setProducts] = useState([]);  // State to store the products

    useEffect(() => {
        // Fetch data only when the component mounts
        fetch('https://dummyjson.com/products')
            .then(res => res.json())               // Parse response as JSON
            .then(data => setProducts(data.products))  // Store the products in state
            .catch(err => console.error("Error fetching data:", err));  // Handle errors
    }, []);  // Empty dependency array to run once on component mount

    return (
        <>
        
        <div className="w-screen h-fit">
            <h1 className="text-[43px] text-center"> Home </h1>
            
            {/* Displaying fetched products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4">
                          <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <h2 >Rating : <span className="text-yellow-500">{product.rating}</span></h2>
                        <h2 className="text-xl">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Homepage;
