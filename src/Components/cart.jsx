import React, { useEffect, useState } from "react";

function Cart() {
  const [carts, setCarts] = useState([]); // State to store cart data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('https://dummyjson.com/carts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch carts');
        }
        return response.json();
      })
      .then((data) => {
        setCarts(data.carts); // Store the fetched cart data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Set error message if fetching fails
        setLoading(false);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="w-screen h-fit">
        <div className="text-black text-center">
          <h1>Cart Items</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 border border-black bg-slate-300">
          {carts.map((cart) => (
            <div key={cart.id} className="border p-4 mb-4 rounded-lg">
              <h2 className="font-bold">Cart ID: {cart.id}</h2>
             

              <h4 className="font-semibold mt-4">Products:</h4>
              <ul className=" list-inside">
                {cart.products.map((product) => (
                  <li key={product.id} className="mt-2">
                   
                    <p>Price: ${product.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
