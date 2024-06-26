import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  // fake api store response
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  //fetching product data
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("error ");
      setPosts([]);
    }
    setLoading(false);
  }
//useEfect
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>

      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          //In case of no data found then
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};
export default Home;
