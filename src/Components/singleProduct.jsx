import React ,{useState,useEffect} from "react";

function SingleProduct({ productId }){
    const [product, setProduct] = useState(null); // State to store single product data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch all products
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })

      // sdpsaidoids
      
      .then((data) => {
        // Find the product with the given productId
        const foundProduct = data.products.find((product) => product.id === productId);
        if (foundProduct) {
          setProduct(foundProduct); // Set the found product in the state
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]); // Re-run the effect if the productId changes

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }
    return(
        <div className="product-container">
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Category: {product.category}</p>
      </div>
    )
}

export default SingleProduct;